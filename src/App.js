import { ExpenseProvider } from "./context/ExpenseContext";
import { NewExpenseProvider } from "./context/NewExpenseContext";
import Header from "./layout/Header";
import Main from "./layout/Main";

const App = () => {
    return(
        <ExpenseProvider>
            <NewExpenseProvider>
                <div className="container py-3" >
                    <Header />
                    <Main />
                </div>
            </NewExpenseProvider>
        </ExpenseProvider>
    )
}

export default App;