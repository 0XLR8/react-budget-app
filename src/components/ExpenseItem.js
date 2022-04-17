import { useContext } from "react";
import { FaTrashAlt } from "react-icons/fa";
import ExpenseContext from "../context/ExpenseContext";

const ExpenseItem = ({expense}) => {

    const {id, date, title, amount} = expense;
    const {handleDeleteExpense} = useContext(ExpenseContext);

    const day = new Date(date).getDate();
    const month = new Date(date).toLocaleString("default", {month: "long"})
    const year = new Date(date).getFullYear();

    return(
        <div className="expense-item mt-3 p-2 b-radius d-flex justify-content-between align-items-center">
            <div className="expense-date d-flex flex-column align-items-center">
                <span className="expense-month">{month}</span>
                <span className="expense-year">{year}</span>
                <span className="expense-day">{day}</span>
            </div>
            <p className="expense-title flex-grow-1 px-3">{title}</p>
            <div className="expense-amount">$ {amount}</div>
            <span className="expense-delete" onClick={() => handleDeleteExpense(id)}>{<FaTrashAlt />}</span>
        </div>
    )
}

export default ExpenseItem;