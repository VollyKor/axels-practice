import ListGroup from "react-bootstrap/ListGroup";
import Img from "../images/image-not-found.jpg";

import PriceCounter from "./PriceCounter";

export default function OrderSummary() {
  const ItemArray = [1, 2, 3];
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2>OrderSummary</h2>
        <a href="/order">edit order</a>
      </div>

      <ListGroup className="list-group-flush">
        {ItemArray.map((el) => {
          return (
            <ListGroup.Item key={el} className="d-flex border-top-3">
              <div className="wrapper">
                <img
                  src={Img}
                  alt=""
                  width="75px"
                  height="75px"
                  // className="d-block mr-1"
                />
              </div>
              <div>
                <h3>{"Boots"}</h3>
                <p>{"black"}</p>
                <p>Quantity {1}</p>
              </div>
              <p className="ml-auto">${235}</p>
            </ListGroup.Item>
          );
        })}
        <PriceCounter />
      </ListGroup>
    </>
  );
}
