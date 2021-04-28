import ListGroupItem from "react-bootstrap/ListGroupItem";

export default function PriceCounter() {
  return (
    <>
      <ListGroupItem className="p-3">
        <div className="d-flex justify-content-between">
          <p>Subtotal</p>
          <p>${398}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Shipping</p>
          <p>{"Free"}</p>
        </div>
        <div className="d-flex justify-content-between">
          <p>Taxes</p>
          <p> ${12.12}</p>
        </div>
      </ListGroupItem>
      <div className="d-flex justify-content-between p-3">
        <h5>Total</h5>
        <span>${410.12}</span>
      </div>

      <p className="mt-auto p-3">
        All puraches are subject to our <a href="/">Terms and Conditions</a>
      </p>
    </>
  );
}
