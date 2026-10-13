import { getStyles } from '../../styles/classes'
import { homeActivity } from '../../data/homeActivity'
import AssetIcon from '../ui/AssetIcon'

export default function ActivitySection() {
return (<section className="wide-container home-activity" css={getStyles("wide-container home-activity")} aria-labelledby="activity-title">
        <div className="activity-heading" css={getStyles("activity-heading")}>
          <div className="home-heading-group" css={getStyles("home-heading-group")}>
            <span className="home-icon-circle" css={getStyles("home-icon-circle")}><AssetIcon group="home" name="activity" /></span>
            <div>
              <p className="activity-year" css={getStyles("activity-year")}>2026년 풀이활동</p>
              <h2 id="activity-title">현재 <strong>12일</strong> 스트릭</h2>
            </div>
          </div>
          <select className="activity-year-select" css={getStyles("activity-year-select")} aria-label="활동 연도" defaultValue="2026">
            <option value="2026">2026년</option>
          </select>
        </div>
        <div className="activity-scroll" css={getStyles("activity-scroll")} tabIndex={0} role="region" aria-label="2026년 풀이활동 가로 스크롤 영역">
          <div className="activity-chart" css={getStyles("activity-chart")} role="img" aria-label="2026년 53주 풀이활동, 현재 스트릭 12일, 최장 스트릭 31일">
            <div className="activity-days" css={getStyles("activity-days")} aria-hidden="true">
              {['월', '', '수', '', '금', '', '일'].map((day, index) => <span key={index}>{day}</span>)}
            </div>
            <div className="activity-calendar" css={getStyles("activity-calendar")} aria-hidden="true">
              <div className="activity-cells" css={getStyles("activity-cells")}>
                {homeActivity.map((level, index) => <span key={index} className={`activity-cell activity-level-${level}`} css={getStyles(`activity-cell activity-level-${level}`)} />)}
              </div>
              <div className="activity-months" css={getStyles("activity-months")}>
                {Array.from({ length: 12 }, (_, index) => <span key={index}>{index + 1}월</span>)}
              </div>
            </div>
          </div>
        </div>
        <div className="activity-summary" css={getStyles("activity-summary")}>
          <span className="activity-longest" css={getStyles("activity-longest")}><AssetIcon group="home" name="trend" />최장 31일</span>
          <div className="activity-legend" css={getStyles("activity-legend")} aria-label="풀이활동 색상 범례">
            <span>적음</span>
            {[0, 1, 2, 3, 4].map(level => <span key={level} className={`activity-cell activity-level-${level}`} css={getStyles(`activity-cell activity-level-${level}`)} aria-hidden="true" />)}
            <span>많음</span>
          </div>
        </div>
      </section>)
}

