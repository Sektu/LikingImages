import React from 'react';
import { render, cleanup } from '@testing-library/react';
import store from "../../store";
import { Provider } from "react-redux";
import DislikeButton from './DislikeButton';

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(
        <Provider store={store}>
            <DislikeButton onClick={() => {}} />
        </Provider>);
    expect(asFragment()).toMatchSnapshot();
});

it("check dislike button ", () => {
    const { getByRole } = render(
        <Provider store={store}>
            <DislikeButton onClick={() => {}} />
        </Provider>);
    const button = getByRole("button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("dislike-button");
    expect(button).toHaveTextContent("Dislike");
});
