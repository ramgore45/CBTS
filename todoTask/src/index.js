
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./contextApi/ContextAPI";
import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import { Cartstore } from "./Redux/Cartstore";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <AppContextProvider >
                <Provider store={Cartstore}>
                    <App/>
                    <ToastContainer/>
                </Provider>
            </AppContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
