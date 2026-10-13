import { getStyles } from '../../styles/classes'
import { Link } from 'react-router'
import type { NavigationItem } from '../../config/navigation'

export default function SubNavigation({ items, label, activePath }: { items: NavigationItem[]; label: string; activePath?: string }) {
  return <nav className="account-nav" css={getStyles("account-nav")} aria-label={label}><div className="wide-container account-nav-inner" css={getStyles("wide-container account-nav-inner")}>{items.map(item => <Link key={item.href} to={item.href} aria-current={item.href === activePath ? 'page' : undefined}>{item.label}</Link>)}</div></nav>
}
