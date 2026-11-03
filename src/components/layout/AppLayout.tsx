import { theme } from '../../styles/theme'
import styled from '@emotion/styled'

import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { getPageMetadata, navigation } from '../../config/navigation'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import SubNavigation from './SubNavigation'

const SignupPage = styled.div({
  minHeight: '100svh',
})

const SkipLink = styled.a({
  position: 'fixed',
  top: '8px',
  left: '8px',
  zIndex: 10,
  transform: 'translateY(-150%)',
  padding: '10px 16px',
  background: theme.colors.primary,
  color: theme.colors.dark,
  borderRadius: '8px',
  '&:focus': {
    transform: 'none',
  },
})

export default function AppLayout() {
  const { pathname } = useLocation()
  const page = getPageMetadata(pathname)
  useEffect(() => {
    document.title = `${page.title} | Algo`
  }, [page.title])
  return (
    <SignupPage>
      <SkipLink href="#main-content">본문으로 이동</SkipLink>
      <SiteHeader section={page.section} />
      {page.section !== 'home' && page.section !== 'ranking' && (
        <SubNavigation
          items={navigation[page.section]}
          label={
            page.section === 'problems'
              ? '문제 하위 메뉴'
              : `${page.title} 하위 메뉴`
          }
          activePath={page.activeSubmenu}
        />
      )}
      <main id="main-content">
        <Outlet />
      </main>
      <SiteFooter />
    </SignupPage>
  )
}
