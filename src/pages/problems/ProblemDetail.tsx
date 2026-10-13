import { getStyles } from '../../styles/classes'
import PageHeading from '../../components/layout/PageHeading'
import { ButtonLink } from '../../components/ui/Button'
import { Link } from 'react-router'
import { sampleProblems } from '../../data/problemDetails'
import CodeBlock from '../../components/ui/CodeBlock'

export default function ProblemDetail({ problemId }: { problemId: number }) {
  const problem = sampleProblems[problemId]
  const hasContent = problemId === 1287
  return (
    <>
      <PageHeading prefix="detail" id="detail-title" eyebrow={<><img src="/images/problem-detail/detail.svg" alt="" />문제 상세</>} title={<>{problem ? `${problemId}. ${problem.title}` : '문제를 찾을 수 없습니다.'}</>} description={<>문제 조건과 예시를 확인한 뒤 풀이를 작성하세요.</>} actions={<>{hasContent && <ButtonLink variant="primary" className="detail-write-top" css={getStyles("detail-write-top")} to={`/problems/${problemId}/submit`}>풀이 작성<img src="/images/problem-detail/write.svg" alt="" /></ButtonLink>}</>} />
      <div className="wide-container detail-content" css={getStyles("wide-container detail-content")}>
        <article className="detail-article" css={getStyles("detail-article")} aria-label="문제 내용">
          {hasContent ? <>
            <section aria-labelledby="statement-title"><h2 id="statement-title">문제</h2><p>계단 아래의 시작점에서 꼭대기까지 올라가며 점수의 합을 최대로 만들어야 합니다. 한 번에 한 계단 또는 두 계단을 오를 수 있고, 연속된 세 계단을 모두 밟을 수 없습니다.</p></section>
            <section aria-labelledby="input-title"><h2 id="input-title">입력</h2><p>첫째 줄에 계단의 개수가 주어지고, 둘째 줄부터 각 계단에 쓰인 점수가 순서대로 주어집니다.</p></section>
            <section aria-labelledby="examples-title">
              <h2 id="examples-title">예시</h2>
              <div className="detail-examples" css={getStyles("detail-examples")}>
                <div><h3>입력</h3><CodeBlock label="예시 입력" code={'6\n10\n20\n15\n25\n10\n20'} /></div>
                <div><h3>출력</h3><CodeBlock label="예시 출력" code="75" /></div>
              </div>
            </section>
          </> : <p className="detail-unavailable" css={getStyles("detail-unavailable")}>문제 내용을 불러올 수 없습니다. 다른 문제를 선택해 주세요.</p>}
        </article>
        <aside className="detail-sidebar" css={getStyles("detail-sidebar")} aria-label="문제 정보">
          {problem && <>
            <div className="detail-info" css={getStyles("detail-info")}><h2>난이도</h2><p><span className="detail-tier" css={getStyles("detail-tier")}>{problem.level}</span></p></div>
            <div className="detail-info" css={getStyles("detail-info")}><h2>분류</h2><p>{problem.category}</p></div>
            {hasContent && <div className="detail-info" css={getStyles("detail-info")}><h2>제한</h2><p>시간 1초 · 메모리 128MB</p></div>}
            {hasContent && <div className="detail-sidebar-action" css={getStyles("detail-sidebar-action")}><ButtonLink variant="primary" to={`/problems/${problemId}/submit`}>풀이 작성</ButtonLink></div>}
          </>}
          <div className="detail-back" css={getStyles("detail-back")}><Link to="/problems">문제 목록으로</Link></div>
        </aside>
      </div>
    </>
  )
}
