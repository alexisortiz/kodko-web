import { useState } from 'react'
import HeaderComponent from './Components/header'
import ExampleHeaders from './Components/Headers'
import Hero from './Components/Hero'

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="App">
        <ExampleHeaders />
        <Hero />
      </div>
    </>
  )
}

export default App
