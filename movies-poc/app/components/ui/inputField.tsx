import React from 'react';

interface InputProps {
    id: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    errorMessage?: string;
    placeholder?: string;
}

const InputField = (props: InputProps) => {
    const {id, type, value, onChange, label, errorMessage, placeholder} = props
    return(
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-white font-semibold">{label}: </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                className="bg-gray-700 text-white py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-green-600 focus:bg-gray-800"
                aria-invalid={errorMessage ? 'true' : 'false'}
                aria-describedby={errorMessage ? `${id}-error` : undefined}
                placeholder={placeholder}
            />
            {errorMessage && (
                <span id={`${id}-error`} className="text-red-500 text-sm">
                    {errorMessage}
                </span>
            )}
        </div>
    )
}

export default InputField;