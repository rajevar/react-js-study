import Axios from 'axios';
import React, {useState, useEffect }from 'react'
import axios from 'axios'


function DataFetching() {
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});

    useEffect(() => {
        // fetchData(setPosts,10);
        const fetchData = () => {
            axios
                .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .then(res => {
                    setPost(res.data)
                })
                .catch(err => {
                    console.log(err);
                })
        };
        fetchData();

    }, [id])

    function doSomething(e) {
        console.log("blahhh..");
        setId(e.target.value)
    }
    return (
        <div>
        <div>Hello Axios!</div>
        <input type="text" class="form-input" value={id} onChange={e => doSomething(e)}></input>
        <br /> {post.id} | {post.title}
        </div>

    )
}

export default DataFetching;