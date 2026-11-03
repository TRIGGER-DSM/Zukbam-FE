import { theme } from '../../styles/theme'
import { WideContainer } from './Container.styles'
import styled from '@emotion/styled'

const SiteFooterSurface = styled.footer({
  borderTop: `.8px solid ${theme.colors.border}`,
  paddingBlock: '32px',
})

const FooterInner = styled(WideContainer)({
  '& a:hover': {
    color: theme.colors.primary,
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  color: theme.colors.muted,
  fontSize: '13px',
  lineHeight: '21.13px',
  '& nav': {
    display: 'flex',
    gap: '18px',
  },
  '& a': {
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: '16px',
  },
})

export default function SiteFooter() {
  return (
    <SiteFooterSurface>
      <FooterInner>
        <p>Algo algorithm practice service</p>
        <nav aria-label="서비스 정책">
          <a href="/terms">이용약관</a>
          <a href="/privacy">개인정보처리방침</a>
        </nav>
      </FooterInner>
    </SiteFooterSurface>
  )
}
