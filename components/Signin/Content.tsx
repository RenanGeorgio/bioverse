"use client";

import { ChangeEvent } from 'react';
import Input from '@/components/Input';
import './Form.module.css';


type Data = {
    name: string;
    email: string;
}

interface Props {
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
    currentData: Data | undefined;
    control?: string | number | readonly string[];
}

const Content = ({ handleChange, currentData, control }: Props) => {
    return (
        <div className="w-full h-full p-5 bg-white shadow flex flex-col text-base">
            <span className="font-sans text-4xl text-center pb-2 mb-1 border-b mx-4 align-center">
                Login
            </span>
            <div className="form-group">
                <label htmlFor="name">Full name</label>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Full name"
                    className="form-input"
                    required
                    value={currentData?.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="name@provider.com"
                    className="form-input"
                    required
                    value={currentData?.email}
                    onChange={handleChange}
                />
            </div>
            <input type="hidden" id="timestamp" name="timestamp" value={control} />
        </div>
    );
}

export default Content;