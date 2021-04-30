import { Form, Col } from "react-bootstrap";

import { FormPhoneDesc, CityInput, SubmitButton } from "../styled/ShippingForm";

export default function ShippingForm() {
  return (
    <>
      <h2 className="ml-4">Shipping Info</h2>
      <Form className="p-4">
        <Form.Label>Recipient</Form.Label>
        <Form.Group controlId="name">
          <Form.Control type="name" placeholder="Full name" />
        </Form.Group>
        <Form.Row className="align-items-center">
          <Col lg={6}>
            <Form.Group controlId="phone">
              <Form.Control type="phone" placeholder="Daytime Phone" />
            </Form.Group>
          </Col>

          <Col lg={4}>
            <FormPhoneDesc className="text-muted">
              For delivery questions only
            </FormPhoneDesc>
          </Col>
        </Form.Row>

        <Form.Label>Address</Form.Label>

        <Form.Group controlId="address">
          <Form.Control type="text" placeholder="Street Address" />
        </Form.Group>

        <Form.Group controlId="gate-code">
          <Form.Control
            type="text"
            placeholder="Apt, Suit, Bldg, Gate Code. (optional)"
          />
        </Form.Group>

        <CityInput />

        <Form.Row>
          <Col lg={7}>
            <Form.Group controlId="country">
              <Form.Control type="text" placeholder="Country" />
            </Form.Group>
          </Col>

          <Col lg={5}>
            <Form.Group controlId="zip">
              <Form.Control type="text" placeholder="ZIP" />
            </Form.Group>
          </Col>
        </Form.Row>
        <SubmitButton type="submit" className="px-4 px-sm-5 py-2">
          Continue
        </SubmitButton>
      </Form>
    </>
  );
}
