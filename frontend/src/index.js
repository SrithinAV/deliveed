import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import StoreContextProvider from './context/storeContext'; // Note: Changed import name to camelCase

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    
    <BrowserRouter>
    
        <StoreContextProvider> {/* Note: Changed component name to camelCase */}
           
            <App />
            

        </StoreContextProvider> {/* Note: Changed component name to camelCase */}
    </BrowserRouter>
);
