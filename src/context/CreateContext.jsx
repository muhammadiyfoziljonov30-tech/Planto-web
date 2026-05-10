import { createContext, useState } from 'react';


export const MyContext = createContext(null);

export const MyProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false); 

    const toggle = () => setIsOpen(!isOpen); 


    return (
        <MyContext.Provider 
        value={{ 
            isOpen, 
            toggle }}>
            {children}
        </MyContext.Provider>
    );
};
