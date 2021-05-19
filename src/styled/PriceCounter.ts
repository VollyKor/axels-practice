import styled from 'styled-components';

export const Item = styled.div`
    display: flex;
    justify-content: space-between;

    font-size: 0.8rem;
    color: var(--accent-text-color);
`;

export const Title = styled.p`
    margin-bottom: 3px;
`;

export const Price = styled(Title)``;

export const Total = styled(Item)`
    color: var(--main-text-color);
    font-weight: 700;
`;

export const TotalPrice = styled(Total)``;
