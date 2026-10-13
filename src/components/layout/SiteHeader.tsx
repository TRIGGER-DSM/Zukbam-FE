import { getStyles } from '../../styles/classes'
import { Link } from 'react-router'
import type { Section } from '../../config/navigation'
import { ButtonLink } from '../ui/Button'

export default function SiteHeader({ section }: { section: Section }) {
  return <header className="site-header" css={getStyles("site-header")}><div className="wide-container header-inner" css={getStyles("wide-container header-inner")}>
    <Link className="brand" css={getStyles("brand")} to="/" aria-label="Algo 홈"><span className="brand-mark" css={getStyles("brand-mark")} aria-hidden="true">A</span><span>Algo</span></Link>
    <nav className="main-nav" css={getStyles("main-nav")} aria-label="주요 메뉴">
      <Link to="/" aria-current={section === 'home' ? 'page' : undefined}>홈</Link>
      <Link to="/problems" aria-current={section === 'problems' ? 'page' : undefined}>문제</Link>
      <Link to="/ranking" aria-current={section === 'ranking' ? 'page' : undefined}>랭킹</Link>
      <Link to="/social/growth" aria-current={section === 'social' ? 'page' : undefined}>소셜</Link>
    </nav>
    {section === 'auth' ? <ButtonLink className="header-login" css={getStyles("header-login")} to="/login">로그인</ButtonLink> : <Link className="home-profile" css={getStyles("home-profile")} to="/profile" aria-label="내 프로필"><span>M</span></Link>}
  </div></header>
}
