import React from 'react'
import ReactDOM from 'react-dom/client'
import Componente from './pages/PrimeiroComponente'
import Card from './components/card'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Componente />
    <Card />
  </React.StrictMode>,
)
