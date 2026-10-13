import { getStyles } from '../../styles/classes'
import FormMessage from '../../components/ui/FormMessage'
import { Button } from '../../components/ui/Button'
import { InputField } from '../../components/ui/InputField'
import { useState, type FormEvent } from 'react'
import { Link } from 'react-router'

export default function Login() {
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('현재 로그인을 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.')
  }

  return (
    <section className="wide-container login-section" css={getStyles("wide-container login-section")} aria-label="로그인 정보 입력">
      <div className="login-container" css={getStyles("login-container")}>
        <form onSubmit={handleSubmit} onChange={() => setMessage('')}>
          <InputField id="login-email" name="email" type="email" autoComplete="username" placeholder="name@school.ac.kr" required label="학교 이메일" />
          <InputField id="login-password" name="password" type="password" autoComplete="current-password" required label="비밀번호" className="login-password" css={getStyles("login-password")} />
          <div className="login-submit" css={getStyles("login-submit")}>
            <Button variant="primary" type="submit">로그인</Button>
          </div>
          {message && <FormMessage message={message} className="form-message" css={getStyles("form-message")} />}
        </form>
        <nav className="login-links" css={getStyles("login-links")} aria-label="계정 도움말">
          <Link to="/signup">회원가입</Link>
          <Link to="/reset-password">비밀번호 재설정</Link>
        </nav>
      </div>
    </section>
  )
}
