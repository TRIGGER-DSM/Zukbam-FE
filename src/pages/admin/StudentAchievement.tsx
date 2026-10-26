import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import ActivitySection from '../../components/home/ActivitySection'
import { Button, ButtonLink } from '../../components/ui/Button'
import { AdminHeading, AdminStats, Badge } from '../../components/admin/AdminUI'
import { Card, Content, Filters, Row, TableWrap } from '../../components/admin/admin.styles'
import { adminStudents, useAdmin } from '../../data/admin'
import { records as historyRecords } from '../../data/historyData'

const records = historyRecords.slice(1).map(record => ({ ...record, runtime: record.id === 2 ? '36ms' : record.id === 4 ? '112ms' : '-' }))

export default function StudentAchievement() {
  const { studentId = '20241234' } = useParams()
  const navigate = useNavigate()
  const { groups } = useAdmin()
  const student = adminStudents.find(s => s.id === studentId)
  const [query, setQuery] = useState(student?.name ?? '')
  const [group, setGroup] = useState('')
  const [error, setError] = useState('')
  const minseo = student?.id === '20241234'
  return <><AdminHeading category="대시보드" title="학생별 성취도" description="학생을 검색해 풀이 기록, 스트릭, 잔디, 최근 제출 기록을 확인합니다." /><Content><form onSubmit={e => { e.preventDefault(); const match = adminStudents.find(s => `${s.name} ${s.id} ${s.email}`.includes(query.trim()) && (!group || groups.find(g => String(g.id) === group)?.members.includes(s.id))); if (match && query.trim()) { navigate(`/admin/students/${match.id}`); setError('') } else setError('검색된 학생이 없습니다.') }}><Filters><input aria-label="학생 검색" placeholder="학생 이름 또는 학번 검색" value={query} onChange={e => setQuery(e.target.value)} /><select aria-label="학생 검색 그룹" value={group} onChange={e => setGroup(e.target.value)}><option value="">전체 그룹</option>{groups.map(g => <option value={g.id} key={g.id}>{g.name}</option>)}</select><Button type="submit">검색</Button></Filters>{error && <p role="status" className="red" css={{ marginTop: 12 }}>{error}</p>}</form>{student ? <><Card><Row className="student-header" css={{ gap: 20 }}><span css={{ display: 'grid', placeItems: 'center', width: 64, height: 64, borderRadius: '50%', background: '#062900', color: '#39ff14', fontSize: 24, fontWeight: 900 }}>{minseo ? 'M' : student.name.slice(1, 2)}</span><div className="grow"><Row><h2 css={{ fontSize: '24px !important' }}>{student.name}</h2><Badge>{minseo ? 'Gold 5' : '학생'}</Badge><Badge>{student.group || '소속 없음'}</Badge></Row><p css={{ fontSize: 14, color: '#c2c4c8', marginTop: 4 }}>{student.id} · {student.email}{minseo && ' · 010-2345-6791'}</p></div><ButtonLink variant="secondary" to={`/admin/groups?group=${groups.find(g => g.members.includes(student.id))?.id ?? ''}`}>그룹에서 보기</ButtonLink></Row></Card><AdminStats items={[{ label: '풀이 수', value: String(student.submitted) }, { label: '정답률', value: student.rate }, { label: '현재 스트릭', value: minseo ? '12일' : '-' }, { label: '최장 스트릭', value: minseo ? '31일' : '-' }]} /><Card><h2>풀이 활동 (잔디)</h2><p className="muted" css={{ fontSize: 13 }}>최근 365일 활동 기록 · 5단계 색상</p>{minseo ? <div css={{ '& .home-activity': { width: '100%', padding: 0, margin: 0 }, '&& .activity-chart': { minWidth: 1000 }, '&& .activity-heading': { flexWrap: 'wrap', gap: 16 }, '&& .home-heading-group': { minWidth: 240 }, '&& .activity-heading h2': { whiteSpace: 'nowrap' } }}><ActivitySection /></div> : <p className="muted">이 학생의 풀이 활동 샘플 데이터가 없습니다.</p>}</Card><Card id="records"><Row><h2 className="grow">최근 제출 기록</h2><span className="muted" css={{ fontSize: 13 }}>{minseo ? `${records.length}건` : '0건'}</span></Row><TableWrap><table><thead><tr>{['문제', '언어', '결과', '실행 시간', '제출 시각'].map(label => <th key={label} scope="col">{label}</th>)}</tr></thead><tbody>{minseo ? records.map(record => <tr key={record.id}><td><Link to={`/problems/history/${record.id}`}>{record.problemId}. {record.title}</Link></td><td>{record.language}</td><td className={record.result === '정답' ? 'green' : 'red'}>{record.result}</td><td>{record.runtime}</td><td>{record.submittedAt}</td></tr>) : <tr><td colSpan={5} className="empty">최근 제출 기록이 없습니다.</td></tr>}</tbody></table></TableWrap></Card></> : <Card><h2>학생을 찾을 수 없습니다.</h2><Link className="green" to="/admin/dashboard">학생 목록으로 돌아가기 →</Link></Card>}</Content></>
}
