import ReactDOM from 'react-dom/client'
import React from 'react'

import { MainRouter } from './routers/main.router'

import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MainRouter />
  </React.StrictMode>,
)
