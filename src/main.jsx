import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Analytics} from "@vercel/analytics/react";
import App from './App';
import GlobalStyle from './GlobalStyle';

const rootElement = document.getElementById('root');

if (!rootElement) {
    console.error("Failed to find the root element. Please ensure that your HTML file contains a div with id 'root'.");
} else {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <GlobalStyle/>
                <App/>
                <Analytics/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
