import { theme } from '../../styles/theme'
import styled from '@emotion/styled'
import { Button } from '../ui/Button'

export const HeadingCopy = styled.div({
  flex: 1,
  minWidth: 0,
})

export const SectionEyebrow = styled.div({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  fontSize: '13px',
  color: theme.colors.accent,
  lineHeight: '21px',
  '& img': {
    width: '16px',
    height: '16px',
  },
})

export const StatisticsTrend = styled.p<{ $tone: string | undefined }>(
  ({ $tone }) =>
    $tone === 'green'
      ? {
          color: theme.colors.primary,
        }
      : $tone === 'red'
        ? {
            color: '#ff7d7d',
          }
        : {
            color: theme.colors.muted,
          },
)

export const BadgeSurface = styled.span({
  display: 'inline-block',
  padding: '3px 10px',
  background: '#062900',
  color: '#39ff14',
  borderRadius: 99,
  fontSize: 12,
  fontWeight: 700,
  whiteSpace: 'nowrap',
})

export const ModalSurface = styled.dialog<{ $wide: boolean }>(({ $wide }) => [
  {
    width: 'min(480px,calc(100% - 32px))',
    maxHeight: 'calc(100svh - 40px)',
    overflow: 'auto',
    padding: '28px',
    border: `1px solid ${theme.colors.border}`,
    borderRadius: '16px',
    background: theme.colors.surface,
    color: theme.colors.text,
    boxShadow: '0 20px 60px #0008',
    '&::backdrop': {
      background: '#0009',
    },
    '& > :where(div)': {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    '& :where(h2)': {
      fontSize: '22px',
      lineHeight: 1.45,
    },
    '& :where(p)': {
      fontSize: '14px',
      lineHeight: 1.6,
      color: theme.colors.secondary,
    },
  },
  $wide && { width: 'min(560px,calc(100% - 32px))' },
])

export const ModalTitle = styled.h2({
  flex: 1,
  minWidth: 180,
})

export const CloseModalButton = styled.button({
  background: 'none',
  border: 0,
  color: theme.colors.muted,
  fontSize: '18px',
  padding: '0 4px',
})

export const DeletionWarningIcon = styled.div({
  display: 'grid',
  placeItems: 'center',
  width: '48px',
  height: '48px',
  background: theme.colors.input,
  borderRadius: '50%',
  color: '#ff7d7d',
  fontWeight: 900,
  fontSize: '22px',
})

export const DialogActions = styled.div({
  display: 'flex',
  gap: '10px',
  '& >button': {
    flex: 1,
  },
})

export const CancelDeletion = styled(Button)({
  padding: '11px 18px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
})

export const ConfirmDeletionButton = styled(Button)({
  padding: '11px 18px',
  borderRadius: '8px',
  boxShadow: 'none',
  fontSize: '14px',
  lineHeight: '20px',
  fontFamily: 'inherit',
  background: '#ff7d7d',
  color: '#000',
})
