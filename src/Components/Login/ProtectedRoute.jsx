import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated');

    return isAuthenticated ? children : <Navigate to="/el_buen_lector" replace />;
};

export default ProtectedRoute;
