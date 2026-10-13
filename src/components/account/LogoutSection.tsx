import { getStyles } from '../../styles/classes'
import { useNavigate } from 'react-router'
import { Button } from '../ui/Button'

export default function LogoutSection() {
  const navigate = useNavigate()
  return (<section className="account-logout-section" css={getStyles("account-logout-section")} aria-labelledby="logout-title">
        <div className="account-container account-logout-inner" css={getStyles("account-container account-logout-inner")}>
          <div><h2 id="logout-title">로그아웃</h2><p className="account-section-description" css={getStyles("account-section-description")}>현재 브라우저에 저장된 로그인 토큰을 삭제합니다.</p></div>
          <Button variant="secondary" type="button" onClick={() => navigate('/login')}>로그아웃</Button>
        </div>
      </section>)
}
