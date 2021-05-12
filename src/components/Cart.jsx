import { Route } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';

import { OrderSummary, OrderForms } from 'components';
import { MinHeightRow, HalfTransparentWrapper } from '../styled/utils/common';

const Cart = () => (
    <Container>
        <Col lg={9} className="mx-auto">
            <MinHeightRow className="mx-auto bg-white shadow rounded">
                <Col lg={7} className="px-4">
                    <Route path="/cart">
                        <OrderForms />
                    </Route>
                </Col>

                <Col lg={5} className="position-relative bg-light rounded">
                    <OrderSummary />
                    <Route path="/cart/success">
                        <HalfTransparentWrapper />
                    </Route>
                </Col>
            </MinHeightRow>
        </Col>
    </Container>
);

export default Cart;
