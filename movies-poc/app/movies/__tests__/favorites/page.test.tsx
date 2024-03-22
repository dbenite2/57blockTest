import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Favorites from "@/app/movies/favorites/page";
import {getFavorites} from "@/utils/favorites/util";

jest.mock('@/utils/favorites/util', () => ({
    getFavorites: jest.fn(),
}));

describe('Favorites', () => {
    it('displays favorites when available', () => {
        (getFavorites as jest.Mock).mockReturnValue([
            { id: '1', movie: 'Inception' },
            { id: '2', movie: 'Interstellar' }
        ]);

        render(<Favorites />);

        expect(screen.getByText('Inception')).toBeInTheDocument();
        expect(screen.getByText('Interstellar')).toBeInTheDocument();
    });

    it('shows a message when there are no favorites', () => {
        (getFavorites as jest.Mock).mockReturnValue([]);

        render(<Favorites />);

        expect(screen.getByText('No favorites added yet.')).toBeInTheDocument();
    });
});