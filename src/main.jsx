import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './app/store'
import { Toaster } from '@/components/ui/sonner'  // use your local one

createRoot(document.getElementById('root')).render(
    
<Provider store={store}>
    <App />
    <Toaster 
    richColors
    position='top-center'
    toastOptions={{
        duration:1000
    }}
    />
</Provider>

)