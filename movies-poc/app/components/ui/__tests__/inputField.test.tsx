import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from "@/app/components/ui/inputField";

describe('InputField', () => {
    const mockOnChange = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders input with the correct label', () => {
        render(
            <InputField
                id="test-input"
                type="text"
                value=""
                onChange={mockOnChange}
                label="Test Input"
                placeholder="Type here..."
            />
        );
        expect(screen.getByLabelText(/test input:/i)).toBeInTheDocument();
    });

    test('displays error message when provided', () => {
        const errorMessage = 'Error message';
        render(
            <InputField
                id="test-input"
                type="text"
                value=""
                onChange={mockOnChange}
                label="Test Input"
                errorMessage={errorMessage}
            />
        );
        expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });

    test('calls onChange when the input value changes', () => {
        const initialValue = '';
        const newValue = 'New value';

        render(
            <InputField
                id="test-input"
                type="text"
                value={initialValue}
                onChange={mockOnChange}
                label="Test Input"
            />
        );

        const inputElement = screen.getByLabelText(/test input:/i) as HTMLInputElement;
        fireEvent.change(inputElement, { target: { value: newValue } });

        expect(mockOnChange).toHaveBeenCalledTimes(1);
        expect(mockOnChange).toHaveBeenCalledWith(expect.anything());
    });
});