import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Spinner from "@/app/components/ui/spinner";

describe('Spinner', () => {
    test('renders successfully', () => {
        render(<Spinner />);
        const spinnerElement = screen.getByTestId('spinner');
        expect(spinnerElement).toBeInTheDocument();
    });
});