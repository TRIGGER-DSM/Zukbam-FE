import { Outlet, useLocation } from 'react-router'
import { getPageMetadata } from '../../config/navigation'
import PageIntro from './PageIntro'

export default function AuthLayout() {
  const { pathname } = useLocation()
  const page = getPageMetadata(pathname)
  return <><PageIntro id="signup-title" eyebrow="계정" title={page.title} description={page.description ?? ''} /><Outlet /></>
}
