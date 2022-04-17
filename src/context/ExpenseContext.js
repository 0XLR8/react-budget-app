import { createContext, useEffect, useState } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({children}) => {

    const [expenses, setExpenses] = useState(null);
    const [selectedYear, setSelectedYear] = useState();
    const [filteredExpenses, setFilteredExpenses] = useState(null);

    useEffect(() => {
        fetchExpenses();
    }, [])

    const fetchExpenses = async () => {
        try{
            const res = await fetch("http://localhost:5000/expenses");
            if(res.ok){
                const data = await res.json();
                setExpenses(data);
            }else{
                throw Error();
            }
        }catch(er){
            console.log(er);
        }
    }

    const handleAddExpense = async (expense) => {
        let id = 0;
        expenses.forEach(value => {
            value.id > id && (id = value.id)
        })
        id++;
        try{
            const res = await fetch("http://localhost:5000/expenses", {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({id, ...expense, amount: Number(expense.amount)})
            })
            if(res.ok){
                console.log("Expense added!");
                fetchExpenses();
                setSelectedYear(Number(new Date(expense.date).getFullYear()))
            }
        }catch(er){
            console.log(er);
        }
    }

    const handleDeleteExpense = async (id) => {
        try{
            const res = await fetch(`http://localhost:5000/expenses/${id}`, {
                method: "DELETE"
            })
            if(res.ok){
                console.log("Expense deleted!");
                fetchExpenses();
            }
        }catch(er){
            console.log(er);
        }
    }

    const handleYearChange = (year) => {
       setSelectedYear(Number(year));
    }

    return(
        <ExpenseContext.Provider value={{
            expenses,
            selectedYear,
            filteredExpenses,
            setFilteredExpenses,
            setExpenses,
            fetchExpenses,
            handleAddExpense,
            handleDeleteExpense,
            handleYearChange
        }}>
            {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseContext;