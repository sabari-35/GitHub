import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>main 2</h1>
      
      <p className="read-the-docs">
        the changes are done in the main2 branch
      </p>
    <p>
        branch main1
      </p>
      <p>the changes are done in main 1 branch</p>
    </>
  )
}

export default App
