import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Card from "@/app/components/common/card";
import FavoriteButton from "@/app/components/ui/favoriteButton";


jest.mock('next/link', () => {
    // @ts-ignore
    return ({ children }) => children;
});
jest.mock('@/app/components/ui/FavoriteButton', () => {
    return jest.fn(({ isFavorite, onToggle }) => (
        <button onClick={onToggle} data-testid="favorite-button">
            {isFavorite ? 'Unfavorite' : 'Favorite'}
        </button>
    ));
});

describe('Card', () => {
    const mockToggle = jest.fn();
    const movie = {
        id: 1,
        movie: 'Test Movie',
        rating: 5.0,
        image: 'mock/src',
        imdb_url: 'mock/url'
    };
    const path = '/test-path';

    beforeEach(() => {
        jest.clearAllMocks();
        (FavoriteButton as jest.Mock).mockImplementation(({ isFavorite, onToggle }) => (
            <button onClick={onToggle}>{isFavorite ? 'Unfavorite' : 'Favorite'}</button>
        ));
    });

    test('renders correctly with movie title and link', () => {
        render(<Card movie={movie} path={path} favorite={false} toggle={mockToggle} />);

        const linkElement = screen.getByText('Test Movie');
        expect(linkElement).toBeInTheDocument();
    });

    test('renders FavoriteButton with correct favorite state', () => {
        render(<Card movie={movie} path={path} favorite={true} toggle={mockToggle} />);

        expect(screen.getByText('Unfavorite')).toBeInTheDocument();
    });

    test('calls toggle function with correct movie object when FavoriteButton is clicked', () => {
        render(<Card movie={movie} path={path} favorite={false} toggle={mockToggle} />);

        const favoriteButton = screen.getByText('Favorite');
        fireEvent.click(favoriteButton);
        expect(mockToggle).toHaveBeenCalledWith(movie);
    });
});