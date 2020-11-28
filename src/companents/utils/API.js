import axios from "axios";

export default axios.create({
    baseURL: 'https://rosseti-final-back.herokuapp.com/',
    responseType: "json"
});
axios.get('https://rosseti-final-back.herokuapp.com/', {
    headers: {
        'Authorization': ` Bearer ${token}`
    }
})
    .then((res) => {
        console.log(res.data)
    })
    .catch((error) => {
        console.error(error)
    })