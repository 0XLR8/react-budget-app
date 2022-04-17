import { useContext } from "react";
import AddExpense from "../components/AddExpense";
import NewExpense from "../components/NewExpense";
import NewExpenseContext from "../context/NewExpenseContext";

const Header = () => {

    const {isOpen} = useContext(NewExpenseContext);

    return(
        <div className="header py-3 mb-4 b-radius">
            {
                !isOpen ? 
                <AddExpense /> :
                <NewExpense />
            }
        </div>
    )
}

export default Header;