import React, {useState, useEffect} from "react";
import axios from 'axios'



function TodoFetch() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => {
                console.log("TODO LIST DATA")
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
                    posts.map(post => <li  key={post.id}> <h2>{post.title}</h2> </li>)


                }


        </div>
    )
}
export default TodoFetch
