import { getStyles } from '../../styles/classes'
export default function CodeBlock({ code, label, className, focusable = false }: { code: string; label: string; className?: string; focusable?: boolean }) {
  return <pre className={className} css={getStyles(className)} aria-label={label} tabIndex={focusable ? 0 : undefined}><code>{code}</code></pre>
}
