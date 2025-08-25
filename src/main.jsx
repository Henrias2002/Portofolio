import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { Home } from './Home.jsx'
import { NotFound } from './Not-found.jsx'

export const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'*',
    element:<NotFound/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
