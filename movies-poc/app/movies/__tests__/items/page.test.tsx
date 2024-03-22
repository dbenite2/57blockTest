import MovieDetailPage from "@/app/movies/items/[id]/page";

import { render, screen, waitFor } from '@testing-library/react';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
    useRouter: () => ({
        back: jest.fn(),
    }),
}));

global.fetch = jest.fn();


fetchMock.enableMocks();

describe('MovieDetailPage', () => {
    it('loads and displays movie data', async () => {
        const mockMovieData = {
            movie: 'Test Movie',
            imdb_url: 'http://example.com',
            rating: '8.5',
        };
        fetchMock.mockResponseOnce(JSON.stringify({ data: mockMovieData }));
        render(<MovieDetailPage params={{ id: '1' }} />);

        await waitFor(() => {
            expect(screen.getByText(mockMovieData.movie)).toBeInTheDocument();
        });
    });
});