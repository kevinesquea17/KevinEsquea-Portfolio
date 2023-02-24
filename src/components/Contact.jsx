import React from 'react'
import {BsMessenger} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'
import {IoLogoWhatsapp} from 'react-icons/io'

const Contact = () => {
  return (
    <section className='font-quicksand py-10 bg-[#F4F5FE]'>
        <div className='w-[90%] sm:w-[80%] mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-2 text-gray-800'>Comunícate conmigo</h2>
            <p className='text-xl text-red-500 font-semibold'>Contacto</p>
          </div>
          <div className='sm:px-20 px-4 sm:flex gap-20'>
              <div className='sm:w-[30%] w-full flex flex-col gap-4'>
                <div className='flex justify-center items-center flex-col bg-white shadow-sm border py-4 rounded-xl'>
                  <div className='bg-red-100 w-12 h-12 rounded-full p-2 mb-2 flex justify-center items-center'>
                    <MdEmail className='text-red-400 text-lg'/>
                  </div>
                  <h4 className='font-bold text-xl text-gray-900'>Email</h4>
                  <p className='text-base text-gray-900 font-semibold'>kevinesq1996@gmail.com</p>
                </div>

                <div className='flex justify-center items-center flex-col bg-white shadow-sm border py-4 rounded-xl'>
                  <div className='bg-red-100 w-12 h-12 rounded-full p-2 mb-2 flex justify-center items-center'>
                    <BsMessenger className='text-red-400 text-lg'/>
                  </div>
                  <h4 className='font-bold text-xl text-gray-900'>Messenger</h4>
                  <p className='text-base text-gray-900 font-semibold'>Kevin Esquea</p>
                </div>

                <div className='flex justify-center items-center flex-col bg-white shadow-sm border py-4 rounded-xl'>
                  <div className='bg-red-100 w-12 h-12 rounded-full p-2 mb-2 flex justify-center items-center'>
                    <IoLogoWhatsapp className='text-red-400 text-lg'/>
                  </div>
                  <h4 className='font-bold text-xl text-gray-900'>WhatsApp</h4>
                  <p className='text-base text-gray-900 font-semibold'>+57 304-202-4366</p>
                </div>
              </div>
              <div className='sm:w-[70%] sm:block hidden'>
                <form className='flex flex-col gap-6'>
                  <input type="text" placeholder='Tu nombre completo' className='w-full p-4 rounded border bg-white placeholder:text-red-400 placeholder:font-bold' />
                  <input type="email" placeholder='Tu Email' className='w-full p-4 rounded border bg-white placeholder:text-red-400 placeholder:font-bold' />
                  <textarea className='w-full p-4 rounded border bg-white placeholder:text-red-400 placeholder:font-bold h-52' placeholder='Tu Mensaje...'></textarea>
                  <input type="submit" value="Enviar" className='bg-gradient-to-r from-red-400 to-red-600 px-4 py-2 rounded text-white shadow-lg shadow-red-400 w-[18%] mt-2'/>
                </form>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Contact