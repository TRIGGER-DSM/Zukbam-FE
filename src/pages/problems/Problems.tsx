import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { service } from '../../api/service'
import QueryStatus from '../../components/ui/QueryStatus'
import {
  ProblemsListSection, ProblemListHeading, ProblemFilters, ProblemFilterTop,
  ProblemSearch, FilterReset, ProblemResults, ProblemResult, ProblemResultMeta,
  ProblemTier, ProblemEmpty, ProblemPagination, ProblemsHeading, ProblemsEyebrow,
  ProblemsHeadingDescription,
} from './Problems.styles'

export default function Problems() {
  const [page, setPage] = useState(0)
  const [query, setQuery] = useState('')
  const [rank, setRank] = useState('')
  const result = useQuery({ queryKey: ['problems', page], queryFn: ({ signal }) => service.problems(page, signal) })
  const filtered = (result.data?.problems ?? []).filter(problem =>
    `${problem.problemId} ${problem.title}`.toLowerCase().includes(query.trim().toLowerCase()) && (!rank || problem.rank === rank))
  return <>
    <ProblemsHeading><div><ProblemsEyebrow>문제</ProblemsEyebrow><h1>오늘 풀 문제를 고르세요.</h1>
      <ProblemsHeadingDescription>문제 조건과 난이도를 확인하고 풀 문제를 선택하세요.</ProblemsHeadingDescription></div></ProblemsHeading>
    <ProblemsListSection id="problem-list">
      <ProblemListHeading><h2>문제 목록</h2><p>총 {result.data?.totalElements ?? '—'}문제</p></ProblemListHeading>
      <ProblemFilters onSubmit={event => event.preventDefault()}>
        <ProblemFilterTop>
          <ProblemSearch><input type="search" aria-label="현재 페이지 문제 검색" placeholder="현재 페이지에서 번호 또는 이름 검색" value={query} onChange={event => setQuery(event.target.value)} /></ProblemSearch>
          <select aria-label="현재 페이지 난이도" value={rank} onChange={event => setRank(event.target.value)}><option value="">난이도 전체</option>{[1,2,3,4,5].map(level => <option key={level} value={`LEVEL_${level}`}>레벨 {level}</option>)}</select>
          <FilterReset variant="secondary" type="button" onClick={() => { setQuery(''); setRank('') }}>초기화</FilterReset>
        </ProblemFilterTop>
      </ProblemFilters>
      <QueryStatus pending={result.isPending} error={result.error} retry={() => { void result.refetch() }} />
      <ProblemResults aria-label="문제 목록">{filtered.map(problem => <li key={problem.problemId}>
        <ProblemResult to={`/problems/${problem.problemId}`}><div><p>{problem.problemId}. {problem.title}</p><ProblemResultMeta><ProblemTier>{problem.rank.replace('LEVEL_', '레벨 ')}</ProblemTier></ProblemResultMeta></div><span>›</span></ProblemResult>
      </li>)}</ProblemResults>
      {result.isSuccess && !filtered.length && <ProblemEmpty role="status">표시할 문제가 없습니다.</ProblemEmpty>}
      <ProblemPagination page={page} totalPages={result.data?.totalPages ?? 0} onPageChange={setPage} />
    </ProblemsListSection>
  </>
}
