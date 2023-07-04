import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './routes/index.tsx'
import { BrowserRouter } from 'react-router-dom'
import { theme } from './styles/theme.ts'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global.ts'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
)
