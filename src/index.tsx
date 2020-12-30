import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { store } from "./store/rootStore";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();