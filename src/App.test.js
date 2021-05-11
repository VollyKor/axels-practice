import { render, screen } from '@testing-library/react';
import App from './components/App';

import { MemoryRouter } from 'react-router-dom';

test('renders learn react link', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
});
