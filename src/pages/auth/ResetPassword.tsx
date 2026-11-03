import { theme } from '../../styles/theme'
import { WideContainer } from '../../components/layout/Container.styles'
import styled from '@emotion/styled'

import { Button } from '../../components/ui/Button'
import { InputField } from '../../components/ui/InputField'
import { useState, type FormEvent } from 'react'

const ResetSection = styled(WideContainer.withComponent('section'))({
  display: 'flex',
  justifyContent: 'center',
  paddingBlock: '72px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '40px 56px',
  },
})

const ResetContainer = styled.div({
  width: 'min(440px, 100%)',
})

const ResetNewPassword = styled(InputField)({
  paddingTop: '18px',
})

const FormActions = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  paddingTop: '28px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexWrap: 'wrap',
  },
})

const ResetNotice = styled.div({
  marginTop: '24px',
  padding: '16px 18px',
  borderLeft: '2.4px solid #ff7d7d',
  background: '#432323',
  fontSize: '16px',
  lineHeight: '26px',
  overflowWrap: 'anywhere',
  '& strong': {
    display: 'block',
    fontWeight: 700,
  },
})

export default function ResetPassword() {
  const [message, setMessage] = useState<string | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage(
      '현재 비밀번호 변경을 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.',
    )
  }

  return (
    <ResetSection aria-label="비밀번호 재설정 정보 입력">
      <ResetContainer>
        <form onSubmit={handleSubmit} onChange={() => setMessage(null)}>
          <InputField
            id="current-password"
            name="currentPassword"
            type="password"
            autoComplete="current-password"
            required
            label="현재 비밀번호"
          />
          <ResetNewPassword
            id="new-password"
            name="newPassword"
            type="password"
            autoComplete="new-password"
            minLength={8}
            pattern="(?=.*[A-Za-z])(?=.*[0-9]).{8,}"
            title="8자 이상, 영문과 숫자를 포함하세요."
            aria-describedby="new-password-help"
            required
            label="새 비밀번호"
            help="8자 이상, 영문과 숫자를 포함하세요."
            helpId="new-password-help"
          />
          <FormActions>
            <Button variant="primary" type="submit">
              비밀번호 변경
            </Button>
          </FormActions>
        </form>
        <ResetNotice role={message ? 'status' : undefined}>
          <strong>{message ? '변경 실패' : '변경 실패 예시'}</strong>
          <p>{message ?? '현재 비밀번호가 일치하지 않습니다.'}</p>
        </ResetNotice>
      </ResetContainer>
    </ResetSection>
  )
}
