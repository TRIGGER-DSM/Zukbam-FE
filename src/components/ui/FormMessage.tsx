import { theme } from '../../styles/theme'
import styled from '@emotion/styled'

const FormMessageDescription = styled.p({
  marginTop: '20px',
  color: theme.colors.text,
  fontSize: '13px',
  lineHeight: '21px',
})

export default function FormMessage({
  message,
  className,
}: {
  message: string
  className?: string
}) {
  return message ? (
    <FormMessageDescription className={className} role="status">
      {message}
    </FormMessageDescription>
  ) : null
}
