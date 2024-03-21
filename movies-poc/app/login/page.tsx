'use client'

import {useState} from "react";
import { useRouter } from 'next/navigation';
import type {NextPage} from "next";

import InputField from "@/app/components/ui/InputField";

const MIN_PASSWORD_LENGTH = 6;

const LoginPage: NextPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors,setErrors] = useState<{email?: string; password?: string}>({});
    const router = useRouter();


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
        <div className="min-h-screen bg-black flex justify-center items-center">
            <section className="max-w-md w-full bg-[#181818] p-8 rounded">
                <h2 className="text-white text-3xl font-bold mb-6">Sign In</h2>
                <form id="login" onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                    <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Login</button>
                </form>
            </section>
        </div>
    );
}

export default LoginPage;