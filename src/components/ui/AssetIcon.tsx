import { getStyles } from '../../styles/classes'
export default function AssetIcon({ group, name, className = `${group}-icon` }: { group: string; name: string; className?: string }) {
  return <img className={className} css={getStyles(className)} src={`/images/${group}/${name}.svg`} alt="" aria-hidden="true" />
}
