import { getStyles } from '../../styles/classes'
import { useState, type CSSProperties } from 'react'
import { growthActivity } from '../../data/growthActivity'
import PageIntro from '../../components/layout/PageIntro'
import StatsGrid from '../../components/ui/StatsGrid'

const palettes = {
  'Neon Lime': ['#37383c', '#caffc0', '#9bff87', '#2ee611'],
  Mint: ['#37383c', '#c1f5df', '#79dfb5', '#32bd86'],
  Blue: ['#37383c', '#c6ddff', '#91bdff', '#579aff'],
}

export default function Growth() {
  const [palette, setPalette] = useState<keyof typeof palettes>('Neon Lime')
  const colors = palettes[palette]
  return (
    <>
      <PageIntro className="growth-intro" css={getStyles("growth-intro")} id="growth-title" eyebrow="성장 기록" title="꾸준함을 한 화면에서 확인하기" description="최근 365일 풀이 활동과 현재·최장 스트릭만 집중해서 보여줍니다." />
      <section className="wide-container growth-content" css={getStyles("wide-container growth-content")} aria-label="성장 통계와 풀이 활동">
        <StatsGrid className="growth-stats" css={getStyles("growth-stats")} items={[{ value: '12일', label: '현재 스트릭' }, { value: '31일', label: '최장 스트릭' }, { value: '187일', label: '활동한 날' }, { value: '426문제', label: '총 정답' }]} />
        <div className="growth-activity-heading" css={getStyles("growth-activity-heading")}>
          <div><p className="growth-period" css={getStyles("growth-period")}>최근 365일</p><h2 id="growth-activity-title">풀이 활동</h2><p className="growth-description" css={getStyles("growth-description")}>색이 진할수록 해당 날짜에 더 많은 문제를 풀었습니다.</p></div>
          <select aria-label="풀이 활동 색상" value={palette} onChange={event => setPalette(event.target.value as keyof typeof palettes)}>
            {Object.keys(palettes).map(name => <option key={name}>{name}</option>)}
          </select>
        </div>
        <div className="growth-chart-scroll" css={getStyles("growth-chart-scroll")} role="region" aria-labelledby="growth-activity-title" tabIndex={0}>
          <div className="growth-chart" css={getStyles("growth-chart")} role="img" aria-label="최근 365일 중 187일 활동, 총 426문제 정답">
            {growthActivity.map((level, index) => <span key={index} className="growth-cell" css={getStyles("growth-cell")} style={{ '--activity-color': colors[level] } as CSSProperties} aria-hidden="true" />)}
          </div>
        </div>
      </section>
    </>
  )
}
