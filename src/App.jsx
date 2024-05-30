import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Studio from './components/Studio/Studio'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Order from './components/Order/Order'
import Projects from './components/Projects/Projects'
import FooterNav from './components/FooterNav/FooterNav'
import Footer from './components/FooterNav/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>
     <Studio/>
     <Skills/>
     <Services/>
     <Order/>
     <Projects/>
     <FooterNav/>
     <Footer/>
    </>
  )
}

export default App
