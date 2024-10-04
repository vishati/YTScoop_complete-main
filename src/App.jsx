import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Page from './components/Page'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)] md:min-h-[88vh] min-h-[100vh] md:h-[100%] -z-10'>
        <Page />
        <Footer />
      </div>

    </>
  )
}

export default App
