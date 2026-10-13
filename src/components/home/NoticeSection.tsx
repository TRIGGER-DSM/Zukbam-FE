import { getStyles } from '../../styles/classes'
import { notices } from '../../data/notices'
import AssetIcon from '../ui/AssetIcon'
import { Link } from 'react-router'

export default function NoticeSection() {
return (<aside className="home-notices" css={getStyles("home-notices")} aria-labelledby="notices-title">
            <div className="notices-heading" css={getStyles("notices-heading")}>
              <div className="home-heading-group" css={getStyles("home-heading-group")}><span className="home-icon-circle" css={getStyles("home-icon-circle")}><AssetIcon group="home" name="notice" /></span><h2 id="notices-title">공지사항</h2></div>
              <Link className="notices-all" css={getStyles("notices-all")} to="/notices">전체</Link>
            </div>
            <ul className="notice-list" css={getStyles("notice-list")}>
              {notices.map(notice => <li key={notice.id}><time dateTime={notice.dateTime}>{notice.date}</time><Link to={`/notices/${notice.id}`}>{notice.title}</Link><AssetIcon group="home" name="chevron" /></li>)}
            </ul>
          </aside>)
}

