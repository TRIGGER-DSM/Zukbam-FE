import { getStyles } from '../../styles/classes'
import FormMessage from '../ui/FormMessage'
import { useState } from 'react'
import { Button, ButtonLink } from '../ui/Button'
import AssetIcon from '../ui/AssetIcon'
import { Link } from 'react-router'

export default function HomeHero() {
const [recommendationMessage, setRecommendationMessage] = useState('')
return (<section className="home-hero" css={getStyles("home-hero")} aria-labelledby="home-title">
        <div className="wide-container home-hero-inner" css={getStyles("wide-container home-hero-inner")}>
          <div className="home-hero-copy" css={getStyles("home-hero-copy")}>
            <p className="home-eyebrow" css={getStyles("home-eyebrow")}><AssetIcon group="home" name="today" />오늘의 학습</p>
            <h1 id="home-title">오늘 한 문제,<br />기록은 자동으로.</h1>
            <p className="home-description" css={getStyles("home-description")}>추천 문제를 풀고 스트릭을 이어가세요.</p>
            <div className="home-hero-actions" css={getStyles("home-hero-actions")}>
              <ButtonLink variant="primary" to="/problems">문제 목록<AssetIcon group="home" name="arrow" /></ButtonLink>
              <Button variant="custom" className="home-refresh" css={getStyles("home-refresh")} type="button" onClick={() => setRecommendationMessage('새로운 추천 문제를 불러올 수 없습니다. 잠시 후 다시 시도해 주세요.')}>다시 추천</Button>
            </div>
            {recommendationMessage && <FormMessage message={recommendationMessage} className="home-recommendation-message" css={getStyles("home-recommendation-message")} />}
          </div>
          <article className="recommendation-card" css={getStyles("recommendation-card")} aria-labelledby="recommended-problem">
            <div className="recommendation-top" css={getStyles("recommendation-top")}>
              <span className="home-eyebrow" css={getStyles("home-eyebrow")}><AssetIcon group="home" name="recommendation" />추천 문제</span>
              <span>25분</span>
            </div>
            <h2 id="recommended-problem"><Link to="/problems/1287">1287. 계단 오르기</Link></h2>
            <p className="recommendation-description" css={getStyles("recommendation-description")}>동적 계획법 · 기본 점화식</p>
            <div className="problem-badges" css={getStyles("problem-badges")}>
              <span className="problem-level" css={getStyles("problem-level")}>Silver 3</span>
              <span className="problem-rate" css={getStyles("problem-rate")}>정답률 43.7%</span>
            </div>
          </article>
        </div>
      </section>)
}

