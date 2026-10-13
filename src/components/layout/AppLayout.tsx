import { getStyles } from '../../styles/classes'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import { getPageMetadata, navigation } from '../../config/navigation'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'
import SubNavigation from './SubNavigation'

export default function AppLayout() {
  const { pathname } = useLocation()
  const page = getPageMetadata(pathname)
  useEffect(() => { document.title = `${page.title} | Algo` }, [page.title])
  return <div className="signup-page" css={getStyles("signup-page")}>
    <a className="skip-link" css={getStyles("skip-link")} href="#main-content">본문으로 이동</a>
    <SiteHeader section={page.section} />
    {page.section !== 'home' && page.section !== 'ranking' && <SubNavigation items={navigation[page.section]} label={page.section === 'problems' ? '문제 하위 메뉴' : `${page.title} 하위 메뉴`} activePath={page.activeSubmenu} />}
    <main id="main-content"><Outlet /></main>
    <SiteFooter />
  </div>
}
