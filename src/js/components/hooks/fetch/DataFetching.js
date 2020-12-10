import axios from 'axios';
import React, {useState, useEffect }from 'react'
import fetchData from './fetchData'


function DataFetching() {
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});
    const [btnClick, setBtnClick] = useState(true);

    const fetchJson = () => {
        fetchData(id).then(data => {
            console.log(data);
        })
    }
    useEffect(() => {
        axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(result => setPost(result.data))
        .catch(err => console.error(err))

    }, [btnClick])

    function doSomething(e) {
        console.log("blahhh..");
        setId(e.target.value)
    }
    const doClick = e => {
        console.log("..clicked..");
        setBtnClick(!btnClick);
    }
    return (
        <div>
            <div>Hello Axios!</div>
            <input type="text" className="form-input" value={id} onChange={e => doSomething(e)} size="3"/>
            <button className="btn btn-sm btn-primary ml-2 mb-2" onClick={doClick}>Fetch</button>
            <br /> {post.id} | {post.title}
        </div>

    )
}

export default DataFetching;