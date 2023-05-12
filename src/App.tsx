import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Global from './styles/global';
import Header from './components/Header';
import { Router } from './router/Router';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Global/>
            <Header/>
            <Router />
        </BrowserRouter>
    )
}

export default App;