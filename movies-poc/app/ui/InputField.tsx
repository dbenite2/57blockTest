import React from 'react';

interface InputProps {
    id: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    errorMessage?: string;
}

const InputField: React.FC<InputProps> = ({
    id, type, value, onChange, label, errorMessage,
}) => {
    return(
        <div className="mb-4">
            <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}: </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline bg-white"
            />
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
}

export default InputField;