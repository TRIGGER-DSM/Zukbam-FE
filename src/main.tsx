import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.tsx'
import GlobalStyles from './styles/GlobalStyles'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { subscribeSession } from './auth/session'

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false, staleTime: 30_000 } } })
subscribeSession(() => queryClient.clear())

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>,
)
