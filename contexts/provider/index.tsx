"use client";

import { useState, useEffect } from 'react';
import AppContext from '../AppContext';
import { getUser, setUser } from '@/controllers/user';
import { AppUser } from '../types';

const AppProvider = () => {
    const [currentUser, setCurrentUser] = useState<AppUser | undefined>(undefined);

    const updateUser = async (u: AppUser) => {
        const value = await setUser();
        if (value) {
            setCurrentUser(u);
        }
    }

    useEffect(() => {
        const initUser = async () => {
            const user =  await getUser();
            if (user != null) {
                setCurrentUser(user);
            }
        }

        initUser();
    },[]);

    return (
        <AppContext.Provider value={{ currentUser, updateUser }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;