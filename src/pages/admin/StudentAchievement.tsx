import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useProfile, useActivity } from '../../api/queries'
import { useAuthSession } from '../../auth/useAuthSession'
import QueryStatus from '../../components/ui/QueryStatus'
import { AdminHeading, AdminStats, Badge } from '../../components/admin/AdminUI'
import { Card, Content, Filters, Row } from '../../components/admin/admin.styles'
import { Button } from '../../components/ui/Button'
import ActivityHeatmap from '../../components/activity/ActivityHeatmap'
import { StudentHeader, StudentIdentity, StudentName, StudentContact } from './StudentAchievement.styles'

export default function StudentAchievement() {
  const { studentId } = useParams()
  const session = useAuthSession()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const valid = Boolean(studentId && /^\d+$/.test(studentId) && Number(studentId) > 0)
  const profile = useProfile(valid ? studentId : 'me')
  const activity = useActivity(valid ? studentId : 'me')
  if (!session) return <Content><p role="status">로그인 후 이용해 주세요.</p></Content>
  return <><AdminHeading category="대시보드" title="학생별 성취도" description="그룹 멤버의 프로필과 풀이 활동을 확인합니다." /><Content>
    <form onSubmit={event => { event.preventDefault(); if (/^\d+$/.test(query) && Number(query) > 0) navigate(`/admin/students/${query}`) }}><Filters><input aria-label="유저 ID" placeholder="유저 ID로 조회" pattern="[0-9]+" required value={query} onChange={event => setQuery(event.target.value)} /><Button type="submit">조회</Button></Filters></form>
    {!valid ? <p>그룹 목록에서 멤버를 선택하거나 유저 ID를 입력해 주세요.</p> : <>
      <QueryStatus pending={profile.isPending} error={profile.error} retry={() => { void profile.refetch() }} />
      {profile.data && <Card><StudentHeader><StudentIdentity><Row><StudentName>{profile.data.name}</StudentName><Badge>{profile.data.rank}</Badge></Row><StudentContact>{profile.data.email}{profile.data.student && ` · ${profile.data.student.grade}학년 ${profile.data.student.class}반 ${profile.data.student.number}번`}</StudentContact></StudentIdentity></StudentHeader></Card>}
      <AdminStats items={[{ label: '해결한 문제', value: String(profile.data?.solvedCount ?? '—') }, { label: '점수', value: String(profile.data?.score ?? '—') }, { label: '현재 스트릭', value: `${activity.streak.data?.currentStreak ?? '—'}일` }, { label: '최장 스트릭', value: `${activity.streak.data?.maxStreak ?? '—'}일` }]} />
      <Card><h2>최근 365일 풀이 활동</h2><QueryStatus pending={activity.grass.isPending || activity.streak.isPending} error={activity.grass.error ?? activity.streak.error} retry={() => { void activity.grass.refetch(); void activity.streak.refetch() }} />{activity.grass.data && <ActivityHeatmap levels={activity.days.map(day => Math.min(day.count,4))} dates={activity.days.map(day => day.date)} label="최근 365일 풀이 활동" compact />}</Card>
      <Card><h2>최근 제출 기록</h2><p>제출 기록 조회는 아직 지원되지 않습니다.</p></Card>
    </>}
  </Content></>
}
