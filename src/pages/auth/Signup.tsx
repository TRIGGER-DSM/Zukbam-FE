import { getStyles } from '../../styles/classes'
import { useState, type FormEvent } from 'react'
import { Button, ButtonLink } from '../../components/ui/Button'
import { InputField } from '../../components/ui/InputField'
import FormMessage from '../../components/ui/FormMessage'

export default function Signup() {
  const [message, setMessage] = useState('')
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('현재 인증 메일 발송을 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.')
  }
  return <section className="wide-container signup-section" css={getStyles("wide-container signup-section")} aria-label="회원가입 정보 입력">
    <form className="signup-form" css={getStyles("signup-form")} onSubmit={handleSubmit} onChange={() => setMessage('')}>
      <div className="form-grid" css={getStyles("form-grid")}>
        <InputField id="phone" label="전화번호" name="phone" type="tel" autoComplete="tel" placeholder="010-0000-0000" required />
        <InputField id="student-id" label="학번" name="studentId" inputMode="numeric" required />
        <InputField id="email" label="학교 이메일" name="email" type="email" autoComplete="email" placeholder="name@school.ac.kr" className="field-full" css={getStyles("field-full")} help="학교 이메일만 가입할 수 있습니다." helpId="email-help" required />
        <InputField id="password" label="비밀번호" name="password" type="password" autoComplete="new-password" required />
        <InputField id="name" label="이름" name="name" autoComplete="name" required />
      </div>
      <div className="form-actions" css={getStyles("form-actions")}><ButtonLink variant="secondary" to="/login">로그인으로</ButtonLink><Button type="submit">인증 메일 보내기</Button></div>
      <FormMessage message={message} />
    </form>
  </section>
}
