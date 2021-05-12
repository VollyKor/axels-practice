import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import OrderData from 'components/OrderData';

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

it('renders order data', async () => {
    const fakeData = {
        orderId: '13123',
        contactEmail: 'test@email.com',
        deliveryDate: '12 June 2021',
    };

    jest.spyOn(global, 'fetch').mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeData),
        })
    );

    // Используем act асинхронно, чтобы передать успешно завершённые промисы
    await act(async () => {
        render(<OrderData />, container);
    });

    expect(container.querySelector('p').textContent).toBe(fakeData.orderId);
    expect(container.querySelector('a').textContent).toBe(
        fakeData.contactEmail
    );
    expect(container.textContent).toContain(fakeData.deliveryDate);

    global.fetch.mockRestore();
});
