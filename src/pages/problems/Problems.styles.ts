import { theme } from '../../styles/theme'
import { WideContainer } from '../../components/layout/Container.styles'
import styled from '@emotion/styled'
import Pagination from '../../components/ui/Pagination'
import { Button } from '../../components/ui/Button'
import { Link } from 'react-router'

export const ProblemsIcon = styled.img({
  width: '18px',
  height: '18px',
  flexShrink: 0,
})

export const ProblemsListSection = styled(
  WideContainer.withComponent('section'),
)({
  paddingBlock: '56px 72px',
  scrollMarginTop: '24px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '28px 48px',
  },
})

export const ProblemListHeading = styled.div({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '16px',
  '& h2': {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    margin: 0,
    fontSize: '26px',
    lineHeight: '36px',
    fontWeight: 400,
  },
  '& > p': {
    color: theme.colors.muted,
    fontSize: '13px',
    lineHeight: '21px',
  },
})

export const ProblemsIconCircle = styled.span({
  width: '40px',
  height: '40px',
  display: 'grid',
  placeItems: 'center',
  borderRadius: '50%',
  background: theme.colors.accentBackground,
})

export const ProblemFilters = styled.form({
  marginTop: '20px',
  padding: '20px',
  border: `.8px solid ${theme.colors.border}`,
  borderRadius: '8px',
  background: theme.colors.surface,
  '& select': {
    height: '49px',
    width: '100%',
    minWidth: 0,
    border: `1.6px solid ${theme.colors.border}`,
    borderRadius: '8px',
    background: theme.colors.input,
    color: theme.colors.text,
    fontSize: '16px',
    padding: '10px 12px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '14px',
  },
})

export const ProblemFilterTop = styled.div({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) repeat(3, 168px) 44px',
  gap: '8px',
  [`@media (max-width: ${theme.breakpoints.compact})`]: {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr)) 44px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: 'minmax(0, 1fr) 44px',
    '& > select': {
      gridColumn: '1 / -1',
    },
    '& > select:last-of-type': {
      gridColumn: 1,
    },
  },
})

export const ProblemSearch = styled.div({
  position: 'relative',
  minWidth: 0,
  '& > img': {
    position: 'absolute',
    top: '15px',
    left: '14px',
    pointerEvents: 'none',
  },
  '& input': {
    height: '49px',
    width: '100%',
    minWidth: 0,
    border: `1.6px solid ${theme.colors.border}`,
    borderRadius: '8px',
    background: theme.colors.input,
    color: theme.colors.text,
    fontSize: '16px',
    padding: '10px 12px',
    paddingLeft: '42px',
  },
  '& input::placeholder': {
    color: theme.colors.muted,
    opacity: 1,
  },
  [`@media (max-width: ${theme.breakpoints.compact})`]: {
    gridColumn: '1 / -1',
  },
})

export const FilterReset = styled(Button)({
  width: '44px',
  height: '44px',
  minHeight: '44px',
  padding: 0,
})

export const ProblemFilterBottom = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  paddingTop: '14px',
  '& > select': {
    width: '153px',
    height: '44px',
    flexShrink: 0,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& > select': {
      alignSelf: 'flex-end',
    },
  },
})

export const ProblemQuickFilters = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '10px',
})

export const UnsolvedFilter = styled.label({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '13px',
  fontWeight: 800,
  lineHeight: '21px',
  '& input': {
    width: '18px',
    height: '18px',
    margin: 0,
    accentColor: theme.colors.primary,
  },
})

export const QuickFilterLabel = styled.span({
  color: theme.colors.muted,
  fontSize: '12px',
  lineHeight: '19.5px',
})

export const QuickFilter = styled.button({
  border: '1px solid transparent',
  background: theme.colors.surface,
  color: theme.colors.secondary,
  padding: '3px 8px',
  borderRadius: '999px',
  fontSize: '12px',
  lineHeight: '19.5px',
  fontWeight: 800,
  '&:hover': {
    background: theme.colors.input,
  },
  "&[aria-pressed='true']": {
    borderColor: theme.colors.primary,
    background: theme.colors.accentBackground,
    color: theme.colors.primary,
  },
})

export const ProblemResults = styled.ul({
  margin: '24px 0 0',
  padding: 0,
  listStyle: 'none',
  borderTop: `.8px solid ${theme.colors.border}`,
})

export const ProblemResult = styled(Link)({
  '& p': {
    fontSize: '16px',
    lineHeight: '26px',
  },
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '24px',
  padding: '20px 12px',
  minHeight: '98px',
  borderBottom: `.8px solid ${theme.colors.border}`,
  borderRadius: '8px',
  '&:hover': {
    background: theme.colors.surface,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: '12px',
    paddingInline: '4px',
  },
})

