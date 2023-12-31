import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../components/home';
import About from '../components/About';
import Project from '../components/Projects';
import Contact from '../components/Contact';
import Credentials from '../components/Credentials';
import Service from '../components/Service';
import Footer from '../components/Footer';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useNotify } from './NotifyContext'; // Import the useNotify hook

const NotifyAndNavigate = ({ to }) => {
    const notify = useNotify(); // Use the useNotify hook to get the notify function
    const [shouldRun, setShouldRun] = useState(true); // State to control notification and navigation

    useEffect(() => {
        if (shouldRun) {
            notify('Route Not Found ❌ ');

            setTimeout(() => {
                window.location.href = to;
            }, 3000); // Adjust the delay as needed

            setShouldRun(false); // Prevent further runs
        }
    }, [notify, shouldRun, to]);

    if (shouldRun) {
        return null; // Return null to prevent rendering before redirection
    }

    return <Navigate to={to} />;
};

export const routes = [
    {
        path: '/',
        element: (
            <div>
                <ToastContainer />
                <Navbar activeTab="home" />
                <Home />
                <Footer />
            </div>
        ),
        // errorElement: <ErrorPage />,
        errorElement: 'no page found',
    },
    {
        path: '/about',
        element: (
            <div>
                <ToastContainer />
                <Navbar activeTab="about" />
                <About />
                <Footer />
            </div>
        ),
        // errorElement: <ErrorPage />,
        errorElement: 'no page found',
    },
    {
        path: '/project',
        element: (
            <div>
                <ToastContainer />
                <Navbar activeTab="project" />
                <Project />
                <Footer />
            </div>
        ),
        // errorElement: <ErrorPage />,
        errorElement: 'no page found',
    },
    {
        path: '/contact',
        element: (
            <div>
                <ToastContainer />
                <Navbar activeTab="contact" />
                <Contact />
                <Footer />
            </div>
        ),
        // errorElement: <ErrorPage />,
        errorElement: 'no page found',
    },
    {
        path: '/credentials',
        element: (
            <div>
                <ToastContainer />
                <Navbar activeTab="credentials" />
                <Credentials />
                <Footer />
            </div>
        ),
        // errorElement: <ErrorPage />,
        errorElement: 'no page found',
    },
    {
        path: '/service',
        element: (
            <div>
                <ToastContainer />
                <Navbar activeTab="service" />
                <Service />
                <Footer />
            </div>
        ),
        // errorElement: <ErrorPage />,
        errorElement: 'no page found',
    },
    // ... other routes
    {
        path: '*',
        element: <NotifyAndNavigate to="/" />,
    },
];
