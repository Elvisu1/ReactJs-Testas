import React, {useState} from "react";
import css from './LikeCounter.module.css'

function LikeCounter() {
    const [likeValue, setLikeValue] = useState(0);
    const handleIncrement = () => {
        setLikeValue(likeValue + 1)
    }
    const[dislikeValue, setDislikeValue] = useState(0)
    const handleDecrement = () => {
        setDislikeValue(dislikeValue - 1)
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
