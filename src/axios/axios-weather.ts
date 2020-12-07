import axios from "axios";
import env from '../utils/env';

const instance = axios.create({
    baseURL:
        env.getBaseAPI() ||
        "https://raw.githubusercontent.com/Predator7/react-weather/main/src/sample-api/weather.json",
});

export default instance;
