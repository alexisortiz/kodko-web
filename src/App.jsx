import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import HeaderComponent from './Components/header'
import Example from './Components/Tab'
import ExampleHeader from './Components/Headers'
import Hero from './Components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />
      <div className="App">
        {/* <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src="/vite.svg" className="logo" alt="Vite logo" />
          </a>
          <a href="https://reactjs.org" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div> */}

        <ExampleHeader></ExampleHeader>

        <Hero />
      </div>
    </>
  )
}

export default App
