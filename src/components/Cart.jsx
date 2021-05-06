import { Route } from 'react-router-dom';
import { Col, Container } from 'react-bootstrap';

import { OrderSummary, OrderForms } from 'components';
import OrderData from './OrderData';
import { MinHeightRow, HalfTransparentWrapper } from '../styled/utils';

export default function Cart() {
    return (
        <Container>
            <Col lg={9} className="mx-auto">
                <MinHeightRow className="mx-auto bg-white shadow rounded">
                    <Col lg={7} className="px-4">
                        <Route path="/cart" exact>
                            <OrderForms />
                        </Route>

                        <Route path="/cart/success" exact>
                            <OrderData />
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
}
