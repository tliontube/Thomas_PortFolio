import { Navigate } from "react-router-dom";

const ProtectedRouter = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem("token");
    return isAuthenticated ? children : <Navigate to="/onboarding" replace />;
}

export default ProtectedRouter;