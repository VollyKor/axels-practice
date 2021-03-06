import { shallow } from 'enzyme';
import * as redux from 'react-redux';
import { GoogleMap } from '@react-google-maps/api';
import { cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import GoodleModal from 'components/GoodleModal';

const fillForm: TfillForm = async (marker) => {};

const mockSetState = jest.fn();
jest.mock('react', () => ({
    ...jest.requireActual('react'),
    useState: (initial: number) => [initial, mockSetState],
}));

describe('Google map test', () => {
    let spyOnUseSelector;
    let spyOnUseDispatch;
    let mockDispatch;

    const ititialCoords = { lat: 21, lng: 32 };

    beforeEach(() => {
        spyOnUseSelector = jest.spyOn(redux, 'useSelector');
        spyOnUseSelector.mockReturnValue({
            lat: 11,
            lng: 33,
        });

        spyOnUseDispatch = jest.spyOn(redux, 'useDispatch');
        mockDispatch = jest.fn();
        spyOnUseDispatch.mockReturnValue(mockDispatch);
    });

    afterEach(() => {
        jest.restoreAllMocks();
        cleanup();
    });

    it('should render itself', () => {
        const wrapper = shallow(
            <GoodleModal fillForm={fillForm} onHide={() => {}} show />,
            { wrappingComponent: MemoryRouter }
        );
        expect(wrapper.exists()).toBe(true);
    });

    it('renders snapshot after Loading', async () => {
        const wrapper = shallow(
            <GoodleModal fillForm={fillForm} onHide={() => {}} show />,
            {
                wrappingComponent: MemoryRouter,
            }
        );

        await Promise.resolve();
        expect(wrapper).toMatchSnapshot();
    });

    it('change markers', () => {
        const wrapper = shallow(
            <GoodleModal fillForm={fillForm} onHide={() => {}} show />
        );

        setTimeout(() => {
            wrapper.update();
            const map = wrapper.find(GoogleMap);

            expect(map.prop('center')).toEqual(ititialCoords);
        });
    });

    it('closed on click Close', () => {
        let isVisible = true;
        const wrapper = shallow(
            <GoodleModal
                onHide={() => (isVisible = !isVisible)}
                fillForm={fillForm}
                show
            />
        );

        const closeButton = wrapper.find({ variant: 'secondary' });
        expect(closeButton.exists()).toBeTruthy();

        closeButton.simulate('click');
        expect(isVisible).toBeFalsy();

        closeButton.simulate('click');
        expect(isVisible).toBeTruthy();
    });

    it('close on click Submit', () => {
        let isVisible = true;
        const wrapper = shallow(
            <GoodleModal
                onHide={() => (isVisible = !isVisible)}
                fillForm={fillForm}
                show
            />
        );

        const submitButton = wrapper.find({ children: 'Submit' });
        expect(submitButton.exists()).toBeTruthy();

        submitButton.simulate('click');
        expect(isVisible).toBeFalsy();
    });
});
