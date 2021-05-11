import ListGroupItem from 'react-bootstrap/ListGroupItem';

import {
    Item,
    Title,
    Price,
    Total,
    TotalPrice,
    Conditions,
} from '../styled/PriceCounter';

export default function PriceCounter() {
    return (
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
                    <Price> ${12.12}</Price>
                </Item>
            </ListGroupItem>

            <Item className="d-flex justify-content-between p-0">
                <Total>Total</Total>
                <TotalPrice>${410.12}</TotalPrice>
            </Item>

            <Conditions />
        </>
    );
}
