import { getStyles } from '../../styles/classes'
import type { ReactNode } from 'react'

type Props = {
  prefix: string
  id: string
  eyebrow: ReactNode
  title: ReactNode
  description: ReactNode
  actions?: ReactNode
  wrapCopy?: boolean
}
export default function PageHeading({ prefix, id, eyebrow, title, description, actions, wrapCopy = true }: Props) {
  const copy = <><p className={`${prefix}-eyebrow`} css={getStyles(`${prefix}-eyebrow`)}>{eyebrow}</p><h1 id={id}>{title}</h1><p className={`${prefix}-description`} css={getStyles(`${prefix}-description`)}>{description}</p></>
  return <section className={`wide-container ${prefix}-intro`} css={getStyles(`wide-container ${prefix}-intro`)} aria-labelledby={id}>{wrapCopy ? <div>{copy}</div> : copy}{actions}</section>
}
