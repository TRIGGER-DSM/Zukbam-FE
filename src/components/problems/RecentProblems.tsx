import { getStyles } from '../../styles/classes'
import { Link } from 'react-router'
import { problems } from '../../data/problems'
import AssetIcon from '../ui/AssetIcon'

function RecentProblem({ id, meta, time }: { id: number; meta: string; time: string }) {
  const problem = problems.find(item => item.id === id)!
  return (
    <Link className="recent-problem" css={getStyles("recent-problem")} to={`/problems/${id}`}>
      <div><p>{id}. {problem.title}</p><div className="recent-problem-meta" css={getStyles("recent-problem-meta")}><span className="problem-tier" css={getStyles("problem-tier")}>{problem.level}</span><span>{meta}</span><span>{time}</span></div></div>
      <AssetIcon group="problems" name="chevron" />
    </Link>
  )
}

export default function RecentProblems() {
  return (<section className="wide-container problems-recent" css={getStyles("wide-container problems-recent")} aria-label="최근 문제 활동">
        <div className="problems-recent-grid" css={getStyles("problems-recent-grid")}>
          <section className="recent-updates" css={getStyles("recent-updates")} aria-labelledby="updates-title">
            <div className="recent-heading" css={getStyles("recent-heading")}><h2 id="updates-title"><AssetIcon group="problems" name="updates" />최근 업데이트</h2><a href="#problem-list">전체</a></div>
            <div className="recent-problem-list" css={getStyles("recent-problem-list")}>
              <RecentProblem id={1912} meta="동적 계획법" time="2시간 전" />
              <RecentProblem id={9251} meta="문자열" time="어제" />
            </div>
          </section>
          <section className="recent-friends" css={getStyles("recent-friends")} aria-labelledby="friends-title">
            <div className="recent-heading" css={getStyles("recent-heading")}><h2 id="friends-title"><AssetIcon group="problems" name="friends" />친구가 최근에 푼 문제</h2><Link to="/social">친구 보기</Link></div>
            <div className="recent-problem-list" css={getStyles("recent-problem-list")}>
              <RecentProblem id={2206} meta="박지훈 외 2명" time="3시간 전" />
              <RecentProblem id={1287} meta="이서연" time="어제" />
            </div>
          </section>
        </div>
      </section>)
}
