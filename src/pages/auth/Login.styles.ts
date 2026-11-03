import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
import { WideContainer } from '../../components/layout/Container.styles'
import { InputField } from '../../components/ui/InputField'
import FormMessage from '../../components/ui/FormMessage'

export const LoginSection = styled(WideContainer.withComponent('section'))({
  display: 'flex',
  justifyContent: 'center',
  paddingBlock: '72px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '40px 56px',
  },
})

export const LoginContainer = styled.div({
  width: 'min(440px, 100%)',
})

export const LoginPassword = styled(InputField)({
  paddingTop: '18px',
})

export const LoginSubmit = styled.div({
  paddingTop: '28px',
  '& > button': {
    width: '100%',
    height: '42px',
  },
})

export const LoginFeedback = styled(FormMessage)({
  marginTop: '20px',
  color: theme.colors.text,
  fontSize: '13px',
  lineHeight: '21px',
})

export const LoginLinks = styled.nav({
  display: 'flex',
  justifyContent: 'space-between',
  gap: '16px',
  paddingTop: '18px',
  fontSize: '14px',
  fontWeight: 800,
  lineHeight: '22.75px',
  '& a': {
    color: theme.colors.accent,
    textDecoration: 'underline',
    textUnderlineOffset: '2px',
  },
  '& a:hover': {
    color: theme.colors.primaryHover,
  },
})
