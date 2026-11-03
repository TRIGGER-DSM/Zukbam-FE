import { theme } from '../../styles/theme'
import { WideContainer } from '../../components/layout/Container.styles'
import styled from '@emotion/styled'
import StatsGrid from '../../components/ui/StatsGrid'
import CodeBlock from '../../components/ui/CodeBlock'

export const SolutionContent = styled(WideContainer)({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 772fr) minmax(0, 300fr)',
  gap: '48px',
  alignItems: 'start',
  paddingBlock: '72px',
  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
    gap: '40px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '40px 48px',
  },
})

export const SolutionArticle = styled.article({
  minWidth: 0,
})

export const SolutionMetrics = styled(StatsGrid)({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  margin: 0,
  borderBlock: `.8px solid ${theme.colors.border}`,
  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    padding: '18px',
    minHeight: '93px',
    borderRight: `.8px solid ${theme.colors.border}`,
  },
  '& > div:last-child': {
    borderRight: 0,
  },
  '& dt': {
    order: 2,
    paddingTop: '3px',
    color: theme.colors.muted,
    fontSize: '12px',
    lineHeight: '26px',
  },
  '& dd': {
    order: 1,
    margin: 0,
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 700,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    '& > div': {
      padding: '14px 10px',
      minHeight: '85px',
    },
  },
})

export const SolutionCode = styled(CodeBlock)({
  margin: '24px 0 0',
  minHeight: '172px',
  padding: '18px',
  border: `.8px solid ${theme.colors.border}`,
  borderRadius: '8px',
  background: theme.colors.dark,
  color: theme.colors.text,
  fontFamily: "'Cascadia Code', Consolas, monospace",
  fontSize: '14px',
  lineHeight: '22.4px',
  overflowX: 'auto',
  tabSize: 4,
  '& code': {
    font: 'inherit',
  },
})

export const SolutionUnavailable = styled.p({
  marginTop: '24px',
  padding: '18px',
  color: theme.colors.secondary,
  fontSize: '14px',
  lineHeight: '24px',
})

export const SolutionSidebar = styled.aside({
  paddingLeft: '28px',
  borderLeft: `.8px solid ${theme.colors.border}`,
  minWidth: 0,
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
  '& section + section': {
    marginTop: '32px',
    paddingTop: '32px',
    borderTop: `.8px solid ${theme.colors.border}`,
  },
  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    padding: '32px 0 0',
    borderLeft: 0,
    borderTop: `.8px solid ${theme.colors.border}`,
  },
})

export const SolutionProblemLink = styled.div({
  marginTop: '32px',
  paddingTop: '32px',
  borderTop: `.8px solid ${theme.colors.border}`,
  '& a': {
    color: theme.colors.accent,
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 800,
  },
})

export const SolutionDetailHeading = styled(
  WideContainer.withComponent('section'),
)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  gap: '24px',
  paddingBlock: '48px 28px',
  '& h1': {
    paddingTop: '10px',
    fontSize: '36px',
    lineHeight: '48px',
    fontWeight: 900,
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

export const SolutionDetailEyebrow = styled.p({
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

export const SolutionDetailHeadingDescription = styled.p({
  paddingTop: '8px',
  color: theme.colors.secondary,
  fontSize: '16px',
  lineHeight: '26px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '14px',
    lineHeight: '24px',
  },
})
