import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Home from "@/app/movies/home/page";
import { useAuth } from '@/contexts/AuthContext';

jest.mock('@/contexts/AuthContext', () => ({
    useAuth: jest.fn(),
}));

jest.mock('@/app/components/common/typeAheadInput', () => () => <div>TypeaheadInputMock</div>);
jest.mock('@/app/components/common/card', () => () => <div>CardMock</div>);
jest.mock('@/app/components/common/pageSelector', () => () => <div>PageSelectorMock</div>);
jest.mock('@/app/components/ui/spinner', () => () => <div>SpinnerMock</div>);

global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve({ data: [{ id: '1', movie: 'Movie Title' }] }),
    })
) as jest.Mock;

describe('Home Page', () => {
    it('shows the loading spinner while fetching movies', async () => {
        (useAuth as jest.Mock).mockReturnValue({ user: { name: 'Test User' } });

        render(<Home />);

        expect(screen.getByText('SpinnerMock')).toBeInTheDocument();

        await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    });

    it('displays movies after fetching', async () => {
        (useAuth as jest.Mock).mockReturnValue({ user: { name: 'Test User' } });

        render(<Home />);

        await waitFor(() => expect(screen.getByText('CardMock')).toBeInTheDocument());
    });
});