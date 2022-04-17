import { createContext, useState } from "react";

const NewExpenseContext = createContext();

export const NewExpenseProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return(
        <NewExpenseContext.Provider value={{
            isOpen,
            handleOpen
        }}>
            {children}
        </NewExpenseContext.Provider>
    )
} 

export default NewExpenseContext;