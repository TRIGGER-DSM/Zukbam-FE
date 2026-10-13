import { getStyles } from '../../styles/classes'
import { Button } from '../../components/ui/Button'
import { InputField } from '../../components/ui/InputField'
import { useState, type FormEvent } from 'react'

export default function ResetPassword() {
  const [message, setMessage] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('현재 비밀번호 변경을 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.')
  }

  return (
    <section className="wide-container reset-section" css={getStyles("wide-container reset-section")} aria-label="비밀번호 재설정 정보 입력">
      <div className="reset-container" css={getStyles("reset-container")}>
        <form onSubmit={handleSubmit} onChange={() => setMessage(null)}>
          <InputField id="current-password" name="currentPassword" type="password" autoComplete="current-password" required label="현재 비밀번호" />
          <InputField id="new-password"
              name="newPassword"
              type="password"
              autoComplete="new-password"
              minLength={8}
              pattern="(?=.*[A-Za-z])(?=.*[0-9]).{8,}"
              title="8자 이상, 영문과 숫자를 포함하세요."
              aria-describedby="new-password-help"
              required label="새 비밀번호" className="reset-new-password" css={getStyles("reset-new-password")} help="8자 이상, 영문과 숫자를 포함하세요." helpId="new-password-help" helpClassName="reset-help" />
          <div className="form-actions" css={getStyles("form-actions")}>
            <Button variant="primary" type="submit">비밀번호 변경</Button>
          </div>
        </form>
        <div className="reset-notice" css={getStyles("reset-notice")} role={message ? 'status' : undefined}>
          <strong>{message ? '변경 실패' : '변경 실패 예시'}</strong>
          <p>{message ?? '현재 비밀번호가 일치하지 않습니다.'}</p>
        </div>
      </div>
    </section>
  )
}
