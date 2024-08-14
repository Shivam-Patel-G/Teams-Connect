import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

export default App;
// testuser@example.com
// $2b$10$0GwBtKLt6vX8dPGB.CGGD.UuJhlhxjF4phYo44Um/p9D.C.cKLx72