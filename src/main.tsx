import ReactDOM from 'react-dom/client'
import React from 'react'

import { MainRouter } from './routers'

import './styles/main.css'
import { ReduxProvider } from './redux'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <MainRouter />
    </ReduxProvider>
  </React.StrictMode>,
)
