import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

export const ActivityScroll = styled.div({
  overflowX: 'auto',
  paddingTop: '28px',
})

export const ActivityChart = styled.div<{ $compact: boolean }>(
  ({ $compact }) => [
    {
      display: 'grid',
      gridTemplateColumns: '24px minmax(0, 1fr)',
      gap: '12px',
      minWidth: '1120px',
      height: '136px',
    },
    $compact && { minWidth: 1000 },
  ],
)

export const ActivityDays = styled.div({
  display: 'grid',
  gridTemplateRows: 'repeat(7, 12px)',
  gap: '4px',
  textAlign: 'center',
  color: theme.colors.muted,
  fontSize: '10px',
  lineHeight: '12px',
})

export const ActivityCells = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(53, 12px)',
  gridTemplateRows: 'repeat(7, 12px)',
  gridAutoFlow: 'column',
  gap: '4px',
})

export const ActivityCell = styled.span<{ $level: number }>(({ $level }) => [
  {
    display: 'block',
    width: '12px',
    height: '12px',
    borderRadius: '2px',
    flexShrink: 0,
  },
  [
    {
      background: theme.colors.border,
    },
    {
      background: '#caffc0',
    },
    {
      background: '#9bff87',
    },
    {
      background: theme.colors.primary,
    },
    {
      background: theme.colors.accent,
    },
  ][$level],
])

export const ActivityMonths = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  paddingTop: '10px',
  color: theme.colors.muted,
  fontSize: '11px',
  lineHeight: '17.88px',
})

export const LegendRoot = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
})

export const LegendCell = styled.span<{ $level: number }>(({ $level }) => [
  {
    display: 'block',
    width: '12px',
    height: '12px',
    borderRadius: '2px',
    flexShrink: 0,
  },
  [
    {
      background: theme.colors.border,
    },
    {
      background: '#caffc0',
    },
    {
      background: '#9bff87',
    },
    {
      background: theme.colors.primary,
    },
    {
      background: theme.colors.accent,
    },
  ][$level],
])
