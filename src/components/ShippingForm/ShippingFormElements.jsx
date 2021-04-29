import styled from "styled-components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/button";
import { BiTargetLock } from "react-icons/bi";

export const Wrapper = styled.div`
  position: relative;
`;

export const FormPhoneDesc = styled.p`
  font-size: 14px;
  line-height: 1;
`;

export const FindButton = styled.button`
  position: absolute;
  z-index: 1;
  right: 0;
  top: 4px;
  background-color: transparent;
  border: none;
`;

export function CityInput() {
  return (
    <>
      <Wrapper>
        <Form.Group controlId="city" className="position-relative">
          <Form.Control type="text" placeholder="City" />
        </Form.Group>
        <FindButton type="button">
          <BiTargetLock size="25px" color="#5a1094" />
        </FindButton>
      </Wrapper>
    </>
  );
}

export const SubmitButton = styled(Button)`
  outline: none;
  border: none;
  background-color: #5a1094;
`;
