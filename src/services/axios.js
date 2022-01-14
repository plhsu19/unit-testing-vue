import axios from 'axios';

export function getMessage() {
    // return a resolved promise with response or a rejected promise with an error
    return axios.get('http://localhost:3000/message').then(
        response => {
            return response.data;
        }
    )
}