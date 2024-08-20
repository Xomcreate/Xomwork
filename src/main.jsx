import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Go from './Go.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Go/>
  
  </StrictMode>,
)
