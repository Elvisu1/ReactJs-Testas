import {useState, createContext} from 'react';

export const CounterContext = createContext()
function CounterContextProvider(props){
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count +10);
    }
    const handleDecrement = () => {
        setCount(count -10);
    }
    return(
        <CounterContext.Provider value={{count,handleIncrement, handleDecrement}}>
            {props.children}
        </CounterContext.Provider>
    )

}
export default CounterContextProvider
