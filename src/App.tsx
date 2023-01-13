import { useState } from 'react'
import reactLogo from './assets/react.svg'

import { AppRoutes } from "./routes";

function App() {
  const [count, setCount] = useState(0)

  return (
    <AppRoutes />
  )
}

export default App
