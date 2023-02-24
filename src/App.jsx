import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'



const App = () => {

  

  return (
    <>
      <section className='h-screen relative overflow-hidden font-quicksand bg-[#f9fafe] flex justify-center items-center gap-4 flex-col'>
        <div className='bg-red-500 w-40 h-40 rounded-full blur-lg absolute -right-12 -top-12'></div>
        <Navbar />
        <Header />
      </section>
      <Portfolio />
      <Skills />
      <Contact />
    </>
  )
}

export default App