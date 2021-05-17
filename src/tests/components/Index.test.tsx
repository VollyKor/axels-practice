import { render } from '@testing-library/react';
import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import App from 'components/App';

test('renders learn react link', () => {
    render(
        <MemoryRouter>
            <App />
        </MemoryRouter>
    );
});

it('renders snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
});
