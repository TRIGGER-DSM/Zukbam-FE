import {
  ActivityScroll,
  ActivityChart,
  ActivityDays,
  ActivityCells,
  ActivityCell,
  ActivityMonths,
  LegendRoot,
  LegendCell,
} from './ActivityHeatmap.styles'

export default function ActivityHeatmap({
  levels,
  label,
  compact = false,
  dates,
}: {
  levels: readonly number[]
  label: string
  compact?: boolean
  dates?: readonly string[]
}) {
  const offset = dates?.[0]
    ? (new Date(`${dates[0]}T00:00:00Z`).getUTCDay() + 6) % 7
    : 0
  const cells = [...Array<number>(offset).fill(0), ...levels]
  const months = dates?.flatMap((date, index) =>
    index === 0 || date.slice(0, 7) !== dates[index - 1].slice(0, 7)
      ? [{ label: `${Number(date.slice(5, 7))}월`, column: Math.floor((index + offset) / 7) + 1 }]
      : [],
  )
  return (
    <ActivityScroll
      tabIndex={0}
      role="region"
      aria-label={`${label} 가로 스크롤 영역`}
    >
      <ActivityChart role="img" aria-label={label} $compact={compact}>
        <ActivityDays aria-hidden="true">
          {['월', '', '수', '', '금', '', '일'].map((day, index) => (
            <span key={index}>{day}</span>
          ))}
        </ActivityDays>
        <div aria-hidden="true">
          <ActivityCells>
            {cells.map((level, index) => (
              <ActivityCell key={index} $level={level} title={dates?.[index - offset]} />
            ))}
          </ActivityCells>
          <ActivityMonths style={months ? { gridTemplateColumns: 'repeat(53, 12px)', gap: 4 } : undefined}>
            {months ? months.map(month => <span key={month.column} style={{ gridColumn: month.column, whiteSpace: 'nowrap' }}>{month.label}</span>) : Array.from({ length: 12 }, (_, index) => (
              <span key={index}>{index + 1}월</span>
            ))}
          </ActivityMonths>
        </div>
      </ActivityChart>
    </ActivityScroll>
  )
}

export function ActivityLegend() {
  return (
    <LegendRoot aria-label="풀이활동 색상 범례">
      <span>적음</span>
      {[0, 1, 2, 3, 4].map((level) => (
        <LegendCell key={level} aria-hidden="true" $level={level} />
      ))}
      <span>많음</span>
    </LegendRoot>
  )
}
