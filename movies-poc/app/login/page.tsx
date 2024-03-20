'use client'

import {useState, useEffect} from "react";
import { useRouter } from 'next/navigation';
import type {NextPage} from "next";

import InputField from "@/app/ui/InputField";

const MIN_PASSWORD_LENGTH = 6;

const LoginPage: NextPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors,setErrors] = useState<{email?: string; password?: string}>({});
    const router = useRouter();

    useEffect(() => {
        // checks if the user is already logged in
        const user = localStorage.getItem('user');
        if(user) {
            router.push('/');
        }
    }, [router]);

    const validateForm = () => {
        const errors: {email?: string; password?: string} = {};
        let isValid = true;
        if(!email || !/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email format';
            isValid = false;
        }

        if(!password || password.length < MIN_PASSWORD_LENGTH) {
            errors.password = `Password must be at least ${MIN_PASSWORD_LENGTH} characters long`;
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            localStorage.setItem('user', JSON.stringify({email}));
            router.push('/');
        }
    };

    return (
        <>
            <section>
                <form id="login" onSubmit={handleSubmit}>
                    <InputField
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        errorMessage={errors.email}
                    />
                    <InputField
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        errorMessage={errors.password}
                    />
                    <button type="submit">Login</button>
                </form>
            </section>
        </>
    );
}

export default LoginPage;