import DateDisplay from "../components/DateDisplay";
import ExpenseHud from "../components/ExpenseHud";
import ExpenseList from "../components/ExpenseList";

const Main = () => {
    return(
        <div className="main py-4 px-3 b-radius">
            <ExpenseHud />
            <DateDisplay />
            <ExpenseList />
        </div>
    )
}

export default Main;