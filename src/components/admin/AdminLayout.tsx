import { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router'
import SiteFooter from '../layout/SiteFooter'
import { AdminContext, initialGroups, initialProblems } from '../../data/admin'
import { AdminRoot, Header, Tabs, Wide } from './admin.styles'

export default function AdminLayout() {
  const [problems, setProblems] = useState(initialProblems)
  const [groups, setGroups] = useState(initialGroups)
  const [message, setMessage] = useState('')
  const { pathname } = useLocation()
  const section = pathname.includes('/problems') ? 'problems' : pathname.includes('/groups') ? 'groups' : 'dashboard'
  const tabs = section === 'dashboard' ? [['/admin/dashboard', '학생 풀이 현황'], ['/admin/statistics', '문제 풀이 통계'], ['/admin/students', '학생별 성취도']] : section === 'problems' ? [['/admin/problems', '문제 목록'], ['/admin/problems/new', '문제 등록']] : [['/admin/groups', '그룹 목록'], ['/admin/groups/new', '그룹 생성']]
  useEffect(() => { document.title = `${section === 'dashboard' ? '대시보드' : section === 'problems' ? '문제 관리' : '그룹 관리'} | Algo 관리자` }, [section])
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return <AdminContext.Provider value={{ problems, setProblems, groups, setGroups, message, setMessage }}><AdminRoot><Header><Wide><Link to="/" className="brand" aria-label="Algo 홈"><span className="mark">A</span>Algo<span className="admin-badge">관리자</span></Link><nav aria-label="관리자 메뉴">{[['dashboard', '대시보드'], ['problems', '문제 관리'], ['groups', '그룹 관리']].map(([key, label]) => <Link key={key} to={`/admin/${key}`} aria-current={section === key ? 'page' : undefined}>{label}</Link>)}</nav><Link to="/social/account" className="profile" aria-label="내 계정"><span>M</span></Link></Wide></Header><Tabs aria-label="관리자 하위 메뉴"><Wide>{tabs.map(([to, label], index) => <Link key={to} to={to} aria-current={(pathname === to || (index === 0 && !tabs.slice(1).some(([path]) => pathname.startsWith(path)))) ? 'page' : undefined}>{label}</Link>)}</Wide></Tabs><main>{message && <Wide role="status" css={{ paddingTop: 20, color: '#39ff14', display: 'flex', justifyContent: 'space-between' }}>{message}<button onClick={() => setMessage('')} css={{ background: 'none', border: 0, color: 'inherit' }} aria-label="알림 닫기">✕</button></Wide>}<Outlet /></main><SiteFooter /></AdminRoot></AdminContext.Provider>
}
export function AdminIndex() { return <Navigate to="/admin/dashboard" replace /> }
