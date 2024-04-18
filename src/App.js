import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Appbar from './Components/Appbar';
import Utilisateurs from './Components/Utilisateurs';
import LoginPage from './Components/LoginPage'; 

function App() {
    return (
        <Router>
            <div className="App">
                <Appbar />
                <br />
                <br />
                <Routes>
                    <Route path="/" element={<Utilisateurs />} />
                    <Route path="/login" element={<LoginPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;