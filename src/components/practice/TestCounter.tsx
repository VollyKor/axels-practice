import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import { Container, Alert, Button } from 'react-bootstrap';

import './styles.css';

const duration = 300;

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

export default function TestCounter() {
    const [counter, setCounter] = useState(0);
    const [showButton, setShowButton] = useState(true);
    const [showMessage, setShowMessage] = useState(false);

    return (
        <Container>
            <Wrapper>
                {showButton && (
                    <Button onClick={() => setShowMessage(true)} size="lg">
                        Show Message
                    </Button>
                )}
                <CSSTransition
                    in={showMessage}
                    timeout={300}
                    classNames="alert"
                    unmountOnExit
                    onEnter={() => setShowButton(false)}
                    onExited={() => setShowButton(true)}
                >
                    <Alert
                        variant="primary"
                        dismissible
                        onClose={() => setShowMessage(false)}
                    >
                        <Alert.Heading>Animated alert message</Alert.Heading>
                        <p>
                            This alert message is being transitioned in and out
                            of the DOM.
                        </p>
                        <Button onClick={() => setShowMessage(false)}>
                            Close
                        </Button>
                    </Alert>
                </CSSTransition>
            </Wrapper>
            <Wrapper>
                <input
                    value={counter}
                    onChange={(e) => {
                        setCounter(e.target.valueAsNumber);
                    }}
                    type="number"
                />
                <Button onClick={() => setCounter(counter + 1)}>inc</Button>
                <Button onClick={() => setCounter(counter - 1)}>dec</Button>
                <Button>transition</Button>
            </Wrapper>
        </Container>
    );
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 30px;
`;

// const Button = styled.button`
//     display: block;
//     padding: 5px 15px;
//     background-color: grey;
//     color: white;
//     border-radius: 5px;
//     border: none;

//     &:hover {
//         outline: 1px solid black;
//     }
// `;

const Box = styled.div`
    width: 30px;
    height: 30px;
    background-color: green;
`;
