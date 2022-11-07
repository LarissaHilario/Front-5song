import { useState } from 'react'
import Slider4 from './components/Slider4'
import SignIn from './conteiners/SignIn'
import Login from './components/Login'
import Registro from './components/Registro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Login/>
  )
}

export default App
