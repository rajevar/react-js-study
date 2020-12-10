import axios from 'axios'
async function fetchData(id) {
    axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {
            console.log(res.data);
            return new Promise((resolve, reject) => {
               resolve(res.data);
           })
        })
        // .catch(err => {
        //     console.log(err);
        //     alert(err);
        // })
};

export default fetchData;