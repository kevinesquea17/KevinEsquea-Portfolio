import React from 'react'
import ListProject from './ListProject';
import Tabs from './Tabs';
import { PortfolioProvider } from '../context/PortfolioContext';




const Portfolio = () => {


    return (
        <section className='font-quicksand py-10 bg-gray-100'>
            <div className='w-[90%] sm:w-[80%] mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl font-bold mb-2 text-gray-800'>Mis trabajos recientes</h2>
                    <p className='text-xl text-red-500 font-semibold'>Portafolio</p>
                </div>
                <PortfolioProvider>
                    <Tabs />
                    <ListProject />
                </PortfolioProvider>
            </div>
        </section>
    )
}

export default Portfolio