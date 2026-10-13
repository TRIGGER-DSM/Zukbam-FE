import { getStyles } from '../../styles/classes'
import type { ButtonHTMLAttributes } from 'react'
import { Link, type LinkProps } from 'react-router'

type Variant = 'primary' | 'secondary' | 'custom'
function buttonClass(variant: Variant, className = '') {
  return ['button', variant !== 'custom' && `button-${variant}`, className].filter(Boolean).join(' ')
}
export function Button({ variant = 'primary', className, type = 'button', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button {...props} type={type} className={buttonClass(variant, className)} css={getStyles(buttonClass(variant, className))} />
}
export function ButtonLink({ variant = 'primary', className, ...props }: LinkProps & { variant?: Variant }) {
  return <Link {...props} className={buttonClass(variant, className)} css={getStyles(buttonClass(variant, className))} />
}
