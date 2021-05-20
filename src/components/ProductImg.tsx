import Image from 'react-bootstrap/Image';

import { Wrapper } from 'styled/utils/common';

import Img from 'images/image-not-found.jpg';

interface Props {
    img?: string;
}

const ProductImg = ({ img }: Props) => (
    <Wrapper className="wrapper">
        <Image
            src={img ?? Img}
            alt=""
            width="50px"
            height="50px"
            className="p-1"
            rounded
        />
    </Wrapper>
);

export default ProductImg;
