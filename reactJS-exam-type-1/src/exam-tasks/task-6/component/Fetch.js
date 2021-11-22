import React, {useState, useEffect} from "react";
import axios from 'axios'


function Fetch() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(res => {
              console.log(res)
              setPosts(res.data)
          })
          .catch(err => {
              console.log(err)
          })
    },[])
    return (
        <div>
            <ul>
                <h1>Contacts</h1>
                {
                    posts.map(post => <li key={post.id}>{post.name}  {post.email} {post.address.street} {post.address.city} {post.phone} {post.company.name}</li>)
                }

            </ul>
        </div>
    )
}
export default Fetch
