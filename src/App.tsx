import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Global from './styles/global';
import Header from './components/Header';
import { Router } from './router/Router';
import AuthProvider from './components/AuthProvider';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Global/>
            <Header/>
            <AuthProvider>
                <Router />
            </AuthProvider>
        </BrowserRouter>
    )
}

export default App;