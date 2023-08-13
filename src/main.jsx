import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StateProvider from './utils/stateContext.jsx'
import { reducer,initielState } from './utils/reducer.js'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initielstate={initielState} >
      <App />
    </StateProvider>
  </React.StrictMode>,
)
