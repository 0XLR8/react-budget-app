import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";
import DateProgress from "./DateProgress";

const DateDisplay = () => {

    const {filteredExpenses} = useContext(ExpenseContext);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const getTotalAmount = () => {
        if(filteredExpenses){
            const amountArr = filteredExpenses.map(value => value.amount);
            const totalAmount = amountArr.reduce((prev, curr) => prev + curr, 0);
            return totalAmount;
        }
    }

    const getEachAmount = (month) => {
        if(filteredExpenses){
            let amount = 0;
            filteredExpenses.forEach(value => {
                if(new Date(value.date).getMonth() === month){
                    amount += value.amount;
                }
            })
            return amount;
        }
    }

    return(
        <div className="date-display mt-4 px-4 b-radius d-flex justify-content-around py-3">
            {
                months.map((value, index) => {
                    return  <DateProgress key={index} month={value} total={getTotalAmount()} eachAmount={getEachAmount(index)} />
                })
            }

        </div>
    )
}

export default DateDisplay;