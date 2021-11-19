import React, {useReducer, useState} from "react";
import css from './LikeCounter.module.css'
// const initLikeValues = {likeValue: 12}

function likeReducer(state, action ) {



}

function LikeCounter() {
    const [likeValue, setLikeValue] = useState(12);
    // const [state,dispatch] = useReducer(likeReducer, initLikeValues)
    const handleIncrement = () => {
        if  (likeValue <= 12) {
            setLikeValue(likeValue + 1)
            setDislikeValue(2)
        } else{


        }



        // dispatch({type:'more'});

    }
    const[dislikeValue, setDislikeValue] = useState(2)
    const handleDecrement = () => {
        if (dislikeValue <=2){
            setDislikeValue(dislikeValue + 1)
            setLikeValue(12)
        }



        // dispatch({type:'less'})

    }

    return (
        <div className={css.div}>
            <button onClick={handleIncrement} className={css.button}><i className="fa fa-thumbs-up" aria-hidden="true"></i></button>
            <h2>{likeValue}</h2>
            <button onClick={handleDecrement} className={css.button}><i className="fa fa-thumbs-down" aria-hidden="true"></i></button>
            <h2>{dislikeValue}</h2>
        </div>
    )
}
export default LikeCounter
