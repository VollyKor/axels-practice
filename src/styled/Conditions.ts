import styled from 'styled-components';

export const ConditionText = styled.p`
    bottom: 0;
    position: initial;
    text-align: center;
    font-size: 0.6rem;

    @media ${({ theme }) => theme?.deviceSize?.conditionTextWidth} {
        position: absolute;
        margin-top: 0.8rem;
    } ;
`;

export const ConditionLink = styled.a`
    font-size: 0.65rem;
    color: var(--text-accent-color);
`;
