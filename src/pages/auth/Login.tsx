import { useRef, useState, type SubmitEvent } from 'react'
import { Link, useNavigate } from 'react-router'
import { Button } from '../../components/ui/Button'
import { InputField } from '../../components/ui/InputField'
import { authApi } from '../../api/auth'
import { getErrorMessage } from '../../api/client'
import { saveSession } from '../../auth/session'
import { setPendingSignup } from '../../auth/signupDraft'
import {
  LoginSection,
  LoginContainer,
  LoginPassword,
  LoginSubmit,
  LoginFeedback,
  LoginLinks,
} from './Login.styles'

export default function Login() {
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitting = useRef(false)
  const navigate = useNavigate()

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current) return
    const values = new FormData(event.currentTarget)
    const email = String(values.get('email') ?? '').trim()
    const password = String(values.get('password') ?? '')
    submitting.current = true
    setIsSubmitting(true)
    setMessage('')
    try {
      const tokens = await authApi.login({ email, password })
      saveSession(tokens, email)
      setPendingSignup(null)
      navigate('/', { replace: true })
    } catch (error) {
      setMessage(getErrorMessage(error))
    } finally {
      submitting.current = false
      setIsSubmitting(false)
    }
  }

  return (
    <LoginSection aria-label="로그인 정보 입력">
      <LoginContainer>
        <form
          onSubmit={handleSubmit}
          onChange={() => setMessage('')}
          aria-busy={isSubmitting}
        >
          <InputField
            id="login-email"
            name="email"
            type="email"
            autoComplete="username"
            placeholder="name@dsm.hs.kr"
            required
            readOnly={isSubmitting}
            label="학교 이메일"
          />
          <LoginPassword
            id="login-password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            readOnly={isSubmitting}
            label="비밀번호"
          />
          <LoginSubmit>
            <Button variant="primary" type="submit" disabled={isSubmitting}>
              {isSubmitting ? '로그인 중…' : '로그인'}
            </Button>
          </LoginSubmit>
          {message && <LoginFeedback message={message} />}
        </form>
        <LoginLinks aria-label="계정 도움말">
          <Link to="/signup">회원가입</Link>
          <Link to="/reset-password">비밀번호 재설정</Link>
        </LoginLinks>
      </LoginContainer>
    </LoginSection>
  )
}
