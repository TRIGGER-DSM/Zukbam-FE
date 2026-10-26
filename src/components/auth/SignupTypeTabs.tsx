import { css } from '@emotion/react'
import { Link } from 'react-router'
import { theme } from '../../styles/theme'

const tabsStyle = css`
  display: flex;
  gap: 4px;
  padding: 4px;
  margin-bottom: 28px;
  border: 1px solid ${theme.colors.border};
  border-radius: 10px;
  background: ${theme.colors.input};

  a {
    flex: 1;
    padding: 10px 0;
    border-radius: 8px;
    color: ${theme.colors.muted};
    text-align: center;
    font-size: 14px;
    font-weight: 800;
    line-height: 17px;
  }

  a[aria-current='page'] {
    background: ${theme.colors.primary};
    color: ${theme.colors.dark};
  }
`

export default function SignupTypeTabs({ accountType }: { accountType: 'student' | 'teacher' }) {
  return <nav css={tabsStyle} aria-label="가입 유형">
    <Link to="/signup" aria-current={accountType === 'student' ? 'page' : undefined}>학생</Link>
    <Link to="/signup/teacher" aria-current={accountType === 'teacher' ? 'page' : undefined}>선생님</Link>
  </nav>
}
