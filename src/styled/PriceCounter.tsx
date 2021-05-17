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

const CinditionText = styled.p`
    bottom: 0;
    position: initial;
    text-align: center;
    font-size: 0.6rem;

    @media screen and (min-width: 992px) {
        position: absolute;
        margin-top: 0.8rem;
    } ;
`;
const ConditionLink = styled.a`
    font-size: 0.65rem;
    color: var(--text-accent-color);
`;

export function Conditions() {
    return (
        <CinditionText className="ml-2 text-muted">
            All puraches are subject to our{' '}
            <ConditionLink href="/" target="_blanc" className="text-muted">
                Terms and Conditions
            </ConditionLink>
        </CinditionText>
    );
}
