import { theme } from '../../styles/theme'
import { WideContainer } from '../../components/layout/Container.styles'
import styled from '@emotion/styled'
import StatsGrid from '../../components/ui/StatsGrid'

export const GrowthContent = styled(WideContainer.withComponent('section'))({
  paddingBlock: '72px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '40px 48px',
  },
})

export const GrowthStats = styled(StatsGrid)({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  margin: 0,
  borderBlock: `.8px solid ${theme.colors.border}`,
  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    padding: '24px 20px',
    borderRight: `.8px solid ${theme.colors.border}`,
    minHeight: '110px',
  },
  '& > div:first-of-type': {
    paddingLeft: 0,
  },
  '& > div:last-child': {
    borderRight: 0,
  },
  '& dd': {
    order: 1,
    margin: 0,
    fontSize: '24px',
    lineHeight: '32px',
    fontWeight: 700,
  },
  '& > div:first-of-type dd': {
    color: theme.colors.accent,
  },
  '& dt': {
    order: 2,
    paddingTop: '2px',
    color: theme.colors.muted,
    fontSize: '13px',
    lineHeight: '26px',
    fontWeight: 700,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    '& > div': {
      padding: '20px 16px',
    },
    '& > div:nth-of-type(2)': {
      borderRight: 0,
    },
    '& > div:nth-of-type(n + 3)': {
      borderTop: `.8px solid ${theme.colors.border}`,
    },
    '& > div:nth-of-type(3)': {
      paddingLeft: 0,
    },
  },
})

export const GrowthActivityHeading = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  gap: '24px',
  marginTop: '48px',
  '& h2': {
    margin: '12px 0 0',
    fontSize: '26px',
    lineHeight: '36px',
    fontWeight: 400,
  },
  '& select': {
    width: '124px',
    height: '44px',
    flexShrink: 0,
    padding: '10px 12px',
    border: `1.6px solid ${theme.colors.border}`,
    borderRadius: '8px',
    background: theme.colors.input,
    color: theme.colors.text,
    font: 'inherit',
    fontSize: '16px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    marginTop: '36px',
    flexWrap: 'wrap',
    gap: '12px',
  },
})

export const GrowthPeriod = styled.p({
  color: '#6dff52',
  fontSize: '13px',
  lineHeight: '21.13px',
})

export const GrowthDescription = styled.p({
  maxWidth: '336px',
  paddingBlock: '8px 16px',
  color: theme.colors.secondary,
  fontSize: '16px',
  lineHeight: '26px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    maxWidth: 'none',
    fontSize: '14px',
    lineHeight: '24px',
  },
})

export const GrowthChartScroll = styled.div({
  marginTop: '32px',
  overflowX: 'auto',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    marginTop: '24px',
  },
})

export const GrowthChart = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(26, minmax(0, 1fr))',
  gap: '4px',
  minWidth: '780px',
})

export const GrowthCell = styled.span<{ $color: string }>(({ $color }) => [
  {
    display: 'block',
    aspectRatio: 1,
    borderRadius: '2px',
  },
  { backgroundColor: $color },
])
