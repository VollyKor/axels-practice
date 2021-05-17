import { shallow } from 'enzyme';

import CityInput from 'components/CityInput';
import GoodleModal from 'components/GoodleModal';
import { FindButton } from 'styled/CityInput';

const testValue = 'test value';
const fillForm: TfillForm = async (geo) => {};

it('renders snapshot', () => {
    const wrapper = shallow(
        <CityInput fillForm={fillForm} inputRef value={testValue} />
    );

    expect(wrapper).toMatchSnapshot();
});

it('changes visability of modal', () => {
    const wrapper = shallow(
        <CityInput inputRef fillForm={fillForm} value={testValue} />
    );

    expect(wrapper.find(GoodleModal).prop('show')).toEqual(false);

    wrapper.find(FindButton).simulate('click');
    expect(wrapper.find(GoodleModal).prop('show')).toEqual(true);
});

it('render props values correct', () => {
    const wrapper = shallow(
        <CityInput fillForm={fillForm} inputRef value={testValue} />
    );

    expect(wrapper.find('FormControl').prop('value')).toEqual(testValue);
    expect(wrapper.find('FormControl').prop('value')).not.toEqual('any value');

    wrapper.find(FindButton).simulate('click');
    expect(wrapper.find(GoodleModal).prop('show')).toEqual(true);
});

it('render default props values correct', () => {
    const wrapper = shallow(<CityInput fillForm={fillForm} inputRef />);

    expect(wrapper.find('FormControl').prop('value')).toEqual('');

    wrapper.find(FindButton).simulate('click');
    expect(wrapper.find(GoodleModal).prop('show')).toEqual(true);
});
