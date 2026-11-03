import { useState } from 'react'
import { useActivity } from '../../api/queries'
import QueryStatus from '../../components/ui/QueryStatus'
import PageIntro from '../../components/layout/PageIntro'
import {
  GrowthContent,
  GrowthStats,
  GrowthActivityHeading,
  GrowthPeriod,
  GrowthDescription,
  GrowthChartScroll,
  GrowthChart,
  GrowthCell,
} from './Growth.styles'

const palettes = {
  'Neon Lime': ['#37383c', '#caffc0', '#9bff87', '#2ee611'],
  Mint: ['#37383c', '#c1f5df', '#79dfb5', '#32bd86'],
  Blue: ['#37383c', '#c6ddff', '#91bdff', '#579aff'],
}

export default function Growth() {
  const [palette, setPalette] = useState<keyof typeof palettes>('Neon Lime')
  const activity = useActivity()
  const colors = palettes[palette]
  if (!activity.loggedIn) return <p role="status">로그인 후 이용해 주세요.</p>
  if (!activity.streak.data || !activity.grass.data) return <QueryStatus pending={activity.streak.isPending || activity.grass.isPending} error={activity.streak.error ?? activity.grass.error} retry={() => { void activity.streak.refetch(); void activity.grass.refetch() }} />
  return (
    <>
      <PageIntro
        id="growth-title"
        eyebrow="성장 기록"
        title="꾸준함을 한 화면에서 확인하기"
        description="최근 365일 풀이 활동과 현재·최장 스트릭만 집중해서 보여줍니다."
      />
      <GrowthContent aria-label="성장 통계와 풀이 활동">
        <GrowthStats
          items={[
            { value: `${activity.streak.data.currentStreak}일`, label: '현재 스트릭' },
            { value: `${activity.streak.data.maxStreak}일`, label: '최장 스트릭' },
            { value: `${activity.activeDays}일`, label: '활동한 날' },
            { value: `${activity.total}문제`, label: '기간 내 정답' },
          ]}
        />
        <GrowthActivityHeading>
          <div>
            <GrowthPeriod>최근 365일</GrowthPeriod>
            <h2 id="growth-activity-title">풀이 활동</h2>
            <GrowthDescription>
              색이 진할수록 해당 날짜에 더 많은 문제를 풀었습니다.
            </GrowthDescription>
          </div>
          <select
            aria-label="풀이 활동 색상"
            value={palette}
            onChange={(event) =>
              setPalette(event.target.value as keyof typeof palettes)
            }
          >
            {Object.keys(palettes).map((name) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </GrowthActivityHeading>
        <GrowthChartScroll
          role="region"
          aria-labelledby="growth-activity-title"
          tabIndex={0}
        >
          <GrowthChart
            role="img"
            aria-label={`최근 365일 중 ${activity.activeDays}일 활동, 총 ${activity.total}문제 정답`}
          >
            {activity.days.map((day, index) => (
              <GrowthCell
                key={index}
                aria-hidden="true"
                $color={colors[Math.min(day.count, 3)]}
                title={`${day.date}: ${day.count}문제`}
              />
            ))}
          </GrowthChart>
        </GrowthChartScroll>
      </GrowthContent>
    </>
  )
}
