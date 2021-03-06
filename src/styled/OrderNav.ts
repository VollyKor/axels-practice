import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

export const NavWrapper = styled.div`
    display: block;
    text-align: center;
    @media ${({ theme }) => theme.deviceSize.medium} {
        display: flex;
    } ;
`;

export const Link = styled(NavLink)`
    display: block;
`;

export const Icon = styled(IoIosArrowForward)`
    transform: rotate(90deg);

    @media ${({ theme }) => theme.deviceSize.medium} {
        transform: rotate(0deg);
    } ;
`;
