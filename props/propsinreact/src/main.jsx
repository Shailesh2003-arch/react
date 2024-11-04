import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Student from './assets/Components/Student.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Student name="shailesh" age="19" gender="male"/>
    <Student name="Riyansh" age="21" gender="male"/ >
  </StrictMode>,
)
