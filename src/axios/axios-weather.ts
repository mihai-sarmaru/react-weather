import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://raw.githubusercontent.com/Predator7/react-weather/main/src/sample-api'
});

export default instance;