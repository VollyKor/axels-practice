import { shallow } from 'enzyme';
import * as redux from 'react-redux';

import { OrderSummary } from 'components';

import { products } from '../utils/mockData';

type JestSpy = jest.SpyInstance<
    unknown,
    [
        selector: (state: unknown) => unknown,
        equalityFn?: ((left: unknown, right: unknown) => boolean) | undefined
    ]
>;

describe('OrderSummary test', () => {
    let spyOnUseSelector: JestSpy;
    let spyOnUseDispatch;
    let mockDispatch;

    const initialProducts: never[] = [];

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

    it('renders snapshot correctly with data', async () => {
        await spyOnUseSelector.mockReturnValue(products);

        const wrapper = shallow(<OrderSummary />);
        expect(wrapper).toMatchSnapshot();
    });
});
