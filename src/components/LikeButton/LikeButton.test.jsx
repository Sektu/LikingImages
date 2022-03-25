import React from 'react';
import { render, cleanup } from '@testing-library/react';
import store from "../../store";
import { Provider } from "react-redux";
import LikeButton from './LikeButton';

afterEach(cleanup);

it("renders", () => {
    const { asFragment } = render(
        <Provider store={store}>
            <LikeButton onClick={() => {}} />
        </Provider>);
    expect(asFragment()).toMatchSnapshot();
});

it("check like button ", () => {
    const { getByRole } = render(
        <Provider store={store}>
            <LikeButton onClick={() => {}} />
        </Provider>);
    const button = getByRole("button");
    expect(button).toHaveClass("button");
    expect(button).toHaveClass("like-button");
    expect(button).toHaveTextContent("Like");
});
