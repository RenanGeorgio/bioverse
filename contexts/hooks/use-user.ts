"use client";

import { useContext } from 'react';
import AppContext from '../AppContext';

const useUser = () => {
    return useContext(AppContext);
}

export default useUser;