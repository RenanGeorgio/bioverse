"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import Content from './Content';
import ToggleSwitch from '@/components/ToggleSwitch';
import './Form.module.css';


type Data = {
    name: string;
    email: string;
}

interface FormProps {
    onSubmit: (name: string, email: string, admin: boolean) => void;
}

const Form = ({ onSubmit }: FormProps) => {
    const [data, setData] = useState<Data | undefined>(undefined);
    const [admin, setAdmin] = useState<boolean>(false);
    const [isEnabled, setIsEnabled] = useState<boolean>(false);

    let control: string | number | readonly string[] | undefined = undefined;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();

        if (data) {
            const { name, email } = data;
            onSubmit(name, email, admin);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData((prev: Data | undefined) => ({
          ...prev as Data,
          [e.target.name]: e.target.value
        }));
    };

    useEffect(() => {
        if (data) {
            const { name, email } = data;

            if ((name?.length > 0) && (email?.length > 0)) {
                setIsEnabled(true);
            } else {
                setIsEnabled(false);
            }
        } else {
            setIsEnabled(false);
        }
    },[data]);

    return (
        <div className="modal-form">
            <form onSubmit={handleSubmit}>
                <div className="form-content">
                    <Content handleChange={handleChange} currentData={data} control={control} />
                </div>
                <div className="w-full h-full p-5 bg-white shadow flex flex-col text-base">
                    <button
                        type="submit"
                        className="form-submit-button"
                        disabled={!isEnabled}
                    >
                        Submit
                    </button>
                </div>
            </form>
            <div className="w-full h-full p-5 flex justify-center items-center">
                <ToggleSwitch checked={admin} onChange={setAdmin} />
            </div>
        </div>
    );
}

export default Form;