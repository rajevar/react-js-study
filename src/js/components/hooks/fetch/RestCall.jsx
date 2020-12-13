import axios from 'axios';

const RestCall = (id) => {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log("---> " + JSON.stringify(res.data))
            return new Promise(function (resolve, reject) {
                resolve("blah " + res.data);
            })
        })
}

export default RestCall;