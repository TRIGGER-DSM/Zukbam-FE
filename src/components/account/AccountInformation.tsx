import { getStyles } from '../../styles/classes'
import FormMessage from '../ui/FormMessage'
import { useState, type FormEvent } from 'react'
import { Button } from '../ui/Button'
import { InputField } from '../ui/InputField'

export default function AccountInformation() {
  const [name, setName] = useState('김민서')
  const [phone, setPhone] = useState('010-2345-6791')
  const [message, setMessage] = useState('')
  function handleSave(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage(name.trim() && phone.trim() ? '현재 계정 정보 저장을 이용할 수 없습니다. 잠시 후 다시 시도해 주세요.' : '이름과 전화번호를 입력해 주세요.')
  }
  return (<section className="account-container account-information" css={getStyles("account-container account-information")} aria-labelledby="account-information-title">
        <h2 id="account-information-title">기본 정보</h2>
        <p className="account-section-description" css={getStyles("account-section-description")}>이름과 전화번호를 변경할 수 있습니다.</p>
        <form className="account-form" css={getStyles("account-form")} onSubmit={handleSave} onChange={() => setMessage('')}>
          <div className="form-grid" css={getStyles("form-grid")}>
            <InputField id="account-name" name="name" autoComplete="name" value={name} onChange={event => setName(event.target.value)} required label="이름" />
            <InputField id="account-phone" name="phone" type="tel" autoComplete="tel" value={phone} onChange={event => setPhone(event.target.value)} required label="전화번호" />
            <InputField id="account-email" name="email" type="email" autoComplete="email" value="minseo@school.ac.kr" aria-describedby="account-email-help" readOnly label="학교 이메일" className="field-full" css={getStyles("field-full")} help="인증된 학교 이메일은 변경할 수 없습니다." helpId="account-email-help" helpClassName="field-help" />
          </div>
          <div className="form-actions" css={getStyles("form-actions")}><Button variant="primary" type="submit">변경사항 저장</Button></div>
          {message && <FormMessage message={message} className="form-message" css={getStyles("form-message")} />}
        </form>
      </section>)
}
