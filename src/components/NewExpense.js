import { useContext, useState } from "react";
import ExpenseContext from "../context/ExpenseContext";
import NewExpenseContext from "../context/NewExpenseContext";

const NewExpense = () => {
    
    const { handleOpen } = useContext(NewExpenseContext);
    const { handleAddExpense } = useContext(ExpenseContext);

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title !== "" && amount !== "" && date !== ""){
            handleAddExpense({ title, amount, date })
            setTitle("");
            setAmount("");
            setDate("");
        }
    }

    return(
        <form className="new-expense px-4"  onSubmit={handleSubmit}>
            <div className="d-flex flex-row flex-wrap">
                <div className="flex-item">
                    <label>Title</label>
                    <input type="text" placeholder="Add title..." value={title} onChange={(e) => {setTitle(e.target.value)}} required />
                </div>
                <div className="flex-item">
                    <label>Amount</label>
                    <input type="number" placeholder="Add amount..." value={amount} onChange={(e) => {setAmount(e.target.value)}} required />
                </div>
                <div className="flex-item">
                    <label>Date</label>
                    <input type="date" value={date} onChange={(e) => {setDate(e.target.value)}} required />
                </div>
            </div>
            <div className="mt-4 d-flex flex-row justify-content-end">
                <button className="btn-cancel me-5" type="button" onClick={handleOpen} >Cancel</button>
                <button className="btn-expense">Add Expense</button>
            </div>
        </form>
    )
}

export default NewExpense;