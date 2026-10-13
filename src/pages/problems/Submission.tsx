import { getStyles } from '../../styles/classes'
import PageHeading from '../../components/layout/PageHeading'
import FormMessage from '../../components/ui/FormMessage'
import { Button, ButtonLink } from '../../components/ui/Button'
import { useState, type FormEvent } from 'react'
import { sampleProblems } from '../../data/problemDetails'

const initialCode = 'n = int(input())\nscore = [0] + [int(input()) for _ in range(n)]\n\n# 풀이를 작성하세요.\n'

export default function Submission({ problemId }: { problemId: number }) {
  const problem = sampleProblems[problemId]
  const problemTitle = problem ? `${problemId}. ${problem.title}` : '문제를 찾을 수 없습니다.'
  const [language, setLanguage] = useState('Python 3')
  const [code, setCode] = useState(problemId === 1287 ? initialCode : '')
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage(code.trim() ? '현재 제출 및 채점을 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.' : '제출할 코드를 입력해 주세요.')
  }

  return (
    <>
      <PageHeading prefix="submission" id="submission-title" eyebrow={<><img src="/images/submission/submission.svg" alt="" />풀이 제출</>} title={<>{problemTitle}</>} description={<>언어와 코드를 확인한 뒤 제출하세요.</>} wrapCopy={false} />
      <div className="wide-container submission-content" css={getStyles("wide-container submission-content")}>
        {problem ? <form className="submission-form" css={getStyles("submission-form")} aria-label="풀이 제출" onSubmit={handleSubmit}>
          <div className="submission-editor" css={getStyles("submission-editor")}>
            <div className="submission-toolbar" css={getStyles("submission-toolbar")}>
              <strong>{problemTitle}</strong>
              <select aria-label="제출 언어" value={language} onChange={event => { setLanguage(event.target.value); setMessage('') }}>
                <option>Python 3</option><option>C++17</option><option>Java 17</option><option>JavaScript</option>
              </select>
            </div>
            <textarea
              aria-label="풀이 코드"
              aria-describedby="submission-help"
              name="code"
              value={code}
              onChange={event => { setCode(event.target.value); setMessage('') }}
              spellCheck={false}
              autoCapitalize="off"
              autoCorrect="off"
              wrap="off"
              required
            />
          </div>
          <p className="submission-help" css={getStyles("submission-help")} id="submission-help">제출하면 채점 결과가 학습 기록 가장 위에 추가됩니다.</p>
          <div className="form-actions submission-actions" css={getStyles("form-actions submission-actions")}>
            <ButtonLink variant="secondary" to={`/problems/${problemId}`}>문제로 돌아가기</ButtonLink>
            <Button variant="primary" type="submit">제출하고 채점</Button>
          </div>
          {message && <FormMessage message={message} className="submission-message" css={getStyles("submission-message")} />}
        </form> : <p className="submission-message" css={getStyles("submission-message")}>문제 목록에서 제출할 문제를 선택해 주세요.</p>}
        <aside className="submission-sidebar" css={getStyles("submission-sidebar")} aria-label="제출 안내">
          <section><h2>제출 전 확인</h2><p>입력 형식과 출력 형식, 선택 언어를 다시 확인하세요.</p></section>
          <section><h2>채점 기록</h2><p>제출한 풀이의 채점 결과는 학습 기록에서 확인할 수 있습니다.</p></section>
        </aside>
      </div>
    </>
  )
}
