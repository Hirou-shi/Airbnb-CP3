import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Headerfiles/Header'
import Footer from './components/Footerfiles/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
