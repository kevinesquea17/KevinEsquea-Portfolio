import { createContext, useState } from "react";


const PortfolioContext = createContext();

const PortfolioProvider = ({children}) => {

    const [categoryActive, setCategoryActive] = useState('All')

    return(
        <PortfolioContext.Provider value ={{
            categoryActive,
            setCategoryActive
        }}>
            {children}
        </PortfolioContext.Provider>
    ) 
}


export {
    PortfolioProvider
}
export default PortfolioContext;