import { theme } from '../../styles/theme'
import { WideContainer } from '../../components/layout/Container.styles'
import styled from '@emotion/styled'
import Pagination from '../../components/ui/Pagination'
import { Link } from 'react-router'

export const HistoryContent = styled(WideContainer.withComponent('section'))({
  paddingBlock: '72px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '40px 48px',
  },
})

export const HistoryFilters = styled.form({
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1fr) repeat(3, 168px) auto',
  gap: '8px',
  '& input': {
    width: '100%',
    minWidth: 0,
    height: '49px',
    padding: '10px 12px',
    border: `1.6px solid ${theme.colors.border}`,
    borderRadius: '8px',
    background: theme.colors.input,
    color: theme.colors.text,
    font: 'inherit',
    fontSize: '16px',
  },
  '& select': {
    width: '100%',
    minWidth: 0,
    height: '49px',
    padding: '10px 12px',
    border: `1.6px solid ${theme.colors.border}`,
    borderRadius: '8px',
    background: theme.colors.input,
    color: theme.colors.text,
    font: 'inherit',
    fontSize: '16px',
  },
  '& input::placeholder': {
    color: theme.colors.muted,
    opacity: 1,
  },
  [`@media (max-width: ${theme.breakpoints.compact})`]: {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr)) auto',
    '& input': {
      gridColumn: '1 / -1',
    },
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: 'minmax(0, 1fr) auto',
    '& select': {
      gridColumn: '1 / -1',
    },
    '& select:last-of-type': {
      gridColumn: 1,
    },
  },
})

export const HistoryRecords = styled.ul({
  listStyle: 'none',
  padding: 0,
  margin: '20px 0 0',
  borderTop: `.8px solid ${theme.colors.border}`,
})

export const HistoryRecord = styled(Link)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '24px',
  padding: '20px 12px',
  minHeight: '98px',
  borderBottom: `.8px solid ${theme.colors.border}`,
  borderRadius: '8px',
  '&:hover': {
    background: theme.colors.surface,
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingInline: '4px',
    gap: '12px',
  },
})

export const HistoryRecordTitle = styled.p({
  fontSize: '16px',
  lineHeight: '26px',
})

export const HistoryRecordMeta = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '16px',
  paddingTop: '6px',
  color: theme.colors.muted,
  fontSize: '13px',
  lineHeight: '21.13px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gap: '8px',
  },
})

export const SubmissionResult = styled.span<{ $result: string }>(
  ({ $result }) => [
    {
      display: 'inline-flex',
      padding: '3px 8px',
      borderRadius: '999px',
      fontSize: '12px',
      lineHeight: '19.5px',
      fontWeight: 800,
    },
    $result === '정답'
      ? {
          color: '#50d890',
          background: '#193529',
        }
      : {
          color: '#ff7d7d',
          background: '#432323',
        },
  ],
)

export const HistoryChevron = styled.img({
  width: '18px',
  height: '18px',
  flexShrink: 0,
})

export const HistoryEmpty = styled.p({
  padding: '40px 16px',
  color: theme.colors.secondary,
  textAlign: 'center',
  fontSize: '14px',
  lineHeight: '24px',
})

export const HistoryPagination = styled(Pagination)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  paddingTop: '28px',
  '& button': {
    width: '40px',
    height: '40px',
    border: 0,
    borderRadius: '8px',
    background: 'transparent',
    color: theme.colors.secondary,
    fontSize: '14px',
    fontWeight: 800,
  },
  "& button[aria-current='page']": {
    background: theme.colors.primary,
    color: theme.colors.dark,
  },
  '& button:disabled': {
    cursor: 'default',
  },
})

export const HistoryHeading = styled(WideContainer.withComponent('section'))({
  paddingBlock: '48px 28px',
  '& h1': {
    paddingTop: '10px',
    fontSize: '36px',
    fontWeight: 900,
    lineHeight: '48px',
  },
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    paddingBlock: '36px 20px',
    '& h1': {
      fontSize: '29px',
      lineHeight: '40px',
    },
  },
})

export const HistoryEyebrow = styled.p({
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

export const HistoryHeadingDescription = styled.p({
  paddingTop: '8px',
  color: theme.colors.secondary,
  fontSize: '16px',
  lineHeight: '26px',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    fontSize: '14px',
    lineHeight: '24px',
  },
})
