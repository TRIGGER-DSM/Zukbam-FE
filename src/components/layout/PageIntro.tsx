import { theme } from '../../styles/theme'
import styled from '@emotion/styled'

const PageIntroSection = styled.section({
  height: '230px',
  padding: '56px 0 64px',
  background: theme.colors.dark,
  borderBottom: `.8px solid ${theme.colors.border}`,
  '& h1': {
    fontSize: '36px',
    fontWeight: 900,
    lineHeight: '47.99px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    height: 'auto',
    paddingBlock: '40px',
    '& h1': {
      fontSize: '32px',
    },
  },
})

const IntroContainer = styled.div({
  width: `min(${theme.layout.intro}, calc(100% - 48px))`,
  marginInline: 'auto',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: 'calc(100% - 40px)',
  },
})

const Eyebrow = styled.p({
  fontSize: '13px',
  lineHeight: '21.13px',
})

const IntroDescription = styled.p({
  paddingTop: '14px',
  fontSize: '16px',
  lineHeight: '26px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '14px',
    lineHeight: '24px',
  },
})

export default function PageIntro({
  id,
  eyebrow,
  title,
  description,
  className,
}: {
  id: string
  eyebrow: string
  title: string
  description: string
  className?: string
}) {
  return (
    <PageIntroSection className={className} aria-labelledby={id}>
      <IntroContainer>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 id={id}>{title}</h1>
        <IntroDescription>{description}</IntroDescription>
      </IntroContainer>
    </PageIntroSection>
  )
}
