import React, { useContext } from 'react'
import categories from '../categories'
import PortfolioContext from '../context/PortfolioContext'

const Tabs = () => {

    const {categoryActive, setCategoryActive} = useContext(PortfolioContext);

    return (
        <div className='w-full sm:w-[60%] p-1 bg-white bg-opacity-50 rounded-sm shadow-md flex mb-8 justify-between'>
            <div onClick={() => setCategoryActive('All')} className={`${categoryActive === 'All' ? 'bg-gradient-to-r from-red-400 to-red-600 text-white font-bold' : 'bg-transparent font-semibold'} px-4 py-2 rounded w-full flex justify-center items-center`}>All</div>
            {categories.map(category => (
                <div key={category.id} onClick={() => setCategoryActive(category.name)}  className={`${categoryActive === category.name ? 'bg-gradient-to-r from-red-400 to-red-600 text-white font-bold': 'bg-transparent font-semibold'} px-4 py-2 rounded w-full flex justify-center items-center`}> 
                    {category.name}
                </div>
            ))}
        </div>
    )
}


export default Tabs