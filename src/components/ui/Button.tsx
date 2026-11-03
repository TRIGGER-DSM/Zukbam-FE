import { theme } from '../../styles/theme'
import styled from '@emotion/styled'
import type { ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router'

type Variant = 'primary' | 'secondary' | 'custom'

const ActionButton = styled('button', {
  shouldForwardProp: (prop) => !prop.startsWith('$'),
})<{ $variant: Variant }>(({ $variant }) => ({
  minHeight: '42px',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '8px 14px',
  border: '1.6px solid',
  borderRadius: '8px',
  fontSize: '14px',
  fontWeight: 800,
  lineHeight: '22.75px',
  whiteSpace: 'nowrap',
  transition: 'background-color 150ms, transform 150ms',
  '&:active': {
    transform: 'translateY(2px)',
    boxShadow: 'none',
  },
  '@media (prefers-reduced-motion: reduce)': {
    transition: 'none',
  },
  ...($variant === 'primary'
    ? {
        color: theme.colors.dark,
        background: theme.colors.primary,
        borderColor: theme.colors.primary,
        boxShadow: `0 3px 0 ${theme.colors.primaryShadow}`,
        '&:hover': {
          background: theme.colors.primaryHover,
          borderColor: theme.colors.primaryHover,
        },
      }
    : $variant === 'secondary'
      ? {
          background: theme.colors.input,
          borderColor: theme.colors.border,
          color: theme.colors.text,
          boxShadow: '0 3px 0 #191919',
          '&:hover': {
            background: theme.colors.border,
          },
        }
      : {}),
}))

const ActionLink = ActionButton.withComponent(Link)

export function Button({
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <ActionButton {...props} type={type} $variant={variant} />
}
export function ButtonLink({
  variant = 'primary',
  ...props
}: LinkProps & { variant?: Variant }) {
  return <ActionLink {...props} $variant={variant} />
}
