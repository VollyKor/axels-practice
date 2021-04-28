import Form from "react-bootstrap/form";
import Button from "react-bootstrap/Button";

export default function ShippingForm() {
  return (
    <>
      <h2 className="ml-3">Shipping Info</h2>
      <Form className="p-3">
        <Form.Label>Recipient</Form.Label>
        <Form.Group controlId="name">
          <Form.Control type="name" placeholder="Full name" />
        </Form.Group>
        <Form.Group controlId="phone">
          <Form.Control type="phone" placeholder="Daytime Phone" />
          <Form.Text className="text-muted">
            For delivery questions only
          </Form.Text>
        </Form.Group>
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
        <Form.Group controlId="city">
          <Form.Control type="text" placeholder="City" />
        </Form.Group>
        <Form.Group controlId="country">
          <Form.Control type="text" placeholder="Country" />
        </Form.Group>
        <Form.Group controlId="aip">
          <Form.Control type="text" placeholder="ZIP" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Continue
        </Button>
      </Form>
    </>
  );
}

/* 
Form

  Recipient 

  Full NAme
  phone number +mask

  Address
  
  Street
  number

  city
  country(dropdown) index
  

*/
