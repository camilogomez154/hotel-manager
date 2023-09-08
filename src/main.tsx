import ReactDOM from 'react-dom/client'
import React from 'react'

import { ReduxProvider } from './redux'
import { MainRouter } from './routers'

import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider>
      <MainRouter />
    </ReduxProvider>
  </React.StrictMode>,
)
