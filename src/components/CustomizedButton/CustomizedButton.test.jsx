import React from 'react';
import { render, cleanup } from '@testing-library/react';
import store from "../../store";
import { Provider } from "react-redux";
import CustomizedButton from './CustomizedButton';

afterEach(cleanup);

it("renders", () => {
    const className = "klasunia";
    const ariaLabel = "do-do-like";
    const name = "nazwa";

    const { asFragment } = render(
        <Provider store={store}>
            <CustomizedButton className={className} ariaLabel={ariaLabel} name={name} />
        </Provider>);
    expect(asFragment()).toMatchSnapshot();
});

it("check customized button ", () => {
    const className = "klasunia";
    const ariaLabel = "do-do-like";
    const name = "nazwa";

    const { getByRole } = render(
        <Provider store={store}>
            <CustomizedButton className={className} ariaLabel={ariaLabel} name={name} />
        </Provider>);
    const button = getByRole("button");
    expect(button).toHaveClass(className);
    expect(button).toHaveAttribute('aria-label', ariaLabel);
    expect(button).toHaveTextContent(name);
});
