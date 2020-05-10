import React, { StrictMode } from 'react'
import { render } from 'react-dom'
import './styles/index.scss'
import 'antd/dist/antd.css'
import App from './App'

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)