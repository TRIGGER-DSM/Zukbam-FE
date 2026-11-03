import { theme } from '../../styles/theme'
import { WideContainer } from './Container.styles'
import styled from '@emotion/styled'
import { Link } from 'react-router'

export const SiteHeaderSurface = styled.header({
  background: theme.colors.dark,
  borderBottom: `.8px solid ${theme.colors.text}`,
})

export const HeaderInner = styled(WideContainer)({
  height: '72px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    height: 'auto',
    minHeight: '72px',
    flexWrap: 'wrap',
  },
})

export const Brand = styled(Link)({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  fontSize: '18px',
  fontWeight: 900,
  lineHeight: '29.25px',
})

export const BrandMark = styled.span({
  display: 'grid',
  placeItems: 'center',
  width: '30px',
  height: '30px',
  borderRadius: '8px',
  background: theme.colors.primary,
  color: theme.colors.dark,
  fontSize: '14px',
})

export const MainNav = styled.nav({
  display: 'flex',
  gap: '24px',
  fontSize: '14px',
  lineHeight: '22.75px',
  '& a': {
    paddingBlock: '24px',
  },
  '& a:hover': {
    color: theme.colors.primary,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    order: 3,
    width: '100%',
    justifyContent: 'center',
    gap: '32px',
    '& a': {
      paddingBlock: '12px',
    },
  },
  "& a[aria-current='page']": {
    position: 'relative',
  },
  "& a[aria-current='page']::after": {
    content: "''",
    position: 'absolute',
    bottom: '15px',
    left: 0,
    width: '100%',
    height: '2px',
    background: theme.colors.primary,
  },
})

export const HomeProfile = styled(Link)({
  width: '44px',
  height: '44px',
  display: 'grid',
  placeItems: 'center',
  background: theme.colors.accentBackground,
  border: `2px solid ${theme.colors.primary}`,
  borderRadius: '50%',
  boxShadow: '0 3px 0 #191919',
  '& span': {
    width: '24px',
    height: '24px',
    display: 'grid',
    placeItems: 'center',
    background: theme.colors.primary,
    borderRadius: '50%',
    color: '#191919',
    fontSize: '12px',
    fontWeight: 700,
  },
})
