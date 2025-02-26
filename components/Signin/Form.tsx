"use client";

import { useEffect, useState, FormEvent, ChangeEvent } from 'react';
import Content from './Content';
import './Form.module.css';

type Data = {
    name: string;
    email: string;
}

interface FormProps {
    onSubmit: (name: string, email: string, admin: boolean) => void;
}

export default function Form({ onSubmit }: FormProps) {
    const [data, setData] = useState<Data | undefined>(undefined);
    const [admin, setAdmin] = useState<boolean>(false);
    const [isEnabled, setIsEnabled] = useState<boolean>(false);

    let control: unknow = undefined;

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        onSubmit(name, email);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value, // Update the corresponding field dynamically
        }));
    };

    return (
        <div className="modal-form">
            <form onSubmit={handleSubmit}>
                <div className="form-content">
                    <Content handleChange={handleChange} currentData={data} control={control} />
                </div>
                <button
                    type="submit"
                    className="form-submit-button"
                    disabled={isEnabled}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}