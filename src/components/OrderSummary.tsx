import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, NavLink, ListGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { PriceCounter } from 'components';
import { ProductInfo, ProductPrice, ProductImg } from '../styled/OrderSummary';

import { GET_PRODUCTS } from '../redux/ducks/products';

export default function OrderSummary() {
    const [quantity] = useState(1);
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products);

    useEffect(() => {
        dispatch(GET_PRODUCTS());
    }, [dispatch]);

    return (
        <>
            <Row className="justify-content-between pt-3 px-3 mt-2 align-items-baseline">
                <h2 className="h6">OrderSummary</h2>
                <LinkContainer to="/">
                    <NavLink className="text-muted">
                        <small>
                            <u>edit order</u>
                        </small>
                    </NavLink>
                </LinkContainer>
            </Row>

            <ListGroup className="list-group-flush">
                {products &&
                    products.map((el) => {
                        return (
                            <ListGroup.Item
                                key={el.id}
                                className="border-top-3 p-2 pb-0 bg-transparent"
                            >
                                <Row>
                                    <ProductImg img={el.img} />
                                    <ProductInfo
                                        name={el.name}
                                        color={el.color}
                                        quantity={quantity}
                                    />
                                    <ProductPrice>
                                        ${parseInt(el.price) * quantity}
                                    </ProductPrice>
                                </Row>
                            </ListGroup.Item>
                        );
                    })}
                <PriceCounter price={10} />
            </ListGroup>
        </>
    );
}
