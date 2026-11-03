import { theme } from '../../styles/theme'
import { WideContainer } from './Container.styles'
import styled from '@emotion/styled'

import { Link } from 'react-router'
import type { NavigationItem } from '../../config/navigation'

const AccountNav = styled.nav({
  borderBottom: `.8px solid ${theme.colors.border}`,
  '& a': {
    padding: '16px 0 14px',
    borderBottom: '1.6px solid transparent',
    color: theme.colors.muted,
    fontSize: '14px',
    fontWeight: 800,
    lineHeight: '22.75px',
    whiteSpace: 'nowrap',
  },
  "& a[aria-current='page']": {
    borderBottomColor: theme.colors.primary,
    color: theme.colors.text,
  },
  '& a:hover': {
    color: theme.colors.text,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    '& a': {
      fontSize: '13px',
    },
  },
})

const AccountNavInner = styled(WideContainer)({
  display: 'flex',
  gap: '24px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: '20px',
    overflowX: 'auto',
  },
})

export default function SubNavigation({
  items,
  label,
  activePath,
}: {
  items: NavigationItem[]
  label: string
  activePath?: string
}) {
  return (
    <AccountNav aria-label={label}>
      <AccountNavInner>
        {items.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            aria-current={item.href === activePath ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </AccountNavInner>
    </AccountNav>
  )
}
