import { getStyles } from '../../styles/classes'
import PageHeading from '../../components/layout/PageHeading'
import { ButtonLink } from '../../components/ui/Button'
import { Link } from 'react-router'
import { records, sampleSolution } from '../../data/historyData'
import StatsGrid from '../../components/ui/StatsGrid'
import CodeBlock from '../../components/ui/CodeBlock'

export default function SolutionDetail({ recordId }: { recordId: number }) {
  const record = records.find(item => item.id === recordId)
  const solution = recordId === sampleSolution.recordId ? sampleSolution : null

  return (
    <>
      <PageHeading prefix="solution" id="solution-title" eyebrow={<><img src="/images/solution-detail/detail.svg" alt="" />풀이 상세</>} title={<>{record ? `${record.problemId}. ${record.title}` : '제출 기록을 찾을 수 없습니다.'}</>} description={<>제출 코드와 채점 결과를 다시 확인합니다.</>} actions={<><ButtonLink variant="secondary" to="/problems/history">학습 기록</ButtonLink></>} />
      <div className="wide-container solution-content" css={getStyles("wide-container solution-content")}>
        <article className="solution-article" css={getStyles("solution-article")} aria-label="제출 코드와 채점 결과">
          {record ? <>
            <StatsGrid className="solution-metrics" css={getStyles("solution-metrics")} items={[{ label: '채점 결과', value: record.result }, { label: '실행 시간', value: solution?.runtime ?? '—' }, { label: '메모리', value: solution?.memory ?? '—' }]} />
            {solution ? <CodeBlock className="solution-code" css={getStyles("solution-code")} label="제출 코드" code={solution.code} focusable /> : <p className="solution-unavailable" css={getStyles("solution-unavailable")} role="status">제출 코드와 실행 정보를 불러올 수 없습니다.</p>}
          </> : <p className="solution-unavailable" css={getStyles("solution-unavailable")} role="status">학습 기록에서 확인할 풀이를 선택해 주세요.</p>}
        </article>
        {record && <aside className="solution-sidebar" css={getStyles("solution-sidebar")} aria-label="제출 정보">
          <section><h2>제출 시각</h2><p>{record.submittedAt}</p></section>
          <section><h2>언어</h2><p>{record.language}</p></section>
          <div className="solution-problem-link" css={getStyles("solution-problem-link")}><Link to={`/problems/${record.problemId}`}>문제 다시 보기</Link></div>
        </aside>}
      </div>
    </>
  )
}
