import { shallow } from 'enzyme';

import ProductInfo from 'components/ProductInfo';
import { ProductDescr, ProductName, ProductQn } from 'styled/ProductInfo';

it('renders snapshot', async () => {
    const wrapper = shallow(<ProductInfo />);
    expect(wrapper).toMatchSnapshot();
});

it('render props correctly', async () => {
    const testName = 'bob';
    const testColor = 'red';
    const testQty = 1;

    const wrapper = shallow(
        <ProductInfo name={testName} color={testColor} quantity={testQty} />
    );

    const name = wrapper.find(ProductName).text();
    const color = wrapper.find(ProductDescr).text();
    const qty = wrapper.find(ProductQn).text();

    expect(name).toEqual(testName);
    expect(color).toEqual(testColor);
    expect(qty).toEqual(`Quantity ${testQty}`);
});
it('render default props correctly', async () => {
    const wrapper = shallow(<ProductInfo />);

    const name = wrapper.find(ProductName).text();
    const color = wrapper.find(ProductDescr).text();
    const qty = wrapper.find(ProductQn).text();

    expect(name).toEqual('unknown');
    expect(color).toEqual('default');
    expect(qty).toEqual(`Quantity 1`);
});
