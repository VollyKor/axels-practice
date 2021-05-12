import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import PriceCounter from 'components/PriceCounter';

let container = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it('renders with or without a name', () => {
    act(() => {
        render(<PriceCounter />, container);
    });
    expect(container.textContent).toBe('Hey, stranger');

    act(() => {
        render(<PriceCounter name="Jenny" />, container);
    });
    expect(container.textContent).toBe('Hello, Jenny!');

    act(() => {
        render(<PriceCounter name="Margaret" />, container);
    });
    expect(container.textContent).toBe('Hello, Margaret!');
});
