import styled from '@emotion/styled'
import { theme } from '../../styles/theme'

const c = theme.colors
export const AdminRoot = styled.div({
  minHeight: '100svh',
  fontFamily: "'Noto Sans KR', Pretendard, sans-serif",
  '& :where(h2, h3)': {
    margin: 0,
  },
  '& :where(h2)': {
    fontSize: '18px',
    lineHeight: 1.45,
  },
  '& :where(input, select, textarea)': {
    font: 'inherit',
    background: c.input,
    border: `1px solid ${c.border}`,
    borderRadius: '8px',
    padding: '12px 14px',
    color: c.text,
    fontSize: '15px',
    width: '100%',
    minWidth: 0,
    fontWeight: 400,
  },
  'input::placeholder, textarea::placeholder': {
    color: c.muted,
  },
  '& :where(select)': {
    cursor: 'pointer',
  },
  '& :where(textarea)': {
    resize: 'vertical',
    minHeight: '150px',
    lineHeight: 1.6,
  },
  "& :where([aria-invalid='true'])": {
    borderColor: '#ff7d7d',
  },
  '& :where(button:disabled)': {
    cursor: 'default',
    opacity: '.45',
  },
  '& :where(small)': {
    fontSize: '12px',
    lineHeight: 1.6,
  },
})
export const Wide = styled.div({
  width: 'min(1120px, calc(100% - 48px))',
  marginInline: 'auto',
  '@media(max-width:640px)': {
    width: 'calc(100% - 40px)',
  },
})
export const Header = styled.header({
  background: c.dark,
  borderBottom: '1px solid #747474',
  '> div': {
    minHeight: '72px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '20px',
  },
  nav: {
    display: 'flex',
    gap: '24px',
    fontSize: '14px',
  },
  'nav a': {
    padding: '24px 0',
    position: 'relative',
  },
  'nav a[aria-current]::after': {
    content: "''",
    position: 'absolute',
    height: '2px',
    width: '24px',
    background: c.primary,
    left: 0,
    bottom: '15px',
  },
  '@media(max-width:640px)': {
    '> div': {
      flexWrap: 'wrap',
      paddingTop: '14px',
      gap: 0,
    },
    nav: {
      order: 3,
      width: '100%',
      justifyContent: 'center',
    },
    'nav a': {
      padding: '18px 0',
    },
    'nav a[aria-current]::after': {
      bottom: '9px',
    },
  },
})
export const Tabs = styled.nav({
  borderBottom: `1px solid ${c.border}`,
  '> div': {
    display: 'flex',
    gap: '24px',
    overflowX: 'auto',
  },
  a: {
    flexShrink: 0,
    padding: '16px 0 14px',
    fontSize: '14px',
    fontWeight: 700,
    lineHeight: '23px',
    color: c.muted,
    borderBottom: '2px solid transparent',
  },
  'a[aria-current]': {
    color: c.text,
    borderColor: c.primary,
  },
})
export const Intro = styled.section({
  paddingTop: '48px',
  paddingBottom: '28px',
  '@media(max-width:640px)': {
    h1: {
      fontSize: '28px',
      lineHeight: 1.4,
    },
  },
  '& :where(h1)': {
    fontSize: '36px',
    fontWeight: 900,
    lineHeight: '48px',
    margin: '10px 0 8px',
  },
  '& :where(p)': {
    fontSize: '16px',
    lineHeight: '26px',
    color: c.secondary,
  },
})
export const Content = styled(Wide)({
  paddingBlock: '72px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  '@media(max-width:640px)': {
    paddingBlock: '40px',
  },
})
export const Card = styled.section({
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  background: c.surface,
  border: `1px solid ${c.border}`,
  borderRadius: '12px',
  minWidth: 0,
})
export const Row = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap',
})
export const Filters = styled(Row)({
  flexWrap: 'nowrap',
  input: {
    flex: 1,
  },
  select: {
    width: '160px',
  },
  '@media(max-width:900px)': {
    flexWrap: 'wrap',
    '&& input': {
      flexBasis: '100%',
    },
    '&& select': {
      flex: 1,
      minWidth: '120px',
    },
  },
})
export const Stats = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
  gap: '16px',
  '@media(max-width:640px)': {
    gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
    gap: '12px',
    '>section': {
      padding: '16px',
    },
    strong: {
      fontSize: '26px',
    },
  },
  '& > :where(section)': {
    padding: '20px',
    gap: '6px',
  },
  '& :where(h2)': {
    fontSize: '13px',
    color: c.muted,
  },
  '& :where(strong)': {
    fontSize: '30px',
    lineHeight: '36px',
    fontWeight: 900,
  },
  '& p': {
    fontSize: '12px',
    lineHeight: '18px',
  },
})
export const TableWrap = styled.div({
  color: c.secondary,
  position: 'relative',
  border: `1px solid ${c.border}`,
  borderRadius: '12px',
  overflow: 'auto',
  '& :where(table)': {
    width: '100%',
    borderCollapse: 'collapse',
    textAlign: 'left',
    whiteSpace: 'nowrap',
    fontSize: '14px',
  },
  '& :where(thead)': {
    background: c.input,
    color: c.muted,
    fontSize: '12px',
  },
  '& :where(th)': {
    fontWeight: 700,
    padding: '12px 20px',
  },
  '& :where(td)': {
    padding: '14px 20px',
    borderTop: `1px solid ${c.border}`,
  },
  '& :where(th,td)': {
    paddingRight: '12px',
  },
  '& :where(th:last-of-type,td:last-of-type)': {
    paddingRight: '20px',
  },
  '& :where(td:first-of-type)': {
    color: c.text,
    fontWeight: 700,
  },
  '& :where(td a:hover)': {
    textDecoration: 'underline',
  },
})
export const Field = styled.label({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  flex: 1,
  minWidth: 0,
  fontSize: '13px',
  fontWeight: 700,
  '& :where(small)': {
    fontWeight: 400,
  },
})
export const TwoColumns = styled.div({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
  '@media(max-width:640px)': {
    gridTemplateColumns: '1fr',
  },
})
export const GroupColumns = styled.div({
  display: 'grid',
  gridTemplateColumns: '360px minmax(0,1fr)',
  gap: '24px',
  alignItems: 'start',
  '>aside': {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    minWidth: 0,
  },
  '@media(max-width:1000px)': {
    gridTemplateColumns: 'minmax(0,1fr)',
  },
})
export const GroupChoice = styled.button({
  display: 'flex',
  textAlign: 'left',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  padding: '16px',
  border: '1px solid transparent',
  borderRadius: '10px',
  background: c.input,
  color: c.text,
  '&[aria-pressed=true]': {
    background: c.accentBackground,
    borderColor: c.primary,
    color: c.primary,
  },
  strong: {
    display: 'block',
    fontSize: '14px',
  },
  small: {
    color: c.muted,
    display: 'block',
    marginTop: '4px',
  },
})
export const Notice = styled.div({
  background: c.input,
  border: `1px solid ${c.border}`,
  borderRadius: '10px',
  padding: '14px 18px',
  fontSize: '13px',
  color: c.secondary,
  lineHeight: 1.7,
})
