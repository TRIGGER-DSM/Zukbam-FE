import { useState } from 'react'
import { Link } from 'react-router'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { service, type ProblemSummary } from '../../api/service'
import { useAuthSession } from '../../auth/useAuthSession'
import QueryStatus from '../../components/ui/QueryStatus'
import Pagination from '../../components/ui/Pagination'
import { Button, ButtonLink } from '../../components/ui/Button'
import { AdminHeading, Badge, DeleteConfirmation } from '../../components/admin/AdminUI'
import { Content, Filters, Row, TableWrap } from '../../components/admin/admin.styles'

export default function ProblemManagement() {
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState('')
  const [rank, setRank] = useState('')
  const [deleting, setDeleting] = useState<ProblemSummary | null>(null)
  const session = useAuthSession()
  const client = useQueryClient()
  const result = useQuery({ queryKey: ['problems', page], queryFn: ({ signal }) => service.problems(page, signal) })
  const deletion = useMutation({ mutationFn: service.deleteProblem, onSuccess: async () => {
    setDeleting(null)
    await client.invalidateQueries({ queryKey: ['problems'] })
    client.removeQueries({ queryKey: ['problem'] })
    if (page > 0 && result.data?.problems.length === 1) setPage(page - 1)
  } })
  const visible = (result.data?.problems ?? []).filter(problem => `${problem.problemId} ${problem.title}`.toLowerCase().includes(query.toLowerCase()) && (!rank || problem.rank === rank))
  return <>
    <AdminHeading category="문제 관리" title="문제 목록" description="현재 페이지에서 문제 번호, 이름, 난이도로 검색합니다." actions={<ButtonLink to="/admin/problems/new">문제 등록</ButtonLink>} />
    <Content><Filters><input aria-label="현재 페이지 문제 검색" placeholder="현재 페이지에서 문제 검색" value={query} onChange={event => setQuery(event.target.value)} /><select aria-label="난이도" value={rank} onChange={event => setRank(event.target.value)}><option value="">난이도 전체</option>{[1,2,3,4,5].map(level => <option key={level} value={`LEVEL_${level}`}>레벨 {level}</option>)}</select><Button variant="secondary" onClick={() => { setQuery(''); setRank('') }}>초기화</Button></Filters>
    <p>총 {result.data?.totalElements ?? '—'}문제 · 20개씩 보기</p>
    <QueryStatus pending={result.isPending} error={result.error} retry={() => { void result.refetch() }} />
    <TableWrap><table><thead><tr><th>문제</th><th>난이도</th><th>관리</th></tr></thead><tbody>{visible.map(problem => <tr key={problem.problemId}><td><Link to={`/problems/${problem.problemId}`}>{problem.problemId}. {problem.title}</Link></td><td><Badge>{problem.rank.replace('LEVEL_', '레벨 ')}</Badge></td><td><Row><ButtonLink variant="secondary" to={`/admin/problems/${problem.problemId}/edit`}>상세</ButtonLink><Button variant="secondary" disabled={!session || deletion.isPending} onClick={() => { deletion.reset(); setDeleting(problem) }}>삭제</Button></Row></td></tr>)}{result.isSuccess && !visible.length && <tr><td colSpan={3}>표시할 문제가 없습니다.</td></tr>}</tbody></table></TableWrap>
    <Pagination page={page} totalPages={result.data?.totalPages ?? 0} onPageChange={setPage} /></Content>
    {deleting && <DeleteConfirmation kind="problem" name={`${deleting.problemId}. ${deleting.title}`} count={null} pending={deletion.isPending} error={deletion.error} onClose={() => setDeleting(null)} onConfirm={() => { if (!deletion.isPending) deletion.mutate(deleting.problemId) }} />}
  </>
}
