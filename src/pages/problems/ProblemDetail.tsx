import { ButtonLink } from '../../components/ui/Button'
import { Link } from 'react-router'
import { useQuery } from '@tanstack/react-query'
import { service } from '../../api/service'
import QueryStatus from '../../components/ui/QueryStatus'
import CodeBlock from '../../components/ui/CodeBlock'
import {
  DetailWriteTop,
  DetailContent,
  DetailArticle,
  DetailExamples,
  DetailUnavailable,
  DetailSidebar,
  DetailInfo,
  DetailTier,
  DetailSidebarAction,
  DetailBack,
  ProblemDetailHeading,
  ProblemDetailEyebrow,
  ProblemDetailHeadingDescription,
} from './ProblemDetail.styles'

export default function ProblemDetail({ problemId }: { problemId: number }) {
  const result = useQuery({ queryKey: ['problem', problemId], queryFn: ({ signal }) => service.problem(problemId, signal), enabled: Number.isSafeInteger(problemId) && problemId > 0 })
  const problem = result.data
  const hasContent = Boolean(problem)
  if (!Number.isSafeInteger(problemId) || problemId <= 0) return <p role="alert">올바른 문제 번호가 아닙니다.</p>
  if (!problem) return <QueryStatus pending={result.isPending} error={result.error} retry={() => { void result.refetch() }} />
  return (
    <>
      <ProblemDetailHeading aria-labelledby="detail-title">
        <div>
          <ProblemDetailEyebrow>
            {
              <>
                <img src="/images/problem-detail/detail.svg" alt="" />
                문제 상세
              </>
            }
          </ProblemDetailEyebrow>
          <h1 id="detail-title">
            {
              <>
                {problem
                  ? `${problemId}. ${problem.title}`
                  : '문제를 찾을 수 없습니다.'}
              </>
            }
          </h1>
          <ProblemDetailHeadingDescription>
            {<>문제 조건과 예시를 확인한 뒤 풀이를 작성하세요.</>}
          </ProblemDetailHeadingDescription>
        </div>
        {
          <>
            {hasContent && (
              <DetailWriteTop
                variant="primary"
                to={`/problems/${problemId}/submit`}
              >
                풀이 작성
                <img src="/images/problem-detail/write.svg" alt="" />
              </DetailWriteTop>
            )}
          </>
        }
      </ProblemDetailHeading>
      <DetailContent>
        <DetailArticle aria-label="문제 내용">
          {hasContent ? (
            <>
              <section aria-labelledby="statement-title">
                <h2 id="statement-title">문제</h2>
                <p style={{ whiteSpace: 'pre-wrap' }}>{problem.content}</p>
              </section>
              <section aria-labelledby="examples-title">
                <h2 id="examples-title">예시</h2>
                {problem.testCases.filter(item => item.isSample).map((item, index) => <DetailExamples key={item.testcaseId}>
                  <div><h3>입력 {index + 1}</h3><CodeBlock label={`예시 입력 ${index + 1}`} code={item.input ?? ''} /></div>
                  <div><h3>출력 {index + 1}</h3><CodeBlock label={`예시 출력 ${index + 1}`} code={item.output} /></div>
                </DetailExamples>)}
              </section>
            </>
          ) : (
            <DetailUnavailable>
              문제 내용을 불러올 수 없습니다. 다른 문제를 선택해 주세요.
            </DetailUnavailable>
          )}
        </DetailArticle>
        <DetailSidebar aria-label="문제 정보">
          {problem && (
            <>
              <DetailInfo>
                <h2>난이도</h2>
                <p>
                  <DetailTier>{problem.rank.replace('LEVEL_', '레벨 ')}</DetailTier>
                </p>
              </DetailInfo>
              {hasContent && (
                <DetailInfo>
                  <h2>제한</h2>
                  <p>시간 {problem.timeLimit} · 메모리 {problem.memoryLimit}</p>
                </DetailInfo>
              )}
              {hasContent && (
                <DetailSidebarAction>
                  <ButtonLink
                    variant="primary"
                    to={`/problems/${problemId}/submit`}
                  >
                    풀이 작성
                  </ButtonLink>
                </DetailSidebarAction>
              )}
            </>
          )}
          <DetailBack>
            <Link to="/problems">문제 목록으로</Link>
          </DetailBack>
        </DetailSidebar>
      </DetailContent>
    </>
  )
}
