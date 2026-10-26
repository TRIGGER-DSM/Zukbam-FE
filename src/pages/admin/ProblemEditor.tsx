import { useId, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router'
import { Button, ButtonLink } from '../../components/ui/Button'
import { AdminHeading, DeleteConfirmation } from '../../components/admin/AdminUI'
import { Card, Content, Field, Notice, Row, TwoColumns } from '../../components/admin/admin.styles'
import { useAdmin } from '../../data/admin'
import type { AdminProblem } from '../../data/admin'

const emptyProblem: AdminProblem = { id: 0, title: '', level: 'Silver 3', category: '그래프', date: '', submissions: 0, rate: '-', description: '', input: '', output: '', time: '', memory: '256' }
export default function ProblemEditor() {
  const { problemId } = useParams()
  const { problems } = useAdmin()
  const existing = problems.find(p => p.id === Number(problemId))
  if (problemId && !existing) return <Navigate to="/admin/problems" replace />
  return <Editor key={problemId ?? 'new'} existing={existing} />
}
function Editor({ existing }: { existing?: AdminProblem }) {
  const { problems, setProblems, setMessage } = useAdmin()
  const navigate = useNavigate()
  const [value, setValue] = useState(existing ?? emptyProblem)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [deleting, setDeleting] = useState(false)
  const prefix = useId()
  const update = (key: keyof AdminProblem, text: string) => setValue(v => ({ ...v, [key]: text }))
  function save(event: React.FormEvent) {
    event.preventDefault()
    const next: Record<string, string> = {}
    if (!value.title.trim()) next.title = '문제 이름은 필수 입력 항목입니다.'
    if (!value.description.trim()) next.description = '문제 설명은 필수 입력 항목입니다.'
    if (!value.input.trim()) next.input = '예시 입력은 필수 입력 항목입니다.'
    if (!value.output.trim()) next.output = '예시 출력은 필수 입력 항목입니다.'
    if (!value.time || Number(value.time) < 1 || Number(value.time) > 10) next.time = '시간 제한은 1~10초 사이로 입력합니다.'
    if (!value.memory || Number(value.memory) < 32 || Number(value.memory) > 1024) next.memory = '메모리 제한은 32~1024MB 사이로 입력합니다.'
    setErrors(next)
    if (Object.keys(next).length) { document.getElementById(`${prefix}-${Object.keys(next)[0]}`)?.focus(); return }
    const saved = { ...value, title: value.title.trim(), id: existing?.id ?? Math.max(...problems.map(p => p.id), 0) + 1, date: existing?.date ?? new Intl.DateTimeFormat('sv-SE').format(new Date()).replaceAll('-', '.') }
    setProblems(items => existing ? items.map(p => p.id === existing.id ? saved : p) : [saved, ...items])
    setMessage(existing ? '문제의 변경사항을 저장했습니다.' : '새 문제를 등록했습니다.')
    navigate('/admin/problems')
  }
  function textField(key: 'title' | 'description' | 'input' | 'output' | 'time' | 'memory', label: string, options: { area?: boolean; placeholder?: string; help?: string; unit?: string; mono?: boolean } = {}) {
    const props = { id: `${prefix}-${key}`, value: value[key], onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => update(key, e.target.value), placeholder: options.placeholder, 'aria-label': label, 'aria-invalid': Boolean(errors[key]), 'aria-describedby': `${prefix}-${key}-help`, required: true }
    return <Field><span>{label}</span>{options.area ? <textarea {...props} css={options.mono && { '&&': { fontFamily: 'monospace', minHeight: 180 } }} /> : <Row css={{ flexWrap: 'nowrap' }}><input {...props} type={options.unit ? 'number' : 'text'} min={key === 'time' ? 1 : key === 'memory' ? 32 : undefined} max={key === 'time' ? 10 : key === 'memory' ? 1024 : undefined} />{options.unit && <span>{options.unit}</span>}</Row>}<small id={`${prefix}-${key}-help`} className={errors[key] ? 'error' : undefined}>{errors[key] || options.help}</small></Field>
  }
  return <><AdminHeading category="문제 관리" title={existing ? `${existing.id}. ${existing.title} 수정` : '새 문제 등록'} description={existing ? '등록된 문제의 제목, 설명, 난이도, 카테고리, 예시, 제한 조건을 수정합니다.' : '문제 이름, 설명, 난이도, 카테고리, 예시 입력·출력, 시간·메모리 제한을 입력합니다.'} /><form noValidate onSubmit={save}><Content>{existing && <Notice>ⓘ 문제 번호 {existing.id} · 등록일 {existing.date} · 풀이 기록 {existing.submissions}건 · 존재하지 않는 문제 번호로 접근하면 문제 목록으로 돌아갑니다.</Notice>}{Object.keys(errors).length > 0 && <Notice role="alert" css={{ color: '#ff7d7d', borderColor: '#ff7d7d' }}>! 필수 항목 {Object.keys(errors).length}개를 확인해 주세요. 표시된 항목을 입력한 뒤 다시 등록해 주세요.</Notice>}<Card><h2>기본 정보</h2>{textField('title', '문제 이름', { placeholder: '문제 이름을 입력하세요' })}<TwoColumns><Field><span>난이도</span><select value={value.level} onChange={e => update('level', e.target.value)}>{['Bronze 5', 'Bronze 4', 'Bronze 3', 'Bronze 2', 'Bronze 1', 'Silver 5', 'Silver 4', 'Silver 3', 'Silver 2', 'Silver 1', 'Gold 5', 'Gold 4', 'Gold 3', 'Gold 2', 'Gold 1', 'Platinum 5'].map(l => <option key={l}>{l}</option>)}</select></Field><Field><span>카테고리</span><select value={value.category} onChange={e => update('category', e.target.value)}>{['그래프', '동적 계획법', '문자열', '구현', '수학', '자료 구조', '탐색', '정렬', '그리디'].map(c => <option key={c}>{c}</option>)}</select></Field></TwoColumns></Card><Card><h2>문제 내용</h2>{textField('description', '문제 설명', { area: true, help: '마크다운을 지원합니다.', placeholder: '문제 설명을 입력하세요' })}<TwoColumns>{textField('input', '예시 입력', { area: true, mono: true })}{textField('output', '예시 출력', { area: true, mono: true })}</TwoColumns></Card><Card><h2>제한 조건</h2><TwoColumns>{textField('time', '시간 제한', { unit: '초', help: '1~10초 사이로 입력합니다.' })}{textField('memory', '메모리 제한', { unit: 'MB', help: '32~1024MB 사이로 입력합니다.' })}</TwoColumns></Card><Row>{existing && <Button variant="secondary" className="red" onClick={() => setDeleting(true)}>문제 삭제</Button>}<span className="grow" /><ButtonLink variant="secondary" to="/admin/problems">취소</ButtonLink><Button type="submit">{existing ? '변경사항 저장' : '문제 등록'}</Button></Row></Content></form>{existing && deleting && <DeleteConfirmation kind="problem" name={`${existing.id}. ${existing.title}`} count={existing.submissions} onClose={() => setDeleting(false)} onConfirm={() => { setProblems(items => items.filter(p => p.id !== existing.id)); setMessage('문제가 삭제되었습니다.'); navigate('/admin/problems') }} />}</>
}
