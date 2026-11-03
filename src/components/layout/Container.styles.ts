import styled from '@emotion/styled'
import { theme } from '../../styles/theme'
export const WideContainer = styled.div({
  width: `min(${theme.layout.wide}, calc(100% - 48px))`,
  marginInline: 'auto',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    width: 'calc(100% - 40px)',
  },
})
