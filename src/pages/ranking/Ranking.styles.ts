import { theme } from '../../styles/theme'
import { WideContainer } from '../../components/layout/Container.styles'
import styled from '@emotion/styled'

export const RankingContent = styled.section({
  width: 'min(880px, calc(100% - 48px))',
  marginInline: 'auto',
  paddingBlock: '48px 80px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: 'calc(100% - 40px)',
    paddingBlock: '32px 48px',
  },
})

export const ScopeDescription = styled.p({
  paddingTop: '14px',
  color: theme.colors.muted,
  fontSize: '13px',
  lineHeight: '21.13px',
})

export const RankingPanel = styled.div({
  marginTop: '24px',
})

export const RankingTable = styled.div({
  borderTop: `0.8px solid ${theme.colors.border}`,
})

export const RankingHeader = styled.div({
  display: 'grid',
  gridTemplateColumns: '52px 44px minmax(0, 1fr) 112px',
  alignItems: 'center',
  gap: '12px',
  minHeight: '40px',
  paddingInline: '12px',
  borderBottom: `0.8px solid ${theme.colors.border}`,
  color: theme.colors.muted,
  fontSize: '12px',
  lineHeight: '19.5px',
  '> :nth-of-type(2)': {
    gridColumn: 'span 2',
  },
  '> :last-child': {
    textAlign: 'right',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: '36px 32px minmax(0, 1fr) 88px',
    gap: '8px',
    paddingInline: '8px',
  },
})

export const EmptyRankingNotice = styled.p({
  padding: '40px 16px',
  color: theme.colors.secondary,
  textAlign: 'center',
  fontSize: '14px',
  lineHeight: '24px',
})

export const RankingHeading = styled(WideContainer.withComponent('section'))({
  paddingBlock: '48px 28px',
  '& h1': {
    paddingTop: '10px',
    fontSize: '36px',
    fontWeight: 900,
    lineHeight: '48px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '36px 20px',
    '& h1': {
      fontSize: '29px',
      lineHeight: '40px',
    },
  },
})

export const RankingEyebrow = styled.p({
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

export const RankingHeadingDescription = styled.p({
  paddingTop: '8px',
  color: theme.colors.secondary,
  fontSize: '16px',
  lineHeight: '26px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '14px',
    lineHeight: '24px',
  },
})

export const RankingScopeTabs = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '6px',
  padding: '6px',
  border: `1.6px solid ${theme.colors.border}`,
  borderRadius: '8px',
  background: theme.colors.input,
})

export const RankingScopeTab = styled.button({
  height: '44px',
  padding: '1px 6px',
  border: '1.6px solid transparent',
  borderRadius: '6px',
  background: 'transparent',
  color: theme.colors.muted,
  fontSize: '16px',
  lineHeight: '26px',
  fontWeight: 900,
  "&[aria-selected='true']": {
    background: theme.colors.primary,
    borderColor: theme.colors.primary,
    color: theme.colors.dark,
    boxShadow: `0 2px 0 ${theme.colors.primaryShadow}`,
  },
  "&:hover:not([aria-selected='true'])": {
    color: theme.colors.text,
  },
})

export const RankingRecord = styled.div({
  display: 'grid',
  gridTemplateColumns: '52px 44px minmax(0, 1fr) 112px',
  gap: '12px',
  alignItems: 'center',
  minHeight: '72px',
  padding: '10px 12px',
  borderBottom: `0.8px solid ${theme.colors.border}`,
  borderRadius: '8px',
  "&[data-me='true']": {
    background: theme.colors.accentBackground,
    boxShadow: `inset 3px 0 0 ${theme.colors.primary}`,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: '36px 32px minmax(0, 1fr) 88px',
    gap: '8px',
    paddingInline: '8px',
  },
})

export const RankPosition = styled.span({
  width: '36px',
  height: '36px',
  justifySelf: 'center',
  display: 'grid',
  placeItems: 'center',
  border: `1.6px solid ${theme.colors.border}`,
  borderRadius: '50%',
  fontSize: '14px',
  lineHeight: '22.75px',
  fontWeight: 900,
  "&[data-top='true']": {
    borderColor: theme.colors.primary,
  },
  "&[data-highlight='true']": {
    color: theme.colors.primary,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: '32px',
    height: '32px',
  },
})

export const UserAvatar = styled.span<{
  $avatarColor: string
  $avatarBackground: string
}>(({ $avatarColor, $avatarBackground }) => [
  {
    width: '40px',
    height: '40px',
    display: 'grid',
    placeItems: 'center',
    borderRadius: '50%',
    fontSize: '15px',
    lineHeight: '24.38px',
    fontWeight: 900,
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      width: '32px',
      height: '32px',
    },
  },
  { color: $avatarColor, backgroundColor: $avatarBackground },
])

export const UserDetails = styled.div({
  minWidth: 0,
})

export const UserName = styled.p({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '16px',
  lineHeight: '26px',
})

export const CurrentUserBadge = styled.span({
  color: theme.colors.primary,
  fontSize: '12px',
  lineHeight: '19.5px',
})

export const SolvedCount = styled.p({
  paddingTop: '3px',
  color: theme.colors.muted,
  fontSize: '12px',
  lineHeight: '19.5px',
  fontWeight: 700,
})

export const ExperienceCell = styled.div({
  textAlign: 'right',
  fontSize: '15px',
  lineHeight: '24.38px',
  whiteSpace: 'nowrap',
  "&[data-me='true']": {
    color: theme.colors.primary,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '13px',
  },
})
