import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import App from './App.jsx'

// basically main is the parent and app is child of it so if you apply css in main it will apply in both main and app

createRoot(document.getElementById('root')).render(
    <App />
)
