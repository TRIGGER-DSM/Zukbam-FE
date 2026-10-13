import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import GlobalStyles from './styles/GlobalStyles'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
