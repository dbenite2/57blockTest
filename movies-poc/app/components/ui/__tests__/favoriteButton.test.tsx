import '@testing-library/jest-dom';
import {render, screen, fireEvent} from '@testing-library/react';
import FavoriteButton from "@/app/components/ui/favoriteButton";

describe('FavoriteButton', () => {
    test('displays the filled heart icon when isFavorite is true', () => {
        render(<FavoriteButton isFavorite={true} onToggle={() => {}} />);
        const filledHeartIcon = screen.getByLabelText(/remove from favorites/i);
        expect(filledHeartIcon).toBeInTheDocument();
    });

    test('displays the outline heart icon when isFavorite is false', () => {
        render(<FavoriteButton isFavorite={false} onToggle={() => {}} />);
        const outlineHeartIcon = screen.getByLabelText(/add to favorites/i);
        expect(outlineHeartIcon).toBeInTheDocument();
    });

    test('calls onToggle when clicked', () => {
        const mockOnToggle: jest.Mock = jest.fn();
        render(<FavoriteButton isFavorite={false} onToggle={mockOnToggle} />);
        const button = screen.getByRole('button');
        fireEvent.click(button);
        expect(mockOnToggle).toHaveBeenCalledTimes(1);
    });
});