import { getStyles } from '../../styles/classes'
import AssetIcon from '../ui/AssetIcon'
import { Link } from 'react-router'

export default function RankSection() {
return (<section className="rank-section" css={getStyles("rank-section")} aria-labelledby="rank-title">
            <div className="home-heading-group" css={getStyles("home-heading-group")}>
              <span className="home-icon-circle" css={getStyles("home-icon-circle")}><AssetIcon group="home" name="rank" /></span>
              <h2 id="rank-title">내 랭크 현황</h2>
            </div>
            <div className="rank-details" css={getStyles("rank-details")}>
              <div className="rank-emblem" css={getStyles("rank-emblem")}><span>RANK</span><strong>G5</strong></div>
              <div className="rank-progress-details" css={getStyles("rank-progress-details")}>
                <div className="rank-progress-heading" css={getStyles("rank-progress-heading")}><strong>Gold 5</strong><span>Gold 4까지 640 XP</span></div>
                <div className="rank-progress" css={getStyles("rank-progress")} role="progressbar" aria-label="다음 랭크 진행률" aria-valuenow={68} aria-valuemin={0} aria-valuemax={100}><span /></div>
                <div className="rank-stats" css={getStyles("rank-stats")}><span><AssetIcon group="home" name="trend" />상위 18.4%</span><span>전체 184위</span></div>
                <Link className="rank-link" css={getStyles("rank-link")} to="/ranking">랭킹 보기</Link>
              </div>
            </div>
          </section>)
}

