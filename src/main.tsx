import React from 'react'
import ReactDOM from 'react-dom/client'
import TagManager, { TagManagerArgs } from 'react-gtm-module'
import App from './App'

import './styles/index.css'

const tagManagerArgs: TagManagerArgs = {
  gtmId: 'GTM-5GCSQST',
}

TagManager.initialize(tagManagerArgs)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
