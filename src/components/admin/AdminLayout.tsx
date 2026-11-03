import { theme } from '../../styles/theme'
import styled from '@emotion/styled'

import { useEffect, useState } from 'react'
import { Link, Navigate, Outlet, useLocation } from 'react-router'
import SiteFooter from '../layout/SiteFooter'
import { AdminContext, initialGroups, initialProblems } from '../../data/admin'
import { AdminRoot, Header, Tabs, Wide } from './admin.styles'

const Brand = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '18px',
  fontWeight: 900,
})

const Mark = styled.span({
  width: '30px',
  height: '30px',
  display: 'grid',
  placeItems: 'center',
  background: theme.colors.primary,
  color: '#000',
  borderRadius: '8px',
  fontSize: '14px',
})

const AdminBadge = styled.span({
  background: theme.colors.accentBackground,
  color: theme.colors.primary,
  borderRadius: '99px',
  padding: '3px 10px',
  fontSize: '12px',
  fontWeight: 700,
})

const Profile = styled(Link)({
  width: '44px',
  height: '44px',
  border: `2px solid ${theme.colors.primary}`,
  borderRadius: '50%',
  padding: '8px',
  display: 'grid',
  placeItems: 'center',
  '& span': {
    width: '24px',
    height: '24px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '50%',
    background: theme.colors.primary,
    color: '#000',
    fontSize: '12px',
    fontWeight: 900,
  },
})

const AdminNotification = styled(Wide)({
  paddingTop: 20,
  color: '#39ff14',
  display: 'flex',
  justifyContent: 'space-between',
})

const DismissNotification = styled.button({
  background: 'none',
  border: 0,
  color: 'inherit',
})

export default function AdminLayout() {
  const [problems, setProblems] = useState(initialProblems)
  const [groups, setGroups] = useState(initialGroups)
  const [message, setMessage] = useState('')
  const { pathname } = useLocation()
  const section = pathname.includes('/problems')
    ? 'problems'
    : pathname.includes('/groups')
      ? 'groups'
      : 'dashboard'
  const tabs =
    section === 'dashboard'
      ? [
          ['/admin/dashboard', '학생 풀이 현황'],
          ['/admin/statistics', '문제 풀이 통계'],
          ['/admin/students', '학생별 성취도'],
        ]
      : section === 'problems'
        ? [
            ['/admin/problems', '문제 목록'],
            ['/admin/problems/new', '문제 등록'],
          ]
        : [
            ['/admin/groups', '그룹 목록'],
            ['/admin/groups/new', '그룹 생성'],
          ]
  useEffect(() => {
    document.title = `${section === 'dashboard' ? '대시보드' : section === 'problems' ? '문제 관리' : '그룹 관리'} | Algo 관리자`
  }, [section])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <AdminContext.Provider
      value={{ problems, setProblems, groups, setGroups, message, setMessage }}
    >
      <AdminRoot>
        <Header>
          <Wide>
            <Brand to="/" aria-label="Algo 홈">
              <Mark>A</Mark>Algo
              <AdminBadge>관리자</AdminBadge>
            </Brand>
            <nav aria-label="관리자 메뉴">
              {[
                ['dashboard', '대시보드'],
                ['problems', '문제 관리'],
                ['groups', '그룹 관리'],
              ].map(([key, label]) => (
                <Link
                  key={key}
                  to={`/admin/${key}`}
                  aria-current={section === key ? 'page' : undefined}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <Profile to="/social/account" aria-label="내 계정">
              <span>M</span>
            </Profile>
          </Wide>
        </Header>
        <Tabs aria-label="관리자 하위 메뉴">
          <Wide>
            {tabs.map(([to, label], index) => (
              <Link
                key={to}
                to={to}
                aria-current={
                  pathname === to ||
                  (index === 0 &&
                    !tabs.slice(1).some(([path]) => pathname.startsWith(path)))
                    ? 'page'
                    : undefined
                }
              >
                {label}
              </Link>
            ))}
          </Wide>
        </Tabs>
        <main>
          {message && (
            <AdminNotification role="status">
              {message}
              <DismissNotification
                onClick={() => setMessage('')}
                aria-label="알림 닫기"
              >
                ✕
              </DismissNotification>
            </AdminNotification>
          )}
          <Outlet />
        </main>
        <SiteFooter />
      </AdminRoot>
    </AdminContext.Provider>
  )
}
export function AdminIndex() {
  return <Navigate to="/admin/dashboard" replace />
}
