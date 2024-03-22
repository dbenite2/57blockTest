import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import PageSelector from "@/app/components/common/pageSelector";

describe('PageSelector', () => {
    const mockOnPageChange = jest.fn();

    test('renders Previous and Next buttons conditionally', () => {
        const { rerender } = render(<PageSelector page={2} totalPages={3} onPageChange={mockOnPageChange} />);

        expect(screen.getByText('Previous')).toBeInTheDocument();

        expect(screen.getByText('Next')).toBeInTheDocument();

        rerender(<PageSelector page={1} totalPages={3} onPageChange={mockOnPageChange} />);

        expect(screen.queryByText('Previous')).not.toBeInTheDocument();

        rerender(<PageSelector page={3} totalPages={3} onPageChange={mockOnPageChange} />);

        expect(screen.queryByText('Next')).not.toBeInTheDocument();
    });

    test('renders correct number of page buttons', () => {
        render(<PageSelector page={1} totalPages={5} onPageChange={mockOnPageChange} />);

        expect(screen.getAllByRole('button')).toHaveLength(6);
    });

    test('calls onPageChange with correct argument when a page button is clicked', () => {
        render(<PageSelector page={1} totalPages={5} onPageChange={mockOnPageChange} />);

        const button = screen.getByText('3');
        fireEvent.click(button);

        expect(mockOnPageChange).toHaveBeenCalledWith(3);
    });
});