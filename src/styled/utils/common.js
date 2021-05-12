import styled from 'styled-components';
import Row from 'react-bootstrap/Row';

export const MinHeightRow = styled(Row)`
    min-height: 600px;
    max-width: 700px;
`;

export const HalfTransparentWrapper = styled.div`
    box-sizing: border-box;
    position: absolute;

    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--half-transparent-white-color);
    z-index: 1;
`;

export const Wrapper = styled.div``;
export const Container = styled.div``;
