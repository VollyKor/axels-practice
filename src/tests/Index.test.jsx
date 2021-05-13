import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from '../components/App';

test('renders learn react link', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
});
