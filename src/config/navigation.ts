import { matchPath } from 'react-router'

export type Section = 'home' | 'auth' | 'problems' | 'social' | 'ranking'
export type NavigationItem = { label: string; href: string }
export const navigation: Record<Exclude<Section, 'home' | 'ranking'>, NavigationItem[]> = {
  auth: [
    { label: '로그인', href: '/login' }, { label: '회원가입', href: '/signup' },
    { label: '이메일 인증', href: '/verify-email' }, { label: '비밀번호 재설정', href: '/reset-password' },
  ],
  problems: [{ label: '문제 목록', href: '/problems' }, { label: '학습 기록', href: '/problems/history' }, { label: '문제 추천', href: '/problems/recommendations' }],
  social: [{ label: '친구 목록', href: '/social' }, { label: '친구 추가', href: '/social/add' }, { label: '받은 요청', href: '/social/requests' }, { label: '콕 찌르기', href: '/social/pokes' }, { label: '성장', href: '/social/growth' }, { label: '계정 관리', href: '/social/account' }],
}

type PageMetadata = { path: string; title: string; section: Section; description?: string; activeSubmenu?: string }
const pages: PageMetadata[] = [
  { path: '/', title: '홈', section: 'home' },
  { path: '/login', title: '로그인', section: 'auth', description: '학교 이메일로 학습 기록을 이어서 확인합니다.', activeSubmenu: '/login' },
  { path: '/signup', title: '회원가입', section: 'auth', description: '필수 정보를 입력하고 학교 이메일 인증을 진행합니다.', activeSubmenu: '/signup' },
  { path: '/verify-email', title: '이메일 인증', section: 'auth', description: '받은 인증 코드를 입력해 학교 이메일을 확인합니다.', activeSubmenu: '/verify-email' },
  { path: '/reset-password', title: '비밀번호 재설정', section: 'auth', description: '현재 비밀번호를 확인한 뒤 새 비밀번호로 변경합니다.', activeSubmenu: '/reset-password' },
  { path: '/problems', title: '문제 목록', section: 'problems', activeSubmenu: '/problems' },
  { path: '/problems/history', title: '학습 기록', section: 'problems', activeSubmenu: '/problems/history' },
  { path: '/problems/history/:recordId', title: '풀이 상세', section: 'problems' },
  { path: '/problems/:problemId/submit', title: '풀이 제출', section: 'problems' },
  { path: '/problems/:problemId', title: '문제 상세', section: 'problems' },
  { path: '/social/growth', title: '성장', section: 'social', activeSubmenu: '/social/growth' },
  { path: '/growth', title: '성장', section: 'social', activeSubmenu: '/social/growth' },
  { path: '/social/account', title: '계정 관리', section: 'social', activeSubmenu: '/social/account' },
  { path: '/ranking', title: '랭킹', section: 'ranking' },
]
export function getPageMetadata(pathname: string) {
  // Unimplemented URLs retain the previous signup fallback.
  return pages.find(page => matchPath({ path: page.path, end: true }, pathname)) ?? pages[2]
}
