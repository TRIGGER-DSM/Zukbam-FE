import { theme } from '../../styles/theme'
import { WideContainer } from '../../components/layout/Container.styles'
import styled from '@emotion/styled'
import { Link } from 'react-router'

export const Hero = styled.section({
  padding: '64px 0 80px',
  borderBottom: `.8px solid ${theme.colors.border}`,
  background: theme.colors.dark,
  '& h1': {
    fontSize: '48px',
    fontWeight: 900,
    lineHeight: '60px',
    letterSpacing: 0,
  },
  [`@media (max-width: ${theme.breakpoints.compact})`]: {
    '& h1': {
      fontSize: '40px',
      lineHeight: '52px',
    },
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '40px',
    '& h1': {
      fontSize: '36px',
      lineHeight: '46px',
    },
  },
})

export const HeroInner = styled(WideContainer)({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 559fr) minmax(0, 497fr)',
  gap: '64px',
  alignItems: 'center',
  [`@media (max-width: ${theme.breakpoints.compact})`]: {
    gap: '32px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
    gap: '36px',
  },
})

export const HeroCopy = styled.div({
  '& > p:first-of-type': {
    marginBottom: '5px',
  },
})

export const HeroEyebrow = styled.p({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.colors.accent,
  fontSize: '13px',
  lineHeight: '21.13px',
})

export const HeroDescription = styled.p({
  marginTop: '14px',
  fontSize: '17px',
  lineHeight: '28.05px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '15px',
  },
})

export const HeroActions = styled.div({
  display: 'flex',
  gap: '10px',
  marginTop: '24px',
  '& > a': {
    gap: '8px',
  },
})

export const RankOverview = styled.section({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
})

export const RankContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
})

export const RankHeading = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  minHeight: '44px',
})

export const RankIcon = styled.span({
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

export const RankDetails = styled.div({
  display: 'grid',
  gridTemplateColumns: '116px minmax(0, 1fr)',
  alignItems: 'center',
  gap: '28px',
  marginTop: '28px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: '84px minmax(0, 1fr)',
    gap: '16px',
  },
})

export const RankEmblem = styled.div({
  width: '116px',
  height: '116px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: `.8px solid ${theme.colors.primary}`,
  borderRadius: '50%',
  background: theme.colors.dark,
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: '84px',
    height: '84px',
  },
})

export const RankLabel = styled.span({
  color: '#6dff52',
  fontSize: '13px',
  lineHeight: '21.13px',
  fontWeight: 800,
})

export const RankProgressHeading = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '12px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 0,
  },
})

export const NextRankTarget = styled.span({
  color: theme.colors.muted,
  fontSize: '13px',
  lineHeight: '21.13px',
})

export const RankProgress = styled.div({
  height: '8px',
  borderRadius: '999px',
  background: theme.colors.border,
  marginTop: '10px',
  overflow: 'hidden',
})

export const ProgressFill = styled.span({
  display: 'block',
  width: '68%',
  height: '100%',
  borderRadius: 'inherit',
  background: theme.colors.primary,
})

export const RankStats = styled.div({
  display: 'flex',
  gap: '20px',
  paddingTop: '16px',
  color: theme.colors.secondary,
  fontSize: '13px',
  lineHeight: '21.13px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: '12px',
    flexWrap: 'wrap',
  },
})

export const RankPercentile = styled.span({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
})

export const RankPosition = styled.span({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
})

export const RankLink = styled(Link)({
  display: 'inline-flex',
  marginTop: '18px',
  padding: '8px 4px',
  color: theme.colors.accent,
  fontSize: '14px',
  lineHeight: '22.75px',
  fontWeight: 800,
  '&:hover': {
    textDecoration: 'underline',
  },
})

export const RankTier = styled.strong({
  fontSize: '30px',
  lineHeight: '36px',
  fontWeight: 700,
})

export const RankTierName = styled.strong({
  fontSize: '26px',
  lineHeight: '42.25px',
})

export const ActivityPanel = styled(WideContainer.withComponent('section'))({
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
})

export const ActivityHeader = styled.div({
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
})

export const ActivityHeading = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
})

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
