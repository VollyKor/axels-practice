import { shallow } from 'enzyme';

import CreditCartIcon from 'components/CreditCardIcon';
import { Icon } from 'styled/CreditCardIcon';

import visaSrc from 'images/visa-icon.png';
import masterCardSrc from 'images/mastercard-icon.png';
import discoverCardSrc from 'images/discover-icon.png';

it('renders snapshot', () => {
    const wrapper = shallow(<CreditCartIcon value="5" />);

    expect(wrapper).toMatchSnapshot();
});

it('render correct VisaIcon', () => {
    const wrapper = shallow(<CreditCartIcon value="4" />);

    const img = wrapper.find(Icon);

    expect(img.prop('src')).toEqual(visaSrc);
});

it('render correct MasterCardIcon', () => {
    const wrapper = shallow(<CreditCartIcon value="5" />);

    const img = wrapper.find(Icon);

    expect(img.prop('src')).toEqual(masterCardSrc);
});

it('render correct DiscoverCardIcon', () => {
    const wrapper = shallow(<CreditCartIcon value="6" />);

    const img = wrapper.find(Icon);

    expect(img.prop('src')).toEqual(discoverCardSrc);
});
