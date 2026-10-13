import { Global, css } from '@emotion/react'
import { theme } from './theme'

const globalStyles = css`

:root {
  font-family: Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  color: ${theme.colors.text};
  background: ${theme.colors.background};
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color-scheme: dark;
}

* { box-sizing: border-box; }
body { margin: 0; min-width: 320px; }
a { color: inherit; text-decoration: none; }
button, input { font: inherit; }
button, a, input { -webkit-tap-highlight-color: transparent; }
button { cursor: pointer; }
p, h1 { margin: 0; }
:focus-visible { outline: 2px solid ${theme.colors.primary}; outline-offset: 4px; }

`

export default function GlobalStyles() {
  return <Global styles={globalStyles} />
}
