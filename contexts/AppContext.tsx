"use client";

import { Context, createContext } from 'react';
import { AppContextInterface } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppContext: Context<AppContextInterface> = createContext({} as any);

export default AppContext;