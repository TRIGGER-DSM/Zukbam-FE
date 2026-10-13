import { getStyles } from '../../styles/classes'
import type { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  help?: string
  helpId?: string
  helpClassName?: string
}
export function InputField({ id, label, help, helpId = `${id}-help`, helpClassName = 'field-help', className = '', ...props }: Props) {
  return (
    <div className={['field', className].filter(Boolean).join(' ')} css={getStyles(['field', className].filter(Boolean).join(' '))}>
      <label htmlFor={id}>{label}</label>
      <input {...props} id={id} aria-describedby={props['aria-describedby'] ?? (help ? helpId : undefined)} />
      {help && <p className={helpClassName} css={getStyles(helpClassName)} id={helpId}>{help}</p>}
    </div>
  )
}
