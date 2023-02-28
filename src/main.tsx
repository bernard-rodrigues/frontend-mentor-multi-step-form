import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { App } from './App'
import { PurchaseContextProvider } from './contexts/purchaseContext'
import { theme } from './styles/theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <PurchaseContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </PurchaseContextProvider>
  // </React.StrictMode>,
)
