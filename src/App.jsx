import './App.css'
import ContentBody from './Components/ContentBody'
import HeaderComponent from './Components/header'
import Hero from './Components/Hero'

function App() {
  return (
    <>
      <HeaderComponent />
      <div className="App">
        <ContentBody />

        <Hero />
      </div>
    </>
  )
}

export default App
