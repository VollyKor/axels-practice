import styled from "styled-components";

export const Item = styled.div`
  display: flex;
  justify-content: space-between;

  font-size: 0.8rem;

  color: #757575;
`;

export const Title = styled.p`
  margin-bottom: 3px;
`;

export const Price = styled(Title)``;

export const Total = styled(Item)`
  color: #5a1094;
  font-weight: 700;
`;

export const TotalPrice = styled(Total)``;

const CinditionText = styled.p`
  position: absolute;
  bottom: 0;

  text-align: center;
  font-size: 0.6rem;

  color: #757575;
`;
const ConditionLink = styled.a`
  font-size: 0.65rem;
  color: #757575;
`;

export function Conditions() {
  return (
    <CinditionText className="ml-2">
      All puraches are subject to our{" "}
      <ConditionLink href="/" target="_blanc">
        Terms and Conditions
      </ConditionLink>
    </CinditionText>
  );
}
