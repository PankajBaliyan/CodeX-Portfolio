import React, { createContext, useContext } from 'react';

// Create a NotifyContext
const NotifyContext = createContext();

// Create a NotifyProvider component
export const NotifyProvider = ({ children, notify }) => {
    return (
        <NotifyContext.Provider value={notify}>
            {children}
        </NotifyContext.Provider>
    );
};

// Create a custom hook to use the notify function
export const useNotify = () => {
    return useContext(NotifyContext);
};
