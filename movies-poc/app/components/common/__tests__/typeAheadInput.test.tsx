import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import {act} from 'react-dom/test-utils';

import TypeaheadInput from "@/app/components/common/typeAheadInput";

fetchMock.enableMocks();
describe('TypeaheadInput', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    test('fetches suggestions and displays them', async () => {
        const mockSuggestions = [
            { id: '1', movie: 'Inception' },
            { id: '2', movie: 'Interstellar' },
        ];

        fetchMock.mockResponseOnce(JSON.stringify({ data: mockSuggestions }));

        render(<TypeaheadInput />);

        await userEvent.type(screen.getByPlaceholderText('Search movies...'), 'In');

        const suggestionElements = await screen.findAllByText((content, node) => {
            return node?.textContent === "Interstellar" && node?.tagName.toLowerCase() === 'a';
        });

        expect(suggestionElements.length).toBe(1);
        expect(suggestionElements[0]).toBeInTheDocument();
        expect(suggestionElements[0]).toHaveAttribute('href', '/movies/items/2');
    });

    test('hides suggestions when clicking outside', async () => {
        render(<TypeaheadInput />);

        fireEvent.mouseDown(document);
        await act(async() => {
            await waitFor(() => expect(screen.queryByText('Inception')).not.toBeInTheDocument());
        })

    });
});