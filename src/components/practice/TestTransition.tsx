// Animation.js
import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Transition } from 'react-transition-group';

export const AnimateItem = () => {
    const [animate, setAnimate] = useState(false);

    // Animate on click button and revert after 3000ms.
    const doAnimate = useCallback(() => {
        setAnimate(true);
        setTimeout(() => {
            setAnimate(false);
        }, 3000);
    }, []);

    return (
        <div>
            {/* Transition change state with `in` props */}
            <Transition in={animate} timeout={500}>
                {(state) => (
                    // state change: exited -> entering -> entered -> exiting -> exited
                    // @ts-ignore
                    <Animation state={state}>Hello</Animation>
                )}
            </Transition>
            <button onClick={doAnimate}>Animate</button>
        </div>
    );
};

export const Animation = styled.div`
    transition: 0.5s;
    width: 300px;
    height: 200px;
    /* example for move item */
    transform: translateX(
        ${({ state }: any) =>
            state === 'entering' || state === 'entered' ? 400 : 0}px
    );
    /* change color*/
    background: ${({ state }: any) => {
        switch (state) {
            case 'entering':
                return 'red';
            case 'entered':
                return 'blue';
            case 'exiting':
                return 'green';
            case 'exited':
                return 'yellow';
        }
    }};
`;
