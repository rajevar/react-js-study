import React, { useState, useEffect } from 'react'
import axios from 'axios';
import RestCall from './RestCall';


function DataFetching() {
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});
    const [btn, setBtn] = useState(false);
    const [error, setError] = useState(false);


    // useEffect(() => {
    //     // fetchData(setPosts,10);
    //     console.log(`useEffect : ${id}`);
    //     axios
    //         .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    //         .then(res => {
    //             setPost(res.data)
    //         })
    //         .catch(err => {
    //             console.error("Err > " + err);
    //         })
    // }, [btn])
    const showAlert = () => {
        RestCall(12).then(s => {
            console.log(" ---> " + s);
        });
    }


    useEffect(() => {
        //showAlert();
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [btn])

    const handleChange = event => {
        console.log(" --- onChange --- " + event.target.value);
        setId(event.target.value);
    }
    const fetchData = () => {
        console.log("clicked.." + id);
        setBtn(!btn);
    }

    return (
        <div>
            <div>Hello Axios!</div>
            <input type="text" size="4" className="form-input" value={id} onChange={handleChange}></input>
            <button className="btn btn-sm btn-info ml-2" onClick={fetchData} > AxO</button>
            <br /> {post.id} | {post.title}
        </div>

    )
}

export default DataFetching;