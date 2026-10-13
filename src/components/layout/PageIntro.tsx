import { getStyles } from '../../styles/classes'
export default function PageIntro({ id, eyebrow, title, description, className = '' }: { id: string; eyebrow: string; title: string; description: string; className?: string }) {
  return <section className={['page-intro', className].filter(Boolean).join(' ')} css={getStyles(['page-intro', className].filter(Boolean).join(' '))} aria-labelledby={id}>
    <div className="intro-container" css={getStyles("intro-container")}><p className="eyebrow" css={getStyles("eyebrow")}>{eyebrow}</p><h1 id={id}>{title}</h1><p className="intro-description" css={getStyles("intro-description")}>{description}</p></div>
  </section>
}
