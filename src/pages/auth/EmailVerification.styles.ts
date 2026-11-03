import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
import { WideContainer } from '../../components/layout/Container.styles'
import { InputField } from '../../components/ui/InputField'
import FormMessage from '../../components/ui/FormMessage'

export const VerificationSection = styled(
  WideContainer.withComponent('section'),
)({
  display: 'flex',
  justifyContent: 'center',
  paddingBlock: '72px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '40px 56px',
  },
})

export const VerificationForm = styled.form({
  width: 'min(440px, 100%)',
})

export const VerificationNotice = styled.p({
  padding: '16px 18px',
  borderLeft: '2.4px solid #73a7ff',
  background: '#1e3047',
  fontSize: '16px',
  lineHeight: '26px',
  overflowWrap: 'anywhere',
})

export const VerificationField = styled(InputField)({
  marginTop: '24px',
})

export const FormActions = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  paddingTop: '28px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexWrap: 'wrap',
  },
})

export const VerificationFeedback = styled(FormMessage)({
  marginTop: '20px',
  color: theme.colors.text,
  fontSize: '13px',
  lineHeight: '21px',
})
