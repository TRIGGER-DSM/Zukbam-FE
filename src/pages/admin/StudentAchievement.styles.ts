import { WideContainer } from '../../components/layout/Container.styles'
import { theme } from '../../styles/theme'
import styled from '@emotion/styled'
import { Link } from 'react-router'
import { Button, ButtonLink } from '../../components/ui/Button'
import { Row } from '../../components/admin/admin.styles'

export const SearchStudentButton = styled(Button)({
  padding: '11px 18px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
})

export const StudentSearchError = styled.p({
  color: '#ff7d7d',
  marginTop: 12,
})

export const StudentHeader = styled(Row)({
  '@media(max-width:640px)': {
    '& > div:first-of-type': {
      flexBasis: 'calc(100% - 84px)',
    },
  },
  gap: 20,
})

export const StudentAvatar = styled.span({
  display: 'grid',
  placeItems: 'center',
  width: 64,
  height: 64,
  borderRadius: '50%',
  background: '#062900',
  color: '#39ff14',
  fontSize: 24,
  fontWeight: 900,
})

export const StudentIdentity = styled.div({
  flex: 1,
  minWidth: 0,
})

export const StudentName = styled.h2({ fontSize: '24px !important' })

export const StudentContact = styled.p({
  fontSize: 14,
  color: '#c2c4c8',
  marginTop: 4,
})

export const ViewStudentGroup = styled(ButtonLink)({
  padding: '11px 18px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
})

export const ActivityCaption = styled.p({
  color: theme.colors.muted,
  fontSize: 13,
})

export const EmptyActivityNotice = styled.p({
  color: theme.colors.muted,
})

export const SubmissionTableTitle = styled.h2({
  flex: 1,
  minWidth: 180,
})

export const SubmissionCount = styled.span({
  color: theme.colors.muted,
  fontSize: 13,
})

export const SubmissionResultCell = styled.td<{ $result: string }>(
  ({ $result }) =>
    $result === '정답'
      ? {
          color: theme.colors.primary,
        }
      : {
          color: '#ff7d7d',
        },
)

export const EmptySubmissionRow = styled.td({
  textAlign: 'center',
  padding: '36px',
})

export const DashboardReturnLink = styled(Link)({
  color: theme.colors.primary,
})

export const ActivityPanel = styled(WideContainer.withComponent('section'))([
  {
    paddingBlock: '48px',
    '& h2': {
      margin: 0,
      fontSize: '26px',
      lineHeight: '36px',
      fontWeight: 400,
    },
    '& h2 strong': {
      color: theme.colors.accent,
      fontWeight: 900,
    },
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      paddingBlock: '36px',
      '& h2': {
        fontSize: '21px',
      },
    },
  },
  { width: '100%', padding: 0, margin: 0 },
])

export const ActivityHeader = styled.div([
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '24px',
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      gap: '12px',
      alignItems: 'flex-start',
      '& > div:first-of-type': {
        gap: '8px',
      },
    },
  },
  {
    flexWrap: 'wrap',
    gap: 16,
    '& h2': { whiteSpace: 'nowrap' },
  },
])

export const ActivityHeading = styled.div([
  {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  { minWidth: 240 },
])

export const ActivityIcon = styled.span({
  display: 'grid',
  placeItems: 'center',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  background: theme.colors.accentBackground,
  flexShrink: 0,
  '& img': {
    width: '18px',
    height: '18px',
  },
})

export const ActivityYear = styled.p({
  color: theme.colors.accent,
  fontSize: '13px',
  lineHeight: '26px',
})

export const ActivityYearSelect = styled.select({
  width: '112px',
  height: '44px',
  padding: '10px 14px',
  background: theme.colors.input,
  border: `1.6px solid ${theme.colors.border}`,
  borderRadius: '8px',
  color: theme.colors.text,
  font: 'inherit',
  fontSize: '16px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: '94px',
    paddingInline: '8px',
    fontSize: '14px',
  },
})

export const ActivitySummary = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',
  borderTop: `.8px solid ${theme.colors.border}`,
  marginTop: '24px',
  paddingTop: '20px',
  color: theme.colors.secondary,
  fontSize: '13px',
  lineHeight: '21.13px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexWrap: 'wrap',
  },
})

export const LongestStreak = styled.span({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})
