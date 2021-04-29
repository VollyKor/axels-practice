import ListGroup from "react-bootstrap/ListGroup";
import { LinkContainer } from "react-router-bootstrap";
import { Row, NavLink } from "react-bootstrap";

import PriceCounter from "../PriceCounter/PriceCounter";
import {
  ProductInfo,
  ProductPrice,
  ProductImg,
} from "./OrderSummaryComponents";

export default function OrderSummary() {
  const ItemArray = [1, 2, 3];
  return (
    <>
      <Row className="justify-content-between pt-3 px-3 mt-2 align-items-baseline">
        <h2 className="h5">OrderSummary</h2>
        <LinkContainer to="/">
          <NavLink className="text-muted">
            <u>edit order</u>
          </NavLink>
        </LinkContainer>
      </Row>

      <ListGroup className="list-group-flush">
        {ItemArray.map((el) => {
          return (
            <ListGroup.Item
              key={el}
              className="border-top-3 p-2 pb-0 bg-transparent"
            >
              <Row>
                <ProductImg />
                <ProductInfo />
                <ProductPrice>${131}</ProductPrice>
              </Row>
            </ListGroup.Item>
          );
        })}
        <PriceCounter />
      </ListGroup>
    </>
  );
}
