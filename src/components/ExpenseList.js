import { useContext, useEffect } from "react";
import ExpenseContext from "../context/ExpenseContext";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = () => {

    const {expenses, filteredExpenses, setFilteredExpenses, selectedYear} = useContext(ExpenseContext);

    useEffect(() => {
        if(expenses){
            let filteredArray = expenses.filter(value => Number(new Date(value.date).getFullYear()) === Number(selectedYear))
            filteredArray.sort((a, b) => new Date(a.date) - new Date(b.date));
            setFilteredExpenses(filteredArray);
        } 
    }, [expenses, selectedYear, setFilteredExpenses])

    return(
        <div className="expense-list">
            {
                filteredExpenses && filteredExpenses.map(value => {
                    return <ExpenseItem key={value.id} expense={value} />
                })
            }
        </div>
    )
}

export default ExpenseList;