export const ProblemResultMeta = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '16px',
  paddingTop: '6px',
  color: theme.colors.muted,
  fontSize: '13px',
  lineHeight: '21px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: '8px',
  },
})

export const ProblemTier = styled.span({
  display: 'inline-flex',
  padding: '3px 8px',
  background: theme.colors.accentBackground,
  color: theme.colors.accent,
  fontSize: '12px',
  fontWeight: 800,
  lineHeight: '19.5px',
  borderRadius: '999px',
})

export const ProblemCategory = styled.span({
  padding: '3px 8px',
  borderRadius: '999px',
  background: theme.colors.surface,
  color: theme.colors.secondary,
  fontSize: '12px',
  fontWeight: 800,
  lineHeight: '19.5px',
})

export const ProblemEmpty = styled.p({
  padding: '40px 16px',
  textAlign: 'center',
  color: theme.colors.secondary,
  fontSize: '14px',
  lineHeight: '24px',
})

export const ProblemPagination = styled(Pagination)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4px',
  paddingTop: '28px',
  '& button': {
    display: 'grid',
    placeItems: 'center',
    width: '40px',
    height: '40px',
    border: 0,
    borderRadius: '8px',
    background: 'transparent',
    color: theme.colors.secondary,
    fontSize: '14px',
    fontWeight: 800,
  },
  "& button[aria-current='page']": {
    background: theme.colors.primary,
    color: theme.colors.dark,
  },
  '& button:disabled': {
    cursor: 'default',
  },
})

export const ProblemsHeading = styled(WideContainer.withComponent('section'))({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '24px',
  paddingBlock: '48px 28px',
  '& > div': {
    maxWidth: '560px',
  },
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

export const ProblemsEyebrow = styled.p({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  color: theme.colors.accent,
  fontSize: '13px',
  lineHeight: '26px',
  '& img': {
    width: '16px',
    height: '16px',
  },
})

export const ProblemsHeadingDescription = styled.p({
  paddingTop: '8px',
  color: theme.colors.secondary,
  fontSize: '16px',
  lineHeight: '26px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '14px',
    lineHeight: '24px',
  },
})

export const RecentProblemSurface = styled(Link)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',
  padding: '18px 4px',
  minHeight: '94px',
  borderBottom: `.8px solid ${theme.colors.border}`,
  '& p': {
    fontSize: '16px',
    lineHeight: '26px',
  },
  '&:hover': {
    background: theme.colors.surface,
  },
})

export const RecentProblemMeta = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '12px',
  paddingTop: '6px',
  color: theme.colors.muted,
  fontSize: '12px',
  fontWeight: 700,
  lineHeight: '19.5px',
})

export const RecentProblemTier = styled.span({
  display: 'inline-flex',
  padding: '3px 8px',
  background: theme.colors.accentBackground,
  color: theme.colors.accent,
  fontSize: '12px',
  fontWeight: 800,
  lineHeight: '19.5px',
  borderRadius: '999px',
})

export const ProblemsRecent = styled(WideContainer.withComponent('section'))({
  paddingBlock: '24px 56px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '20px 28px',
  },
})

export const ProblemsRecentGrid = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  borderBlock: `.8px solid ${theme.colors.border}`,
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
  },
})

export const RecentUpdates = styled.section({
  padding: '28px 36px 28px 0',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '24px 0',
  },
})

export const RecentHeading = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  '& h2': {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    margin: 0,
    fontSize: '20px',
    lineHeight: '27.7px',
    fontWeight: 400,
  },
  '& > a': {
    color: theme.colors.accent,
    fontSize: '16px',
    fontWeight: 800,
    lineHeight: '26px',
    textDecoration: 'underline',
    whiteSpace: 'nowrap',
  },
  [`@media (max-width: ${theme.breakpoints.compact})`]: {
    flexWrap: 'wrap',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    '& h2': {
      fontSize: '18px',
    },
    '& > a': {
      fontSize: '14px',
    },
  },
})

export const RecentProblemList = styled.div({
  marginTop: '12px',
  borderTop: `.8px solid ${theme.colors.border}`,
})

export const RecentFriends = styled.section({
  padding: '28px 0 28px 36px',
  borderLeft: `.8px solid ${theme.colors.border}`,
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '24px 0',
    borderLeft: 0,
    borderTop: `.8px solid ${theme.colors.border}`,
  },
})
