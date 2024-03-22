import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import PageSelector from "@/app/components/common/pageSelector";

describe('PageSelector', () => {
    const mockOnPageChange = jest.fn();

    test('renders Previous and Next buttons conditionally', () => {
        const { rerender } = render(<PageSelector page={2} totalPages={3} onPageChange={mockOnPageChange} />);

        // "Previous" button should be rendered since page is not 1
        expect(screen.getByText('Previous')).toBeInTheDocument();

        // "Next" button should be rendered since page is not the last page
        expect(screen.getByText('Next')).toBeInTheDocument();

        // Rerender as first page
        rerender(<PageSelector page={1} totalPages={3} onPageChange={mockOnPageChange} />);

        // "Previous" button should not be rendered on the first page
        expect(screen.queryByText('Previous')).not.toBeInTheDocument();

        // Rerender as last page
        rerender(<PageSelector page={3} totalPages={3} onPageChange={mockOnPageChange} />);

        // "Next" button should not be rendered on the last page
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