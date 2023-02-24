import React from 'react'


const Project = ({project}) => {
  return (
    <div className='bg-white p-2 border shadow-sm rounded'>
        <div className='h-40 overflow-hidden transition  rounded shadow-lg duration-500 ease mb-3 project'>
          <img src={project.image} alt="" className='w-full object-cover' />
        </div>
        <div className='mb-3'>
            <h3 className='font-bold text-xl text-gray-900'>{project.name}</h3>
            <p className='text-gray-400 text-justify'>{project.description}</p>
        </div>
        <div className='flex space-x-4'>
            <a target='_blank' href={project.github} className='bg-gradient-to-r from-red-400 to-red-500 px-4 py-2 rounded text-white '>Github</a>
            <a target='_blank' href={project.demo} className='border-[1px] border-red-500 text-red-500 px-4 py-2 rounded'>Demo</a>
        </div>
    </div>
  )
}

export default Project