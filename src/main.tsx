import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './app/index.tsx';
import store from './app/store.ts';
import './styles/index.css';
import './styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.Fragment>
        <Provider store={store}>
            <HelmetProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </HelmetProvider>
        </Provider>
    </React.Fragment>,
);
