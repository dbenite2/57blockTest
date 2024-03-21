import {useState, useEffect, useRef} from 'react';
import Link from "next/link";

import {Movie} from "@/app/lib/movies";
import InputField from "@/app/components/ui/InputField";

const DEBOUNCE_DELAY = 300;

const TypeaheadInput = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [suggestions, setSuggestions] = useState<Movie[]>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchSuggestions = async () => {
            if (!inputValue.trim()) {
                setSuggestions([]);
                return;
            }
            setShowSuggestions(true);
            try {
                const res = await fetch(`/movies/api?search=${encodeURIComponent(inputValue)}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch');
                }
                const { data } = await res.json();
                setSuggestions(data);
            } catch (error) {
                console.error(error);
                setSuggestions([]);
            }
        };

        const handler = setTimeout(fetchSuggestions, DEBOUNCE_DELAY);

        return () => clearTimeout(handler);
    }, [inputValue]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(containerRef.current && !containerRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [containerRef]);

    return (
        <div ref={containerRef} className="relative">
            <input
                id="search"
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                className="w-full py-2 px-4 bg-gray-800 text-white rounded"
                placeholder="Search movies..."
            />
            {showSuggestions && suggestions.length > 0 && (
                <ul className="absolute z-10 max-h-60 w-full overflow-y-auto bg-gray-700 text-white py-2 rounded shadow-lg">
                    {suggestions.map((movie) => (
                        <li key={movie.id} className="px-4 py-2 hover:bg-gray-600">
                            <Link href={`/movies/items/${movie.id}`} className="block">
                                    {movie.movie.split(new RegExp(`(${inputValue})`, 'gi')).map((part, index) =>
                                        part.toLowerCase() === inputValue.toLowerCase() ? <strong key={index}>{part}</strong> : part
                                    )}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TypeaheadInput;
