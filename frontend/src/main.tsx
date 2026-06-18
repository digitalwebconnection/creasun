import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { injectSpeedInsights } from '@vercel/speed-insights'
import './index.css'
import App from './App.tsx'

// Initialize Vercel Speed Insights
injectSpeedInsights()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>,
)
