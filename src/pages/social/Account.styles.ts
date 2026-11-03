import { theme } from '../../styles/theme'
import styled from '@emotion/styled'
import FormMessage from '../../components/ui/FormMessage'
import { InputField } from '../../components/ui/InputField'

export const AccountInformationSection = styled.section({
  width: `min(${theme.layout.form}, calc(100% - 48px))`,
  marginInline: 'auto',
  '& h2': {
    margin: 0,
    fontSize: '26px',
    lineHeight: '36px',
    fontWeight: 400,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: 'calc(100% - 40px)',
    paddingBlock: '40px 48px',
  },
  paddingBlock: '72px',

})

export const AccountSectionDescription = styled.p({
  padding: '8px 0px',
  color: theme.colors.secondary,
  fontSize: '16px',
  lineHeight: '26px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '14px',
    lineHeight: '24px',
  },
})

export const AccountForm = styled.form({
  marginTop: '32px',
  '& input[readonly]': {
    cursor: 'default',
  },
})

export const AccountFields = styled.div({
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  columnGap: '20px',
  rowGap: '20px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
  },
})

export const VerifiedEmailField = styled(InputField)({
  gridColumn: '1 / -1',
})

export const AccountActions = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  paddingTop: '28px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexWrap: 'wrap',
  },
})

export const SaveAccountFeedback = styled(FormMessage)({
  marginTop: '20px',
  color: theme.colors.text,
  fontSize: '13px',
  lineHeight: '21px',
})

export const AccountLogoutSection = styled.section({
  paddingBlock: '72px',
  background: theme.colors.surface,
  borderBlock: `.8px solid ${theme.colors.border}`,
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '40px',
  },
})

export const AccountLogoutInner = styled.div({
  width: `min(${theme.layout.form}, calc(100% - 48px))`,
  marginInline: 'auto',
  '& h2': {
    margin: 0,
    fontSize: '26px',
    lineHeight: '36px',
    fontWeight: 400,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: 'calc(100% - 40px)',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: '16px',
    paddingBottom: 0,
    '& > div': {
      maxWidth: 'none',
    },
  },
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  gap: '24px',
  paddingBottom: '32px',
  '& > div': {
    maxWidth: '315px',
  },
})

export const LogoutDescription = styled.p({
  padding: '8px 0 16px',
  color: theme.colors.secondary,
  fontSize: '16px',
  lineHeight: '26px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '14px',
    lineHeight: '24px',
  },
})
