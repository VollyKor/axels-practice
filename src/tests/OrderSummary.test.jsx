import { shallow } from 'enzyme';
import * as redux from 'react-redux';

import { OrderSummary } from 'components';

import productsData from './utils/mockData';

describe('OrderSummary test', () => {
    let spyOnUseSelector;
    let spyOnUseDispatch;
    let mockDispatch;

    let initialProducts = null;

    beforeEach(() => {
        spyOnUseSelector = jest.spyOn(redux, 'useSelector');

        spyOnUseSelector.mockReturnValue(initialProducts);

        spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
        mockDispatch = jest.fn();
        spyOnUseDispatch.mockReturnValue(mockDispatch);
    });

    afterEach(() => {
        jest.restoreAllMocks();
    });

    it('render itself', () => {
        const wrapper = shallow(<OrderSummary />);
        expect(wrapper.exists()).toBe(true);
    });

    it('renders correctly with data', async () => {
        await spyOnUseSelector.mockReturnValue(productsData);

        const wrapper = shallow(<OrderSummary />);
        expect(wrapper).toMatchSnapshot();
    });
});
