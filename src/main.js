import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
// import App from './App';
import App from './App.jsx';
import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <BrowserRouter>
        <ConfigProvider 
            theme={{
                token: {
                    colorPrimary: '#00b96b',
                }
            }}
        >
            <App />
        </ConfigProvider>
    </BrowserRouter>
);