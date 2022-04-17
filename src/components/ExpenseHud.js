import { useContext, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ExpenseContext from "../context/ExpenseContext";

const ExpenseHud = () => {

    const {expenses, selectedYear, handleYearChange} = useContext(ExpenseContext);
    const [expenseYear, setExpenseYear] = useState([]);

    useEffect(() => {
        if(expenses){
            let yearArray = expenses.map(value => {
                return Number(new Date(value.date).getFullYear())
            })
            yearArray.sort((a, b) => a - b);
            setExpenseYear([...new Set(yearArray)])
        }
    }, [expenses])

    const onYearChange = (e) => {
        handleYearChange(e.target.value);
    }

    return(
        <div>
            <div className="d-flex justify-content-between align-items-center px-3">
                <p className="hud-title">Filter by year</p>
                <Form.Select onChange={onYearChange} value={selectedYear} >
                    <option hidden>Date</option>
                    {
                        expenseYear.map((value, index) => {
                            return <option key={index} value={value}>{value}</option>
                        })
                    }
                </Form.Select>
            </div>
        </div>
    )
}

export default ExpenseHud;