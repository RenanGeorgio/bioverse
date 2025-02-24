"use client";

import { useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { AppUser } from '../types';

const AppProvider = () => {
    const [currentUser, setCurrentUser] = useState<AppUser | undefined>(undefined);

    const updateUser = (u: AppUser) => {
        setCurrentUser(u);
    }

    useEffect(() => {

    },[]);

    return (
        <AppContext.Provider value={{ currentUser, updateUser }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;