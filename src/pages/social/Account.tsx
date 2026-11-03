import { useProfile } from '../../api/queries'
import QueryStatus from '../../components/ui/QueryStatus'
import { useAuthSession } from '../../auth/useAuthSession'
import PageIntro from '../../components/layout/PageIntro'
import { useState, type SubmitEvent } from 'react'
import { Button } from '../../components/ui/Button'
import { InputField } from '../../components/ui/InputField'
import { useNavigate } from 'react-router'
import { clearSession } from '../../auth/session'
import { setPendingSignup } from '../../auth/signupDraft'
import {
  AccountInformationSection,
  AccountSectionDescription,
  AccountForm,
  AccountFields,
  VerifiedEmailField,
  AccountActions,
  SaveAccountFeedback,
  AccountLogoutSection,
  AccountLogoutInner,
  LogoutDescription,
} from './Account.styles'

export default function Account() {
  const profile = useProfile()
  const session = useAuthSession()
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  function handleSave(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage(
      name.trim() && phone.trim()
        ? '현재 계정 정보 저장을 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.'
        : '이름과 전화번호를 입력해 주세요.',
    )
  }
  const navigate = useNavigate()
  if (!session) return <p role="status">로그인 후 이용해 주세요.</p>
  if (!profile.data) return <QueryStatus pending={profile.isPending} error={profile.error} retry={() => { void profile.refetch() }} />
  return (
    <>
      <PageIntro
        id="account-title"
        eyebrow="계정 관리"
        title="내 계정 정보 수정"
        description="개인정보 수정과 로그아웃을 한 화면에 섞지 않고, 각각 독립 작업으로 구분합니다."
      />
      <AccountInformationSection aria-labelledby="account-information-title">
        <h2 id="account-information-title">기본 정보</h2>
        <AccountSectionDescription>
          이름과 전화번호를 변경할 수 있습니다.
        </AccountSectionDescription>
        <AccountForm onSubmit={handleSave} onChange={() => setMessage('')}>
          <AccountFields>
            <InputField
              id="account-name"
              name="name"
              autoComplete="name"
              value={name || profile.data.name}
              onChange={(event) => setName(event.target.value)}
              required
              readOnly
              label="이름"
            />
            <InputField
              id="account-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
              readOnly
              placeholder="제공되지 않는 정보"
              label="전화번호"
            />
            <VerifiedEmailField
              id="account-email"
              name="email"
              type="email"
              autoComplete="email"
              value={profile.data.email}
              aria-describedby="account-email-help"
              readOnly
              label="학교 이메일"
              help="인증된 학교 이메일은 변경할 수 없습니다."
              helpId="account-email-help"
            />
          </AccountFields>
          <AccountActions>
            <Button variant="primary" type="submit" disabled>
              변경사항 저장
            </Button>
          </AccountActions>
          {message && <SaveAccountFeedback message={message} />}
        </AccountForm>
      </AccountInformationSection>
      <AccountLogoutSection aria-labelledby="logout-title">
        <AccountLogoutInner>
          <div>
            <h2 id="logout-title">로그아웃</h2>
            <LogoutDescription>
              현재 브라우저에 저장된 로그인 토큰을 삭제합니다.
            </LogoutDescription>
          </div>
          <Button
            variant="secondary"
            type="button"
            onClick={() => {
              clearSession()
              setPendingSignup(null)
              navigate('/login', { replace: true })
            }}
          >
            로그아웃
          </Button>
        </AccountLogoutInner>
      </AccountLogoutSection>
    </>
  )
}
