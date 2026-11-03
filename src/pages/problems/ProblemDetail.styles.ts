import { theme } from '../../styles/theme'
import { WideContainer } from '../../components/layout/Container.styles'
import styled from '@emotion/styled'
import { ButtonLink } from '../../components/ui/Button'

export const DetailWriteTop = styled(ButtonLink)({
  '& img': {
    width: '16px',
    height: '16px',
  },
  gap: '8px',
})

export const DetailContent = styled(WideContainer)({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 772fr) minmax(0, 300fr)',
  gap: '48px',
  paddingBlock: '72px',
  alignItems: 'start',
  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
    gap: '40px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '40px 48px',
  },
})

export const DetailArticle = styled.article({
  minWidth: 0,
  '& section + section': {
    marginTop: '40px',
  },
  '& h2': {
    margin: 0,
    fontSize: '26px',
    lineHeight: '36px',
    fontWeight: 400,
  },
  '& section > p': {
    maxWidth: '760px',
    paddingTop: '8px',
    color: theme.colors.secondary,
    fontSize: '16px',
    lineHeight: '26px',
  },
})

export const DetailExamples = styled.div({
  maxWidth: '760px',
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  gap: '16px',
  marginTop: '8px',
  '& h3': {
    margin: 0,
    fontSize: '20px',
    lineHeight: '28px',
    fontWeight: 400,
  },
  '& pre': {
    margin: '6px 0 0',
    padding: '18px',
    border: `.8px solid ${theme.colors.border}`,
    borderRadius: '8px',
    background: theme.colors.dark,
    overflowX: 'auto',
    fontFamily: "'Cascadia Code', Consolas, monospace",
    fontSize: '14px',
    lineHeight: '22.4px',
  },
  '& code': {
    font: 'inherit',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
    gap: '24px',
  },
})

export const DetailUnavailable = styled.p({
  color: theme.colors.secondary,
  fontSize: '14px',
  lineHeight: '24px',
})

export const DetailSidebar = styled.aside({
  paddingLeft: '28px',
  borderLeft: `.8px solid ${theme.colors.border}`,
  minWidth: 0,
  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    padding: '32px 0 0',
    borderLeft: 0,
    borderTop: `.8px solid ${theme.colors.border}`,
  },
})

export const DetailInfo = styled.div({
  '& h2': {
    margin: 0,
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 700,
  },
  '& p': {
    paddingTop: '6px',
    color: theme.colors.secondary,
    fontSize: '16px',
    lineHeight: '26px',
  },
  '& + div:not(:last-of-type)': {
    marginTop: '32px',
    paddingTop: '32px',
    borderTop: `.8px solid ${theme.colors.border}`,
  },
})

export const DetailTier = styled.span({
  display: 'inline-flex',
  padding: '3px 8px',
  background: theme.colors.accentBackground,
  color: theme.colors.accent,
  borderRadius: '999px',
  fontSize: '12px',
  fontWeight: 800,
  lineHeight: '19.5px',
})

export const DetailSidebarAction = styled.div({
  marginTop: '32px',
  paddingTop: '32px',
  borderTop: `.8px solid ${theme.colors.border}`,
  '& > a': {
    width: '100%',
  },
})

export const DetailBack = styled.div({
  marginTop: '32px',
  paddingTop: '32px',
  borderTop: `.8px solid ${theme.colors.border}`,
  '& a': {
    color: theme.colors.accent,
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 800,
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  },
})

export const ProblemDetailHeading = styled(
  WideContainer.withComponent('section'),
)({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '24px',
  paddingBlock: '48px 28px',
  '& h1': {
    paddingTop: '10px',
    fontSize: '36px',
    fontWeight: 900,
    lineHeight: '48px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingBlock: '36px 20px',
    '& h1': {
      fontSize: '29px',
      lineHeight: '40px',
    },
  },
})

export const ProblemDetailEyebrow = styled.p({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.colors.accent,
  fontSize: '13px',
  lineHeight: '26px',
  '& img': {
    width: '16px',
    height: '16px',
  },
})

export const ProblemDetailHeadingDescription = styled.p({
  paddingTop: '8px',
  color: theme.colors.secondary,
  fontSize: '16px',
  lineHeight: '26px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '14px',
    lineHeight: '24px',
  },
})
