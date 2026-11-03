import { theme } from '../../styles/theme'
import styled from '@emotion/styled'
import type { InputHTMLAttributes } from 'react'

type Props = InputHTMLAttributes<HTMLInputElement> & {
  id: string
  label: string
  help?: string
  helpId?: string
}
const Field = styled.div({
  minWidth: 0,
  '& label': {
    display: 'block',
    paddingBottom: '8px',
    fontSize: '13px',
    lineHeight: '21.13px',
    fontWeight: 800,
  },
  '& input': {
    display: 'block',
    width: '100%',
    height: '49px',
    padding: '10px 12px',
    border: `1.6px solid ${theme.colors.border}`,
    borderRadius: '8px',
    background: theme.colors.input,
    color: theme.colors.text,
    fontSize: '16px',
  },
  '& input::placeholder': {
    color: theme.colors.muted,
    opacity: 1,
  },
  '& input:hover': {
    borderColor: '#62656d',
  },
  '& input:focus': {
    borderColor: theme.colors.primary,
    outline: '2px solid rgb(57 255 20 / 18%)',
    outlineOffset: '2px',
  },
})

const FieldHelp = styled.p({
  padding: '6px 0 12px',
  color: theme.colors.muted,
  fontSize: '12px',
  lineHeight: '19.5px',
})

export function InputField({
  id,
  label,
  help,
  helpId = `${id}-help`,
  className,
  ...props
}: Props) {
  return (
    <Field className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        {...props}
        id={id}
        aria-describedby={
          props['aria-describedby'] ?? (help ? helpId : undefined)
        }
      />
      {help && <FieldHelp id={helpId}>{help}</FieldHelp>}
    </Field>
  )
}
