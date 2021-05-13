import ListGroupItem from 'react-bootstrap/ListGroupItem';

import {
    Item,
    Title,
    Price,
    Total,
    TotalPrice,
    Conditions,
} from '../styled/PriceCounter';

const PriceCounter = ({ price = 12.12 }) => (
    <>
        <ListGroupItem className="mb-3 px-0 bg-transparent">
            <Item>
                <Title>Subtotal</Title>
                <Price>${398}</Price>
            </Item>

            <Item>
                <Title>Shipping</Title>
                <Price>{'Free'}</Price>
            </Item>

            <Item>
                <Title>Taxes</Title>
                <Price>{price}</Price>
            </Item>
        </ListGroupItem>

        <Item className="d-flex justify-content-between p-0">
            <Total>Total</Total>
            <TotalPrice className="mb-4">${410.12}</TotalPrice>
        </Item>

        <Conditions />
    </>
);

export default PriceCounter;
