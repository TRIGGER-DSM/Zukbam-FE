import { getStyles } from '../../styles/classes'
export default function FormMessage({ message, className = 'form-message' }: { message: string; className?: string }) {
  return message ? <p className={className} css={getStyles(className)} role="status">{message}</p> : null
}
