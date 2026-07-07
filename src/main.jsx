import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Toaster } from '@/components/ui/sonner'
import { ThemeProvider } from 'next-themes'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <App />
      <Toaster
        richColors
        position='top-center'
        style={{
          "--normal-bg": "oklch(0.205 0 0)",
          "--normal-text": "oklch(0.985 0 0)",
          "--normal-border": "oklch(0.3 0 0)",
        }}
      />
    </ThemeProvider>
  </Provider>
)