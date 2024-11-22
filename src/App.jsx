import React from 'react';
import "./App.css"
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Pages/Login/LoginForm/login.jsx';
import Navbar from './Components/Navbar/Navbar.jsx';
import Dasboard from './Pages/Dasboard/Dasboard.jsx'
import Libros from './Pages/Libros/Libros.jsx';
import ProtectedRoute from './Components/Login/ProtectedRoute.jsx';
import NavUser from './Components/NavUser/NavUser.jsx';

const App = () => {
    return (
        <Router>

            <Routes>
                <Route path="/el_buen_lector" element={<Login />} />

                <Route path="/el_buen_lector/Pages/Dasboard/Dasboard" element={
                    <ProtectedRoute>

                        <NavUser />
                        <Navbar />
                        <main>
                            <Dasboard />
                        </main>

                    </ProtectedRoute>
                } />

                <Route path="/el_buen_lector/Pages/Libros/Libros" element={
                    <ProtectedRoute>
                        <div className="container">
                            <NavUser />
                            <Navbar />
                            <main>
                                <Libros />
                            </main>
                        </div>
                    </ProtectedRoute>
                } />

                <Route path="/" element={<Navigate to="/el_buen_lector" replace />} />
            </Routes>
        </Router>
    );
};

export default App;
