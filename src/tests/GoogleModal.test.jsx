import { shallow } from 'enzyme';
import * as redux from 'react-redux';
import { GoogleMap } from '@react-google-maps/api';

import GoodleModal from 'components/GoodleModal';

describe('test suite', () => {
    let spyOnUseSelector;
    let spyOnUseDispatch;
    let mockDispatch;

    const ititialCoords = { lat: 21, lng: 32 };

    beforeEach(() => {
        // Mock useSelector hook
        spyOnUseSelector = jest.spyOn(redux, 'useSelector');
        spyOnUseSelector.mockReturnValue({
            lat: 21,
            lng: 32,
        });

        // Mock useDispatch hook
        spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
        // Mock dispatch function returned from useDispatch
        mockDispatch = jest.fn();
        spyOnUseDispatch.mockReturnValue(mockDispatch);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('should render', () => {
        const wrapper = shallow(<GoodleModal />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders correctly', () => {
        const wrapper = shallow(<GoodleModal />);
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
