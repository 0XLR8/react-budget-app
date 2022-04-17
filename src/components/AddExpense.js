import { useContext } from "react";
import NewExpenseContext from "../context/NewExpenseContext";

const AddExpense = () => {
    
    const {handleOpen} = useContext(NewExpenseContext);

    return(
        <button className="btn-expense d-block mx-auto" onClick={handleOpen} >Add New Expense</button>
    )
}

export default AddExpense;