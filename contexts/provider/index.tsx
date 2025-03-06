"use client";

import { useState, useEffect, PropsWithChildren } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import AppContext from '../AppContext';
import { getUser, setUser, cleanUser, hasUser } from '@/controllers/user';
import { getRedirectMethod } from '@/utils/auth-helpers/settings';
import { generateId } from '@/utils/helpers';
import { AppUser } from '../types';


const AppProvider = ({ children }: PropsWithChildren) => {
    const router = getRedirectMethod() === 'client' ? useRouter() : null;

    const [currentUser, setCurrentUser] = useState<AppUser | undefined>(undefined);

    const updateUser = async (u: AppUser) => {
        const { name, email, is_admin } = u;
        console.log(u);
        const initUser = await hasUser(name, email);

        const id = initUser?.id != null ? initUser.id : generateId(name, email);
        console.log(id);
        const value = await setUser({ name, email, is_admin, id });
        console.log(value);
        if (value && router) {
            setCurrentUser({ name, email, is_admin, id });
            console.log(router);
            return router.push('/');
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

        return () => {
            setCurrentUser(undefined);
        }
    },[]);

    return (
        <AppContext.Provider value={{ currentUser, updateUser }}>
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;