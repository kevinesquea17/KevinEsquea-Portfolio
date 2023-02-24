import React, { useContext } from 'react'
import projects from '../projects'
import Project from './Project'
import PortfolioContext from '../context/PortfolioContext'


const ListProject = () => {

    const {categoryActive} = useContext(PortfolioContext);
    
    return (
        <div layout className='grid sm:grid-cols-3 grid-cols-1 gap-4'>
            {categoryActive === 'All' && projects.map(project => (
                <Project project={project} key={project.id} />
            ))}

            {categoryActive !== 'All' && projects.filter(project => project.category === categoryActive).map(project => (
                <Project project={project} key={project.id} />
            ))}
        </div> 
    )
}

export default ListProject