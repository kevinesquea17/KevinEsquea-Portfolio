import React from 'react'


const Header = () => {
  return (
    <div className='flex justify-center items-center relative w-[85%] mx-auto'>
        <div className='flex flex-col sm:w-[50%] w-full mx-auto items-center justify-center'>
            <h3 className='sm:text-5xl text-3xl font-bold text-gray-900 mb-2 text-center'>Kevin Esquea</h3>
            <h6 className='text-gray-400 text-base mb-6 text-center'>Desarrollador FullStack</h6>
            <div className='flex space-x-4'>
              <button className='border-[1px] border-red-500 text-red-500 px-4 py-2 rounded'>Descargar CV</button>
              <button className='bg-gradient-to-r from-red-400 to-red-500 px-4 py-2 rounded text-white shadow-lg shadow-red-400'>Contáctame</button> 
            </div>
            
        </div>
        <div className='border-l-8 border-r-8 border-solid border-red-400 absolute top-10 left-12'></div>
    </div>
  )
}

export default Header