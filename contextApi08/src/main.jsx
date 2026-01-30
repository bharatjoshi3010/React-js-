import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserContext from './context/UserContext.jsx'

createRoot(document.getElementById('root')).render(
  <UserContext>
     <App />
  </UserContext>
   //now <App /> is child of UserContext so we get userContext as output, we cant handle props and child properly
)
