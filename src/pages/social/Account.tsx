import PageIntro from '../../components/layout/PageIntro'
import AccountInformation from '../../components/account/AccountInformation'
import LogoutSection from '../../components/account/LogoutSection'

export default function Account() {
  return <><PageIntro id="account-title" eyebrow="계정 관리" title="내 계정 정보 수정" description="개인정보 수정과 로그아웃을 한 화면에 섞지 않고, 각각 독립 작업으로 구분합니다." /><AccountInformation /><LogoutSection /></>
}
