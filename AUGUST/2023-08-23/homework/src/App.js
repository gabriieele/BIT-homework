import { useState, useEffect } from 'react'
import './App.css'
import Title from './components/titles/Title'
import Password from './components/password/Password'

function App() {
  return (
    <div className="container">
      <Title />
      <Password />
    </div>
  )
}

export default App
