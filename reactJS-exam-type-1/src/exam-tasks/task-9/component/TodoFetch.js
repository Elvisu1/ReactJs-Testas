import React, {useState, useEffect} from "react";
import axios from 'axios'
import {logDOM} from "@testing-library/react";




function TodoFetch() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log("TODO LIST DATA")
                console.log(res.data[0].completed)
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    return (

        <div>


                {
                    posts.slice(0,5).map(post =>  <h5  key={post.id}> {post.title} {post.completed}</h5>)



                }



        </div>
    )
}
export default TodoFetch
