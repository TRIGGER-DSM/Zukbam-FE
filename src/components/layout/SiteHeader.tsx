import { Link } from 'react-router'
import type { Section } from '../../config/navigation'
import { ButtonLink } from '../ui/Button'
import { useAuthSession } from '../../auth/useAuthSession'
import {
  SiteHeaderSurface,
  HeaderInner,
  Brand,
  BrandMark,
  MainNav,
  HomeProfile,
} from './SiteHeader.styles'

export default function SiteHeader({ section }: { section: Section }) {
  const session = useAuthSession()
  return (
    <SiteHeaderSurface>
      <HeaderInner>
        <Brand to="/" aria-label="Algo 홈">
          <BrandMark aria-hidden="true">A</BrandMark>
          <span>Algo</span>
        </Brand>
        <MainNav aria-label="주요 메뉴">
          <Link to="/" aria-current={section === 'home' ? 'page' : undefined}>
            홈
          </Link>
          <Link
            to="/problems"
            aria-current={section === 'problems' ? 'page' : undefined}
          >
            문제
          </Link>
          <Link
            to="/ranking"
            aria-current={section === 'ranking' ? 'page' : undefined}
          >
            랭킹
          </Link>
          <Link
            to="/social/growth"
            aria-current={section === 'social' ? 'page' : undefined}
          >
            소셜
          </Link>
        </MainNav>
        {!session ? (
          <ButtonLink to="/login">로그인</ButtonLink>
        ) : (
          <HomeProfile to="/social/account" aria-label="내 계정">
            <span>{session.email.slice(0, 1).toUpperCase()}</span>
          </HomeProfile>
        )}
      </HeaderInner>
    </SiteHeaderSurface>
  )
}
