import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import { routes } from './routes'; // Import the routes array
import { NotifyProvider } from './NotifyContext';

const AppRouter = () => {
    const notify = (message) => toast(message);

    const router = createBrowserRouter(routes);

    return (
        <NotifyProvider notify={notify}>
            {' '}
            <RouterProvider router={router} />
        </NotifyProvider>
    );
};

export default AppRouter;
