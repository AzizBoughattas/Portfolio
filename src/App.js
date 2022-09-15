import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Qualification from './components/qualification/Qualification'
// import Portfolio from './components/portfolio/Portfolio'
import Certificate from './components/certificate/Certificate'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
 const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Qualification />
      <Experience />
      {/* <Portfolio /> */}
      <Certificate />
      <Contact />
      <Footer />

    </>
  )
}

export default App;
