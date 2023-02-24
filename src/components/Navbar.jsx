import React, {useState} from 'react'
import {RiMenu3Fill} from 'react-icons/ri'
import {MdClose} from 'react-icons/md'

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className='flex justify-between items-center h-[70px] sm:w-[85%] w-[100%] sm:p-0 px-4 mx-auto absolute top-0 left-[7%] z-10'>
        <h2 className='text-red-500 text-2xl font-bold'>My<span className='text-gray-800 font-semibold'>Portfolio</span></h2>
        <nav className={`${showMenu ? 'absolute sm:relative flex-col px-4 sm:p-0 bg-white items-center space-y-4 sm:space-y-0 sm:bg-transparent sm:flex-row top-16 sm:top-0 left-0 w-full sm:w-fit' : 'hidden sm:flex'} flex sm:space-x-6 text-lg`}>
            <a href="#" className='text-red-500 font-bold'>Home</a>
            <a href="#" className='hover:text-red-500 hover:font-bold transition-all duration-300'>Porfolio</a>
            <a href="#" className='hover:text-red-500 hover:font-bold transition-all duration-300'>Skills</a>
            <a href="#" className='hover:text-red-500 hover:font-bold transition-all duration-300'>About</a>
            <a href="#" className='hover:text-red-500 hover:font-bold transition-all duration-300'>Contact</a>
        </nav>
        <div className='sm:hidden flex justify-center items-center h-10 w-10 rounded bg-white'>
          {!showMenu && <RiMenu3Fill  className='text-xl text-red-500' onClick={() => {setShowMenu(true); console.log('showmenu')}}/>}
          {showMenu && <MdClose  className='text-xl text-red-500' onClick={() => {setShowMenu(false); console.log('showmenu')}} /> }
        </div>
    </header>
  )
}

export default Navbar