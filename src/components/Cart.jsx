import { Row, Col, Container } from 'react-bootstrap';

import { OrderSummary, OrderForms } from 'components';

export default function Cart() {
    return (
        <Container>
            <Col lg={9} className="mx-auto ">
                <Row className="mx-auto bg-white shadow rounded">
                    <Col lg={7} className="px-4">
                        <OrderForms />
                    </Col>
                    <Col lg={5} className="position-relative bg-light rounded">
                        <OrderSummary />
                    </Col>
                </Row>
            </Col>
        </Container>
    );
}
