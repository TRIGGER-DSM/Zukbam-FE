import { getStyles } from '../../styles/classes'
export default function StatsGrid({ items, className }: { items: { label: string; value: string }[]; className: string }) {
  return <dl className={className} css={getStyles(className)}>{items.map(item => <div key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></div>)}</dl>
}
