import { createContext, useState } from 'react';


export const MyContext = createContext(null);

export const MyProvider = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false); 

    const toggle = () => setIsOpen(!isOpen); // Funksiya

    return (
        // 2. Value ichida uzatiladigan ma'lumotlar beriladi
        <MyContext.Provider 
        value={{ 
            isOpen, 
            toggle }}>
            {children}
        </MyContext.Provider>
    );
};
