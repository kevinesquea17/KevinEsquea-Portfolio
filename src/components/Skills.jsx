import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3, DiJavascript1, DiReact, DiNodejsSmall} from 'react-icons/di'
import {TbBrandNextjs, TbBrandTailwind} from 'react-icons/tb'
import {SiExpress, SiSocketdotio, SiMongodb, SiMysql} from 'react-icons/si'

const Skills = () => {
  return (
    <section className='font-quicksand py-10 bg-[#F4F5FE]'>
        <div className='w-[90%] sm:w-[80%] mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl font-bold mb-2 text-gray-800'>Conocimientos, tecnologias y herramientas.</h2>
            <p className='text-xl text-red-500 font-semibold'>Mis habilidades</p>
          </div>
          <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-6">
            <div className="rounded-xl shadow-sm py-6 px-8 border">
              <h3 className='text-red-500 text-center text-xl font-bold mb-8'>Desarrollo Frontend</h3>
              <div className='grid sm:grid-cols-3 grid-cols-2 gap-4'>
                  <div className='bg-white flex flex-col items-center py-4 rounded-xl shadow overflow-hidden relative hover:shadow-sm hover:shadow-[#DE4A24] transition duration-300' >
                    {/* <div className='absolute w-12 h-12 rounded-full blur bg-red-500 -bottom-5 -right-5'></div> */}
                    <div className='bg-[#DE4A24] p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center'>
                      <AiFillHtml5 className='text-6xl text-white' />
                    </div>
                    <h4 className='text-base font-bold text-gray-900 relative'>HTML</h4>
                  </div>

                  <div className='bg-white flex flex-col items-center py-4 rounded-xl shadow overflow-hidden relative hover:shadow-sm hover:shadow-[#2762EE] transition duration-300'>
                    {/* <div className='absolute w-12 h-12 rounded-full blur bg-red-500 -bottom-5 -right-5'></div> */}
                    <div className='bg-[#2762EE] p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center'>
                      <DiCss3 className='text-6xl text-white' />
                    </div>
                    <h4 className='text-base font-bold text-gray-900 relative'>CSS</h4>
                  </div>

                  <div className='bg-white flex flex-col items-center py-4 rounded-xl shadow overflow-hidden relative hover:shadow-sm hover:shadow-[#F0DB4E] transition duration-300'>
                    {/* <div className='absolute w-12 h-12 rounded-full blur bg-red-500 -bottom-5 -right-5'></div> */}
                    <div className='bg-[#F0DB4E] p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center'>
                      <DiJavascript1 className='text-6xl text-white' />
                    </div>
                    <h4 className='text-base font-bold text-gray-900 relative'>JavaScript</h4>
                  </div>

                  <div className='bg-white flex flex-col items-center py-4 rounded-xl shadow overflow-hidden relative hover:shadow-sm hover:shadow-[#00DAFE] transition duration-300'>
                    {/* <div className='absolute w-12 h-12 rounded-full blur bg-red-500 -bottom-5 -right-5'></div> */}
                    <div className='bg-[#00DAFE] p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center'>
                      <DiReact className='text-6xl text-white font-bold' />
                    </div>
                    <h4 className='text-base font-bold text-gray-900 relative'>ReactJS</h4>
                  </div>

                  <div className='bg-white flex flex-col items-center py-4 rounded-xl shadow overflow-hidden relative hover:shadow-sm hover:shadow-gray-800 transition duration-300'>
                    {/* <div className='absolute w-12 h-12 rounded-full blur bg-red-500 -bottom-5 -right-5'></div> */}
                    <div className='bg-gray-800 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center'>
                      <TbBrandNextjs className='text-6xl text-white' />
                    </div>
                    <h4 className='text-base font-bold text-gray-900 relative'>NextJS</h4>
                  </div>

                  <div className='bg-white flex flex-col items-center py-4 rounded-xl shadow relative overflow-hidden hover:shadow-sm hover:shadow-cyan-500 transition duration-300'>
                    {/* <div className='absolute w-12 h-12 rounded-full blur bg-red-500 -bottom-5 -right-5'></div> */}
                    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center'>
                      <TbBrandTailwind className='font-bold text-white w-12 text-6xl' />
                    </div>
                    <h4 className='text-base font-bold text-gray-900 relative'>Tailwind</h4>
                  </div>

              </div>
            </div>
            <div className="rounded-xl shadow-sm border py-6 px-8">
              <h3 className='text-red-500 text-center text-xl font-bold mb-8'>Desarrollo Backend</h3>
              <div className="grid sm:grid-cols-3 grid-cols-2 gap-4">
                <div className='bg-white flex flex-col items-center py-4 rounded-xl shadow overflow-hidden relative hover:shadow-sm hover:shadow-[#8CC400] transition duration-300' >
                  {/* <div className='absolute w-12 h-12 rounded-full blur bg-red-500 -bottom-5 -right-5'></div> */}
                  <div className='bg-[#8CC400] p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center'>
                    <DiNodejsSmall className='text-6xl text-white' />
                  </div>
                  <h4 className='text-base font-bold text-gray-900 relative'>NodeJS</h4>
                </div>

                <div className='bg-white flex flex-col items-center py-4 rounded-xl shadow overflow-hidden relative hover:shadow-sm hover:shadow-[#333331] transition duration-300' >
                  {/* <div className='absolute w-12 h-12 rounded-full blur bg-red-500 -bottom-5 -right-5'></div> */}
                  <div className='bg-[#333331] p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center'>
                    <SiExpress className='text-6xl text-white' />
                  </div>
                  <h4 className='text-base font-bold text-gray-900 relative'>Express</h4>
                </div>

                <div className='bg-white flex flex-col items-center py-4 rounded-xl shadow overflow-hidden relative hover:shadow-sm hover:shadow-[#4CB24F] transition duration-300' >
                  {/* <div className='absolute w-12 h-12 rounded-full blur bg-red-500 -bottom-5 -right-5'></div> */}
                  <div className='bg-[#4CB24F] p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center'>
                    <SiMongodb className='text-6xl text-white' />
                  </div>
                  <h4 className='text-base font-bold text-gray-900 relative'>MongoDB</h4>
                </div>

                <div className='bg-white flex flex-col items-center py-4 rounded-xl shadow overflow-hidden relative hover:shadow-sm hover:shadow-[#0078A8] transition duration-300' >
                  {/* <div className='absolute w-12 h-12 rounded-full blur bg-red-500 -bottom-5 -right-5'></div> */}
                  <div className='bg-[#0078A8] p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center'>
                    <SiMysql className='text-6xl text-white' />
                  </div>
                  <h4 className='text-base font-bold text-gray-900 relative'>MySQL</h4>
                </div>

                <div className='bg-white flex flex-col items-center py-4 rounded-xl shadow overflow-hidden relative hover:shadow-sm hover:shadow-[#020202] transition duration-300' >
                  {/* <div className='absolute w-12 h-12 rounded-full blur bg-red-500 -bottom-5 -right-5'></div> */}
                  <div className='bg-[#020202] p-3 rounded-full w-12 h-12 mb-4 flex items-center justify-center'>
                    <SiSocketdotio className='text-6xl text-white' />
                  </div>
                  <h4 className='text-base font-bold text-gray-900 relative'>SocketIO</h4>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Skills