import { ButtonLink } from '../../components/ui/Button'
import { Link } from 'react-router'
import { records, sampleSolution } from '../../data/historyData'
import {
  SolutionContent,
  SolutionArticle,
  SolutionMetrics,
  SolutionCode,
  SolutionUnavailable,
  SolutionSidebar,
  SolutionProblemLink,
  SolutionDetailHeading,
  SolutionDetailEyebrow,
  SolutionDetailHeadingDescription,
} from './SolutionDetail.styles'

export default function SolutionDetail({ recordId }: { recordId: number }) {
  const record = records.find((item) => item.id === recordId)
  const solution = recordId === sampleSolution.recordId ? sampleSolution : null

  return (
    <>
      <SolutionDetailHeading aria-labelledby="solution-title">
        <div>
          <SolutionDetailEyebrow>
            {
              <>
                <img src="/images/solution-detail/detail.svg" alt="" />
                풀이 상세
              </>
            }
          </SolutionDetailEyebrow>
          <h1 id="solution-title">
            {
              <>
                {record
                  ? `${record.problemId}. ${record.title}`
                  : '제출 기록을 찾을 수 없습니다.'}
              </>
            }
          </h1>
          <SolutionDetailHeadingDescription>
            {<>제출 코드와 채점 결과를 다시 확인합니다.</>}
          </SolutionDetailHeadingDescription>
        </div>
        {
          <>
            <ButtonLink variant="secondary" to="/problems/history">
              학습 기록
            </ButtonLink>
          </>
        }
      </SolutionDetailHeading>
      <SolutionContent>
        <SolutionArticle aria-label="제출 코드와 채점 결과">
          {record ? (
            <>
              <SolutionMetrics
                items={[
                  { label: '채점 결과', value: record.result },
                  { label: '실행 시간', value: solution?.runtime ?? '—' },
                  { label: '메모리', value: solution?.memory ?? '—' },
                ]}
              />
              {solution ? (
                <SolutionCode
                  label="제출 코드"
                  code={solution.code}
                  focusable
                />
              ) : (
                <SolutionUnavailable role="status">
                  제출 코드와 실행 정보를 불러올 수 없습니다.
                </SolutionUnavailable>
              )}
            </>
          ) : (
            <SolutionUnavailable role="status">
              학습 기록에서 확인할 풀이를 선택해 주세요.
            </SolutionUnavailable>
          )}
        </SolutionArticle>
        {record && (
          <SolutionSidebar aria-label="제출 정보">
            <section>
              <h2>제출 시각</h2>
              <p>{record.submittedAt}</p>
            </section>
            <section>
              <h2>언어</h2>
              <p>{record.language}</p>
            </section>
            <SolutionProblemLink>
              <Link to={`/problems/${record.problemId}`}>문제 다시 보기</Link>
            </SolutionProblemLink>
          </SolutionSidebar>
        )}
      </SolutionContent>
    </>
  )
}
