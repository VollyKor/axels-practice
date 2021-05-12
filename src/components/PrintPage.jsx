import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import qs from 'query-string';

export default function PrintPage() {
    const { search } = useLocation();
    const orderData = qs.parse(search);

    const { contactEmail = '', deliveryDate = '', orderId = '' } = orderData;

    return (
        <Container className="p-5">
            <Row className="justify-content-center align-items-center">
                <Col lg={6}>
                    <h4 className="mb-4 text-center">
                        Thank you for your order!
                    </h4>
                    <p className="font-weight-bold text-dark mb-2">
                        Order number is: {orderId}
                    </p>
                    <p className="h6 mb-3">
                        <span className="text-dark">{`You will recieve an email confirmation shortly to `}</span>
                        <u>
                            <a type="email" href={`mailto:${contactEmail}`}>
                                {contactEmail}
                            </a>
                        </u>
                    </p>
                    <p className="text-dark mb-0">{`Estimated delivery Day is `}</p>
                    <p className="font-weight-bold text-dark">{deliveryDate}</p>

                    <p className="font-weight-bold text-dark">Other Data</p>
                </Col>
            </Row>
        </Container>
    );
}
