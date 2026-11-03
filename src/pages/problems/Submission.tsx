import { Button, ButtonLink } from '../../components/ui/Button'
import { useState, type FormEvent } from 'react'
import { useQuery } from '@tanstack/react-query'
import { service } from '../../api/service'
import QueryStatus from '../../components/ui/QueryStatus'
import {
  SubmissionContent,
  SubmissionForm,
  SubmissionEditor,
  SubmissionToolbar,
  SubmissionHelp,
  SubmissionActions,
  SubmissionMessage,
  SubmissionMessageDescription,
  SubmissionSidebar,
  SubmissionHeading,
  SubmissionEyebrow,
  SubmissionHeadingDescription,
} from './Submission.styles'

export default function Submission({ problemId }: { problemId: number }) {
  const result = useQuery({ queryKey: ['problem', problemId], queryFn: ({ signal }) => service.problem(problemId, signal) })
  const problem = result.data
  const problemTitle = problem
    ? `${problemId}. ${problem.title}`
    : '문제를 찾을 수 없습니다.'
  const [language, setLanguage] = useState('Python 3')
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage(
      code.trim()
        ? '현재 제출 및 채점을 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.'
        : '제출할 코드를 입력해 주세요.',
    )
  }

  if (!problem) return <QueryStatus pending={result.isPending} error={result.error} />

  return (
    <>
      <SubmissionHeading aria-labelledby="submission-title">
        <SubmissionEyebrow>
          {
            <>
              <img src="/images/submission/submission.svg" alt="" />
              풀이 제출
            </>
          }
        </SubmissionEyebrow>
        <h1 id="submission-title">{<>{problemTitle}</>}</h1>
        <SubmissionHeadingDescription>
          {<>언어와 코드를 확인한 뒤 제출하세요.</>}
        </SubmissionHeadingDescription>
      </SubmissionHeading>
      <SubmissionContent>
        {problem ? (
          <SubmissionForm aria-label="풀이 제출" onSubmit={handleSubmit}>
            <SubmissionEditor>
              <SubmissionToolbar>
                <strong>{problemTitle}</strong>
                <select
                  aria-label="제출 언어"
                  value={language}
                  onChange={(event) => {
                    setLanguage(event.target.value)
                    setMessage('')
                  }}
                >
                  <option>Python 3</option>
                  <option>C++17</option>
                  <option>Java 17</option>
                  <option>JavaScript</option>
                </select>
              </SubmissionToolbar>
              <textarea
                aria-label="풀이 코드"
                aria-describedby="submission-help"
                name="code"
                value={code}
                onChange={(event) => {
                  setCode(event.target.value)
                  setMessage('')
                }}
                spellCheck={false}
                autoCapitalize="off"
                autoCorrect="off"
                wrap="off"
                required
              />
            </SubmissionEditor>
            <SubmissionHelp id="submission-help">
              제출 및 채점 기능은 아직 지원되지 않습니다.
            </SubmissionHelp>
            <SubmissionActions>
              <ButtonLink variant="secondary" to={`/problems/${problemId}`}>
                문제로 돌아가기
              </ButtonLink>
              <Button variant="primary" type="submit" disabled>
                제출하고 채점
              </Button>
            </SubmissionActions>
            {message && <SubmissionMessage message={message} />}
          </SubmissionForm>
        ) : (
          <SubmissionMessageDescription>
            문제 목록에서 제출할 문제를 선택해 주세요.
          </SubmissionMessageDescription>
        )}
        <SubmissionSidebar aria-label="제출 안내">
          <section>
            <h2>제출 전 확인</h2>
            <p>입력 형식과 출력 형식, 선택 언어를 다시 확인하세요.</p>
          </section>
          <section>
            <h2>채점 기록</h2>
            <p>제출한 풀이의 채점 결과는 학습 기록에서 확인할 수 있습니다.</p>
          </section>
        </SubmissionSidebar>
      </SubmissionContent>
    </>
  )
}
