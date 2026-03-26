import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { Configurator } from './pages/Configurator';
import { Community } from './pages/Community';
import { Print } from './pages/Print';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Configurator />} />
                <Route path="/community" element={<Community />} />
                <Route path="/print" element={<Print />} />
            </Routes>
        </>
    );
}

export default App;