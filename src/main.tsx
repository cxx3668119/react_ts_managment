import React from 'react'
import ReactDOM from 'react-dom/client'
import 'reset-css'
import '@/assets/style/global.scss'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
// import Router from './router'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
         <App />
    </BrowserRouter>
  </React.StrictMode>,
)
