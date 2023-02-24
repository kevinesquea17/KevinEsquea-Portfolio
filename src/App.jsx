import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'
import {AiFillGithub, AiFillLinkedin} from 'react-icons/ai'



const App = () => {

  

  return (
    <>
      <section className='h-screen relative overflow-hidden font-quicksand bg-[#f9fafe] flex justify-center items-center gap-4 flex-col'>
        <div className='bg-red-500 w-40 h-40 rounded-full blur-lg absolute -right-12 -top-12'></div>
        <Navbar />
        <Header />
        <div className='absolute sm:left-[7%] left-[5%] sm:bottom-10 bottom-[5%] flex flex-col space-y-4 items-center'>
          <AiFillLinkedin className="text-xl text-red-500" />
          <AiFillGithub className='text-xl text-red-500' />
          <div className='h-8 w-[2px] bg-red-500'></div>
        </div>
      </section>
      <Portfolio />
      <Skills />
      <Contact />
    </>
  )
}

export default App