import {useState, createContext} from 'react';

export const CounterContext = createContext()
function CounterContextProvider(props){
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        if (count >=100) {alert('didinti negalima'); return}
        setCount(count +10);
    }
    const handleDecrement = () => {
        if (count <=-100) {alert('mazinti negalima'); return}

        setCount(count -10);
    }
    return(
        <CounterContext.Provider value={{count,handleIncrement, handleDecrement}}>
            {props.children}
        </CounterContext.Provider>
    )

}
export default CounterContextProvider
