import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
import { WideContainer } from '../../components/layout/Container.styles'
import { InputField } from '../../components/ui/InputField'

export const SignupSection = styled(WideContainer.withComponent('section'))({
  paddingBlock: '72px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '40px 56px',
  },
})

export const SignupForm = styled.form({
  width: `min(${theme.layout.form}, 100%)`,
  marginInline: 'auto',
})

export const SignupFields = styled.fieldset({
  border: 0,
  padding: 0,
  margin: 0,
  minWidth: 0,
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  columnGap: '20px',
  rowGap: '20px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
  },
})

export const FullWidthSignupField = styled(InputField)({
  gridColumn: '1 / -1',
})

export const SignupActions = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  paddingTop: '28px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexWrap: 'wrap',
  },
})

export const AccountTypeNavigation = styled.nav({
  display: 'flex',
  gap: '4px',
  padding: '4px',
  marginBottom: '28px',
  border: `1px solid ${theme.colors.border}`,
  borderRadius: '10px',
  background: theme.colors.input,
  a: {
    flex: 1,
    padding: '10px 0',
    borderRadius: '8px',
    color: theme.colors.muted,
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: 800,
    lineHeight: '17px',
  },
  "a[aria-current='page']": {
    background: theme.colors.primary,
    color: theme.colors.dark,
  },
})

export const StudentClassDetails = styled.div({
  gridColumn: '1 / -1',
  minWidth: 0,
})

export const StudentClassFields = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
  gap: '20px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: '12px',
  },
})

export const StudentClassHelp = styled.p({
  padding: '6px 0 12px',
  color: theme.colors.muted,
  fontSize: '12px',
  lineHeight: '19.5px',
})
