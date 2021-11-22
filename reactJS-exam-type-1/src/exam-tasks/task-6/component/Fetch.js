import React, {useState, useEffect} from "react";
import axios from 'axios'
import css from './Fetch.module.css'


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
            <h1 className={css.h1}>Contacts</h1>
            <ul className={css.ul}>

                {
                    posts.map(post => <li className={css.li} key={post.id}> <h2>{post.name}</h2>

                        <h5 style={{color:"blue"}}>
                        <i className="fa fa-phone" aria-hidden="true"></i> {post.phone}</h5>
                        <i className="fa fa-envelope" aria-hidden="true"></i> {post.email}
                         <p><i className="fa fa-building" aria-hidden="true"></i> {post.company.name}</p>
                         <h5><i className="fa fa-map-marker" aria-hidden="true"></i> {post.address.street}  {post.address.city}</h5></li>)
                }

            </ul>
        </div>
    )
}
export default Fetch
