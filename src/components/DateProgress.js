import useMeasure from "react-use-measure";
import { useSpring, animated } from 'react-spring'
import { useContext } from "react";
import ExpenseContext from "../context/ExpenseContext";

const DateProgress = ({month, total, eachAmount}) => {

    const {filteredExpenses} = useContext(ExpenseContext);

    const [ref, { height }] = useMeasure();

    const calcProgress = () => {
        if(filteredExpenses){
            if(eachAmount === 0){
                return 0;
            }
            const percent = eachAmount * 100 / total;
            return height * percent / 100;
        }
        return 0;
    }

    const props = useSpring({ from: {height: 0}, to: {height: calcProgress()} })

    return(
        <div className="date-item d-flex flex-column align-items-center">
            <div ref={ref} className="main-bar" >
                <animated.div className="fill-bar" style={props} />
            </div>
            <p>{month}</p>
        </div>
    )
}

export default DateProgress;