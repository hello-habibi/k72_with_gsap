import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Transition from './Components/common/Transition.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter >
<Transition>
  <App />
  </Transition>
    
    </BrowserRouter> 

  </StrictMode>,
)
