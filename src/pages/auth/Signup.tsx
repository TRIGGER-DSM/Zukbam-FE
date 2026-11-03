import { useRef, useState, type SubmitEvent } from 'react'
import { Button, ButtonLink } from '../../components/ui/Button'
import { InputField } from '../../components/ui/InputField'
import FormMessage from '../../components/ui/FormMessage'
import { Link, useNavigate } from 'react-router'
import { authApi } from '../../api/auth'
import { getErrorMessage } from '../../api/client'
import {
  beginSignup,
  getPendingSignup,
  readSignupDraft,
} from '../../auth/signupDraft'
import {
  SignupSection,
  SignupForm,
  SignupFields,
  FullWidthSignupField,
  StudentClassDetails,
  StudentClassFields,
  StudentClassHelp,
  SignupActions,
  AccountTypeNavigation,
} from './Signup.styles'

export default function Signup({
  accountType = 'student',
}: {
  accountType?: 'student' | 'teacher'
}) {
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submitting = useRef(false)
  const navigate = useNavigate()
  const teacher = accountType === 'teacher'
  const savedDraft = getPendingSignup()?.draft
  const saved =
    savedDraft?.accountType === accountType ? savedDraft.data : undefined

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting.current) return
    const form = event.currentTarget
    submitting.current = true
    setIsSubmitting(true)
    setMessage('')
    try {
      const draft = readSignupDraft(form, accountType)
      const verification = await authApi.sendEmailCode(draft.data.email)
      beginSignup(draft, verification)
      navigate('/verify-email')
    } catch (error) {
      setMessage(getErrorMessage(error))
    } finally {
      submitting.current = false
      setIsSubmitting(false)
    }
  }
  return (
    <SignupSection
      aria-label={
        teacher ? '선생님 회원가입 정보 입력' : '학생 회원가입 정보 입력'
      }
    >
      <SignupForm
        onSubmit={handleSubmit}
        onChange={() => setMessage('')}
        aria-busy={isSubmitting}
      >
        <AccountTypeNavigation aria-label="가입 유형">
          <Link
            to="/signup"
            aria-current={accountType === 'student' ? 'page' : undefined}
          >
            학생
          </Link>
          <Link
            to="/signup/teacher"
            aria-current={accountType === 'teacher' ? 'page' : undefined}
          >
            선생님
          </Link>
        </AccountTypeNavigation>
        <SignupFields disabled={isSubmitting}>
          {teacher ? (
            <>
              <FullWidthSignupField
                id="teacher-email"
                label="학교 이메일"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@dsm.hs.kr"
                defaultValue={saved?.email}
                help="학교 이메일만 가입할 수 있습니다."
                required
              />
              <InputField
                id="teacher-name"
                label="이름"
                name="name"
                maxLength={255}
                defaultValue={saved?.name}
                autoComplete="name"
                required
              />
              <InputField
                id="teacher-password"
                label="비밀번호"
                name="password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                maxLength={64}
                help="8~64자로 글자, 숫자, 특수문자를 모두 포함해 주세요."
                defaultValue={saved?.password}
                required
              />
              <FullWidthSignupField
                id="teacher-code"
                label="고유 코드"
                name="teacherCode"
                defaultValue={
                  savedDraft?.accountType === 'teacher'
                    ? savedDraft.data.teacherCode
                    : ''
                }
                autoComplete="off"
                placeholder="학교에서 발급받은 코드 입력"
                help="선생님 계정은 학교에서 발급한 고유 코드로만 가입할 수 있습니다."
                required
              />
            </>
          ) : (
            <>
              <FullWidthSignupField
                id="student-email"
                label="학교 이메일"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="name@dsm.hs.kr"
                defaultValue={saved?.email}
                help="학교 이메일만 가입할 수 있습니다."
                required
              />
              <InputField
                id="student-name"
                label="이름"
                name="name"
                maxLength={255}
                defaultValue={saved?.name}
                autoComplete="name"
                required
              />
              <InputField
                id="student-password"
                label="비밀번호"
                name="password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                maxLength={64}
                help="8~64자로 글자, 숫자, 특수문자를 모두 포함해 주세요."
                defaultValue={saved?.password}
                required
              />
              <StudentClassDetails>
                <StudentClassFields>
                  <InputField
                    id="student-grade"
                    label="학년"
                    name="grade"
                    type="number"
                    min={1}
                    max={3}
                    step={1}
                    defaultValue={
                      savedDraft?.accountType === 'student'
                        ? savedDraft.data.grade
                        : ''
                    }
                    inputMode="numeric"
                    placeholder="예) 2"
                    aria-describedby="student-class-help"
                    required
                  />
                  <InputField
                    id="student-classroom"
                    label="반"
                    name="class"
                    type="number"
                    min={1}
                    max={4}
                    step={1}
                    defaultValue={
                      savedDraft?.accountType === 'student'
                        ? savedDraft.data.class
                        : ''
                    }
                    inputMode="numeric"
                    placeholder="예) 3"
                    aria-describedby="student-class-help"
                    required
                  />
                  <InputField
                    id="student-number"
                    label="번호"
                    name="number"
                    type="number"
                    min={1}
                    step={1}
                    defaultValue={
                      savedDraft?.accountType === 'student'
                        ? savedDraft.data.number
                        : ''
                    }
                    inputMode="numeric"
                    placeholder="예) 15"
                    aria-describedby="student-class-help"
                    required
                  />
                </StudentClassFields>
                <StudentClassHelp id="student-class-help">
                  학년은 1~3, 반은 1~4, 번호는 양의 정수로 입력해 주세요.
                </StudentClassHelp>
              </StudentClassDetails>
            </>
          )}
        </SignupFields>
        <SignupActions>
          <ButtonLink variant="secondary" to="/login">
            로그인으로
          </ButtonLink>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? '전송 중…' : '인증 메일 보내기'}
          </Button>
        </SignupActions>
        <FormMessage message={message} />
      </SignupForm>
    </SignupSection>
  )
}
