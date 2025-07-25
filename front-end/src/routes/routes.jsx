import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProtectedRouter from "./protectedRouter";
import AdminPage from "../pages/AdminPage";
import Onbording from "../pages/Onbording";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/onboarding" element={<Onbording />} />
                <Route element={<ProtectedRouter />}>
                    <Route path="/admin" element={<AdminPage />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes;