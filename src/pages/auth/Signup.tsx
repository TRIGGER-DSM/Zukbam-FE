import { getStyles } from '../../styles/classes'
import { useState, type FormEvent } from 'react'
import { Button, ButtonLink } from '../../components/ui/Button'
import { InputField } from '../../components/ui/InputField'
import FormMessage from '../../components/ui/FormMessage'
import SignupTypeTabs from '../../components/auth/SignupTypeTabs'

export default function Signup({ accountType = 'student' }: { accountType?: 'student' | 'teacher' }) {
  const [message, setMessage] = useState('')
  const teacher = accountType === 'teacher'
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('현재 인증 메일 발송을 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.')
  }
  return <section className="wide-container signup-section" css={getStyles("wide-container signup-section")} aria-label={teacher ? '선생님 회원가입 정보 입력' : '학생 회원가입 정보 입력'}>
    <form className="signup-form" css={getStyles("signup-form")} onSubmit={handleSubmit} onChange={() => setMessage('')}>
      <SignupTypeTabs accountType={accountType} />
      <div className="form-grid" css={getStyles("form-grid")}>
        {teacher ? <>
          <InputField id="teacher-email" label="학교 이메일" name="email" type="email" autoComplete="email" placeholder="name@school.ac.kr" className="field-full" help="학교 이메일만 가입할 수 있습니다." required />
          <InputField id="teacher-name" label="이름" name="name" autoComplete="name" required />
          <InputField id="teacher-password" label="비밀번호" name="password" type="password" autoComplete="new-password" required />
          <InputField id="teacher-code" label="고유 코드" name="invitationCode" autoComplete="off" placeholder="학교에서 발급받은 코드 입력" className="field-full" help="선생님 계정은 학교에서 발급한 고유 코드로만 가입할 수 있습니다." required />
        </> : <>
        <InputField id="phone" label="전화번호" name="phone" type="tel" autoComplete="tel" placeholder="010-0000-0000" required />
        <InputField id="student-id" label="학번" name="studentId" inputMode="numeric" required />
        <InputField id="email" label="학교 이메일" name="email" type="email" autoComplete="email" placeholder="name@school.ac.kr" className="field-full" css={getStyles("field-full")} help="학교 이메일만 가입할 수 있습니다." helpId="email-help" required />
        <InputField id="password" label="비밀번호" name="password" type="password" autoComplete="new-password" required />
        <InputField id="name" label="이름" name="name" autoComplete="name" required />
        </>}
      </div>
      <div className="form-actions" css={getStyles("form-actions")}><ButtonLink variant="secondary" to="/login">로그인으로</ButtonLink><Button type="submit">인증 메일 보내기</Button></div>
      <FormMessage message={message} />
    </form>
  </section>
}
