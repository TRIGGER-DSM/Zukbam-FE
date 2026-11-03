import { theme } from '../../styles/theme'
import styled from '@emotion/styled'
import { Link } from 'react-router'
import { Button } from '../../components/ui/Button'
import { Card, Field, Row } from '../../components/admin/admin.styles'

export const StudentSearchResults = styled.div({
  border: `1px solid ${theme.colors.border}`,
  borderRadius: '10px',
  overflow: 'hidden',
  maxHeight: '340px',
  overflowY: 'auto',
})

export const StudentSearchOption = styled.label({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  padding: '12px 14px',
  borderBottom: `1px solid ${theme.colors.border}`,
  fontSize: '14px',
  '&:last-of-type': {
    border: 0,
  },
  '&:has(:checked)': {
    background: theme.colors.input,
  },
  '&:has(:disabled)': {
    color: theme.colors.muted,
  },
  '& input': {
    width: '20px',
    height: '20px',
    accentColor: theme.colors.primary,
    flexShrink: 0,
  },
  '& small': {
    display: 'block',
    color: theme.colors.muted,
  },
})

export const StudentInitial = styled.span({
  background: '#333438',
  borderRadius: '50%',
  width: '32px',
  height: '32px',
  display: 'grid',
  placeItems: 'center',
  flexShrink: 0,
})

export const StudentSearchIdentity = styled.span({
  flex: 1,
})

export const EmptyStudentSearch = styled.p({ padding: 20 })

export const SelectedStudentCount = styled.strong({
  color: theme.colors.primary,
  flex: 1,
  minWidth: 0,
  fontSize: 14,
})

export const CancelStudentAddition = styled(Button)({
  padding: '11px 18px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
})

export const AddSelectedStudents = styled(Button)({
  padding: '11px 18px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
})

export const GroupNameError = styled.small({
  color: '#ff7d7d',
})

export const GroupDescriptionField = styled(Field)({ marginBlock: 16 })

export const DialogActions = styled.div({
  display: 'flex',
  gap: '10px',
  '& >button': {
    flex: 1,
  },
})

export const CancelGroupEdit = styled(Button)({
  padding: '11px 18px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
})

export const SaveGroupChanges = styled(Button)({
  padding: '11px 18px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
})

export const CreateGroupForm = styled.form({
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
})

export const RequiredIndicator = styled.span({
  color: '#ff7d7d',
})

export const CreateGroupButton = styled(Button)({
  padding: '11px 18px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
})

export const GroupListCard = styled(Card)({ gap: 10 })

export const GroupListTitle = styled.h2({
  flex: 1,
  minWidth: 180,
})

export const GroupCount = styled.small({
  color: theme.colors.muted,
})

export const GroupChoiceSummary = styled.span({
  flex: 1,
  minWidth: 0,
})

export const EmptyGroupList = styled.p({
  color: theme.colors.muted,
})

export const GroupDetailCard = styled(Card)({ gap: 18 })

export const GroupHeader = styled(Row)({
  '@media(max-width:640px)': {
    '& > div:first-of-type': {
      flexBasis: '100%',
    },
  },
})

export const GroupIdentity = styled.div({
  flex: 1,
  minWidth: 0,
})

export const GroupName = styled.h2({ fontSize: '24px !important' })

export const GroupDescription = styled.p({
  color: '#c2c4c8',
  fontSize: 13,
  marginTop: 4,
})

export const GroupToolbarButton = styled(Button)({
  padding: '10px 14px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '12px',
  lineHeight: '20px',
  fontFamily: 'inherit',
})

export const DeleteGroupButton = styled(Button)({
  padding: '10px 14px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '12px',
  lineHeight: '20px',
  fontFamily: 'inherit',
  color: '#ff7d7d',
})

export const GroupMemberTable = styled.table({ minWidth: 640 })

export const EmailColumn = styled.col({ width: 220 })

export const SubmissionCountColumn = styled.col({ width: 70 })

export const SuccessRateColumn = styled.col({ width: 76 })

export const DetailColumn = styled.col({ width: 60 })

export const NumericColumnHeading = styled.th({
  textAlign: 'right',
})

export const AccessibleColumnLabel = styled.span({
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
})

export const NumericCell = styled.td({
  textAlign: 'right',
})

export const StudentAchievementLink = styled(Link)({
  color: theme.colors.primary,
})

export const EmptyMemberRow = styled.td({
  textAlign: 'center',
  padding: '36px',
})

export const MemberNavigationHint = styled.small({
  color: theme.colors.muted,
})

export const EmptyGroupDescription = styled.p({
  color: theme.colors.muted,
})
