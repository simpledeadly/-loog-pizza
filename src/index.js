import React, { StrictMode } from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom'
import { store } from './redux/store'
import './styles/index.scss'
import 'antd/dist/antd.css'
import App from './App'

render(
  <StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
)