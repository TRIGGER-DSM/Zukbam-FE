import styled from '@emotion/styled'
const IconImage = styled.img({ width: 18, height: 18, flexShrink: 0 })

export default function AssetIcon({
  group,
  name,
  className,
}: {
  group: string
  name: string
  className?: string
}) {
  return (
    <IconImage
      className={className}
      src={`/images/${group}/${name}.svg`}
      alt=""
      aria-hidden="true"
    />
  )
}
