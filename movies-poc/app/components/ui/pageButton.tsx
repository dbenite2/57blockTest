
interface PageButton {
    onClick: () => void;
    disabled?: boolean;
    text: string | number;
    className?: string;
}
const PageButton = ({onClick, disabled, text, className}: PageButton) => {
    const baseStyle = "font-bold py-2 px-4 rounded mx-2 transition duration-300 ease-in-out";
    const enabledStyle = "bg-gray-800 hover:bg-gray-700 text-white";
    const disabledStyle = "bg-gray-600 text-white cursor-not-allowed";
    return (
        <button
            className={`${baseStyle} ${disabled ? disabledStyle : enabledStyle} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default PageButton;
