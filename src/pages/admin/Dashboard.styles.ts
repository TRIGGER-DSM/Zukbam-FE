import { theme } from '../../styles/theme'
import styled from '@emotion/styled'
import { Link } from 'react-router'
import { Button } from '../../components/ui/Button'
import { Row } from '../../components/admin/admin.styles'

export const StatisticsTitle = styled.h2({
  flex: 1,
  minWidth: 180,
})

export const ChartLegend = styled(Row)({
  fontSize: 12,
  color: '#c2c4c8',
  gap: 16,
})

export const LegendItem = styled.span({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
})

export const LegendMarker = styled.i<{ $color: string }>(({ $color }) => ({
  width: 14,
  height: 3,
  borderRadius: 2,
  background: $color,
}))

export const ChartUnitSelect = styled.select({ width: '120px !important' })

export const ChartCaption = styled.p({
  color: theme.colors.muted,
  fontSize: 13,
})

export const ChartViewport = styled.div({ overflowX: 'auto' })

export const WeeklyChart = styled.div({
  position: 'relative',
  width: 1070,
  height: 254,
})

export const YAxisLabel = styled.span<{ $index: number }>(({ $index }) => ({
  position: 'absolute',
  top: 214 - $index * 41.6,
  left: 0,
  width: 32,
  textAlign: 'right',
  color: '#878a93',
  fontSize: 11,
}))

export const XAxisLabel = styled.span<{ $index: number }>(({ $index }) => ({
  position: 'absolute',
  top: 234,
  left: 77.88 + $index * 127.75,
  width: 60,
  textAlign: 'center',
  color: '#878a93',
  fontSize: 12,
}))

export const PeriodSelect = styled.select({ width: '150px !important' })

export const SummaryUnitSelect = styled.select({ width: '130px !important' })

export const ResetFiltersButton = styled(Button)({
  padding: '11px 18px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
})

export const StudentTableTitle = styled.h2({
  flex: 1,
  minWidth: 180,
})

export const StudentTableSummary = styled.span({
  color: theme.colors.muted,
  fontSize: 13,
})

export const StudentTable = styled.table({ minWidth: 1000 })

export const StudentColumn = styled.col<{ $width: number }>(({ $width }) => ({
  width: $width,
}))

export const StudentColumnHeading = styled.th<{ $index: number }>(
  ({ $index }) =>
    $index >= 3 && $index <= 6
      ? {
          textAlign: 'right',
        }
      : [],
)

export const AccessibleColumnLabel = styled.span({
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
})

export const NumericCell = styled.td({
  textAlign: 'right',
})

export const StudentAchievementLink = styled(Link)({
  color: theme.colors.primary,
})

export const EmptyStudentRow = styled.td({
  textAlign: 'center',
  padding: '36px',
})
