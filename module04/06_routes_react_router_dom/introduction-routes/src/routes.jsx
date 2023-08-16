import { useState } from 'react';
import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/index.jsx';
import Dashboard from './pages/Dashboard/index.jsx';
import SignIn from './pages/SignIn/index.jsx';
import SignUp from './pages/SignUp/index.jsx';
import Users from './pages/Users/index.jsx';

function ProtectedRoutes({ redirectTo }) {
    const isAuthenticated = true;

    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
    const [count, setCount] = useState(0);

    return (
        <Routes>
            <Route path="/">
                <Route path="/" element={<SignIn />} />
                <Route path="/sign-in" element={<SignIn />} />
            </Route>

            <Route element={<ProtectedRoutes redirectTo={'/sign-in'} />}>
                <Route path="/dashboard" element={<Navbar />}>
                    <Route path="" element={<Dashboard count={count} setCount={setCount} />} />
                </Route>

                <Route path="/users" element={<Navbar />}>
                    <Route path="" element={<Users />} />
                    <Route path=":id" element={<Users />} />
                </Route>
            </Route>

            <Route path="/sign-up" element={<SignUp />} />

            <Route path="*" element={<h1>404 - Not found</h1>} />
        </Routes>
    );
}

export default MainRoutes;
