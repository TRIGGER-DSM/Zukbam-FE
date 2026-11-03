import { theme } from '../../styles/theme'
import { WideContainer } from '../../components/layout/Container.styles'
import styled from '@emotion/styled'
import FormMessage from '../../components/ui/FormMessage'

export const SubmissionContent = styled(WideContainer)({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 772fr) minmax(0, 300fr)',
  gap: '48px',
  paddingBlock: '72px',
  alignItems: 'start',
  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    gridTemplateColumns: 'minmax(0, 1fr)',
    gap: '40px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '40px 48px',
  },
})

export const SubmissionForm = styled.form({
  minWidth: 0,
})

export const SubmissionEditor = styled.div({
  border: `1.6px solid ${theme.colors.border}`,
  borderRadius: '8px',
  background: theme.colors.input,
  overflow: 'hidden',
  minHeight: '448px',
  '& textarea': {
    display: 'block',
    width: '100%',
    minHeight: '376px',
    padding: '10px 12px',
    margin: 0,
    border: 0,
    background: theme.colors.input,
    color: theme.colors.text,
    fontFamily: "'Cascadia Code', Consolas, monospace",
    fontSize: '16px',
    lineHeight: '25.6px',
    tabSize: 4,
    resize: 'vertical',
  },
  '&:focus-within': {
    borderColor: '#62656d',
  },
  '& textarea:focus-visible': {
    outline: `2px solid ${theme.colors.primary}`,
    outlineOffset: '-2px',
  },
})

export const SubmissionToolbar = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '12px 14px',
  borderBottom: `.8px solid ${theme.colors.border}`,
  background: theme.colors.surface,
  '& strong': {
    width: '98px',
    flexShrink: 0,
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 700,
  },
  '& select': {
    flex: 1,
    minWidth: 0,
    height: '44px',
    padding: '10px 16px',
    border: `1.6px solid ${theme.colors.border}`,
    borderRadius: '8px',
    background: theme.colors.input,
    color: theme.colors.text,
    font: 'inherit',
    fontSize: '16px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    alignItems: 'stretch',
    flexDirection: 'column',
    gap: '12px',
    '& strong': {
      width: 'auto',
    },
    '& select': {
      flex: 'auto',
      width: '100%',
    },
  },
})

export const SubmissionHelp = styled.p({
  paddingTop: '12px',
  color: theme.colors.muted,
  fontSize: '12px',
  lineHeight: '19.5px',
})

export const SubmissionActions = styled.div({
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '10px',
  paddingTop: '28px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    flexWrap: 'wrap',
    gap: '10px',
  },
})

export const SubmissionMessage = styled(FormMessage)({
  marginTop: '20px',
  color: theme.colors.secondary,
  fontSize: '14px',
  lineHeight: '24px',
})

export const SubmissionMessageDescription = styled.p({
  marginTop: '20px',
  color: theme.colors.secondary,
  fontSize: '14px',
  lineHeight: '24px',
})

export const SubmissionSidebar = styled.aside({
  minWidth: 0,
  paddingLeft: '28px',
  borderLeft: `.8px solid ${theme.colors.border}`,
  '& h2': {
    margin: 0,
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 700,
  },
  '& p': {
    paddingTop: '6px',
    color: theme.colors.secondary,
    fontSize: '16px',
    lineHeight: '26px',
  },
  '& section + section': {
    marginTop: '32px',
    paddingBlock: '32px 16px',
    borderTop: `.8px solid ${theme.colors.border}`,
  },
  [`@media (max-width: ${theme.breakpoints.tablet})`]: {
    borderLeft: 0,
    borderTop: `.8px solid ${theme.colors.border}`,
    padding: '32px 0 0',
  },
})

export const SubmissionHeading = styled(WideContainer.withComponent('section'))(
  {
    paddingBlock: '48px 28px',
    '& h1': {
      paddingTop: '10px',
      fontSize: '36px',
      lineHeight: '48px',
      fontWeight: 900,
    },
    [`@media (max-width: ${theme.breakpoints.mobile})`]: {
      paddingBlock: '36px 20px',
      '& h1': {
        fontSize: '29px',
        lineHeight: '40px',
      },
    },
  },
)

export const SubmissionEyebrow = styled.p({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: theme.colors.accent,
  fontSize: '13px',
  lineHeight: '26px',
  '& img': {
    width: '16px',
    height: '16px',
  },
})

export const SubmissionHeadingDescription = styled.p({
  paddingTop: '8px',
  color: theme.colors.secondary,
  fontSize: '16px',
  lineHeight: '26px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '14px',
    lineHeight: '24px',
  },
})
