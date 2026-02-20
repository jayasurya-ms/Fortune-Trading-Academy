import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import GlobalDataSets from './Store/GlobalDataSets.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalDataSets>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </GlobalDataSets>
  </StrictMode>,
)
