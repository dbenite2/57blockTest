import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import PageButton from "@/app/components/ui/pageButton";

describe('PageButton', () => {
    test('renders the button with the provided text', () => {
        const buttonText = "Click Me";
        render(<PageButton onClick={() => {}} text={buttonText} />);

        expect(screen.getByRole('button', { name: buttonText })).toBeInTheDocument();
    });

    test('calls onClick when the button is clicked', () => {
        const mockOnClick = jest.fn();
        const buttonText = "Click Me";
        render(<PageButton onClick={mockOnClick} text={buttonText} />);

        fireEvent.click(screen.getByText(buttonText));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });

    test('applies the disabled style when disabled is true', () => {
        const buttonText = "Disabled Button";
        render(<PageButton onClick={() => {}} disabled={true} text={buttonText} />);

        const button = screen.getByRole('button', { name: buttonText });
        expect(button).toBeDisabled();
        expect(button).toHaveClass('bg-gray-600 text-white cursor-not-allowed');
    });

    test('applies custom className when provided', () => {
        const buttonText = "Custom Style";
        const customClass = "custom-class";
        render(<PageButton onClick={() => {}} text={buttonText} className={customClass} />);

        const button = screen.getByRole('button', { name: buttonText });
        expect(button).toHaveClass(customClass);
    });
});