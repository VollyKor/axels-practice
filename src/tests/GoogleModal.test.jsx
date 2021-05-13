import { shallow } from 'enzyme';
import * as redux from 'react-redux';
import { GoogleMap } from '@react-google-maps/api';
import { cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import GoodleModal from 'components/GoodleModal';

const mockSetState = jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initial) => [initial, mockSetState],
}));

describe('Google map test', () => {
    let spyOnUseSelector;
    let spyOnUseDispatch;
    let mockDispatch;

    const ititialCoords = { lat: 21, lng: 32 };

    beforeEach(() => {
        spyOnUseSelector = jest.spyOn(redux, 'useSelector');
        spyOnUseSelector.mockReturnValue({
            lat: 21,
            lng: 32,
        });

        spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
        mockDispatch = jest.fn();
        spyOnUseDispatch.mockReturnValue(mockDispatch);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        cleanup();
    });

    it('should render', () => {
        const wrapper = shallow(<GoodleModal />, {
            wrappingComponent: MemoryRouter,
        });
        expect(wrapper.exists()).toBe(true);
    });

    it('renders after Loading', async () => {
        const wrapper = shallow(<GoodleModal />, {
            wrappingComponent: MemoryRouter,
        });

        await Promise.resolve();
        expect(wrapper).toMatchSnapshot();
    });

    it('change markers', () => {
        const wrapper = shallow(<GoodleModal />);

        setTimeout(() => {
            wrapper.update();
            const map = wrapper.find(GoogleMap);

            expect(map.prop('center')).toEqual(ititialCoords);
        });
    });
});
