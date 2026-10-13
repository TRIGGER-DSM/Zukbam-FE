import { getStyles } from '../../styles/classes'
export default function SiteFooter() {
  return <footer className="site-footer" css={getStyles("site-footer")}><div className="wide-container footer-inner" css={getStyles("wide-container footer-inner")}><p>Algo algorithm practice service</p><nav aria-label="서비스 정책"><a href="/terms">이용약관</a><a href="/privacy">개인정보처리방침</a></nav></div></footer>
}
