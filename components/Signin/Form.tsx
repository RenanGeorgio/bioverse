"use client";

import { useEffect, useState, FormEvent } from 'react';
import Content from './Content';
import './Form.module.css';

interface FormProps {
    onSubmit: (name: string, email: string, admin: boolean) => void;
}

export default function Form({ onSubmit }: FormProps) {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [admin, setAdmin] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e?.preventDefault();
        onSubmit(name, email);
    };

    return (
        <div className="modal-form">
            <form onSubmit={handleSubmit}>
                <div className="form-content">
                    <Content userName={name} userEmail={email} />
                </div>
                <button
                    type="submit"
                    className="form-submit-button"
                    disabled={disabled}
                >
                    Submit
                </button>
            </form>
        </div>
    );
}