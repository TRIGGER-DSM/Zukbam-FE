import { getStyles } from '../../styles/classes'
import FormMessage from '../../components/ui/FormMessage'
import { Button } from '../../components/ui/Button'
import { InputField } from '../../components/ui/InputField'
import { useState, type FormEvent } from 'react'

export default function EmailVerification() {
  const [code, setCode] = useState('')
  const [message, setMessage] = useState('')

  function handleVerify(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('현재 이메일 인증을 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.')
  }

  return (
    <section className="wide-container verification-section" css={getStyles("wide-container verification-section")} aria-label="이메일 인증 코드 입력">
      <form className="verification-form" css={getStyles("verification-form")} onSubmit={handleVerify}>
        <p className="verification-notice" css={getStyles("verification-notice")}>minseo@school.ac.kr로 인증 코드를 보냈습니다.</p>
        <InputField id="verification-code"
            name="verificationCode"
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            placeholder="6자리 코드"
            pattern="[0-9]{6}"
            maxLength={6}
            title="6자리 숫자 인증 코드를 입력해 주세요."
            aria-describedby="verification-time"
            value={code}
            onChange={(event) => {
              setCode(event.target.value.replace(/[^0-9]/g, '').slice(0, 6))
              setMessage('')
            }}
            required label="인증 코드" className="verification-field" css={getStyles("verification-field")} help="남은 시간 04:32" helpId="verification-time" helpClassName="verification-time" />
        <div className="form-actions" css={getStyles("form-actions")}>
          <Button
            variant="secondary"
            type="button"
            onClick={() => setMessage('현재 코드 재전송을 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.')}
          >코드 재전송</Button>
          <Button variant="primary" type="submit">인증 완료</Button>
        </div>
        {message && <FormMessage message={message} className="form-message" css={getStyles("form-message")} />}
      </form>
    </section>
  )
}
