import { shallow } from 'enzyme';
import Image from 'react-bootstrap/Image';

import ProductImg from 'components/ProductImg';

import Img from 'images/image-not-found.jpg';

it('renders snapshot', async () => {
    const wrapper = shallow(<ProductImg img="" />);
    expect(wrapper).toMatchSnapshot();
});

it('renders src of image correctly', async () => {
    const someSrc = 'http://img.com';

    const wrapper = shallow(<ProductImg img={someSrc} />);

    const imgSrc = wrapper.find(Image).prop('src');

    expect(imgSrc).toEqual(someSrc);
});

it('renders default image correctly', async () => {
    const wrapper = shallow(<ProductImg />);

    const imgSrc = wrapper.find(Image).prop('src');

    expect(imgSrc).toEqual(Img);
});
