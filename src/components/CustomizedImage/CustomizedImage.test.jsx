import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CustomizedImage from './CustomizedImage';
import store from "../../store";
import { Provider } from "react-redux";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Provider store={store}><CustomizedImage /></Provider>);
  expect(asFragment()).toMatchSnapshot();
});

it("check image name", () => {
    const name = "batman";
    const src = "https://fwcdn.pl/fpo/63/18/626318/7998475.3.jpg";
    const { getByText } = render(<Provider store={store}><CustomizedImage name={name} src={src} /></Provider>);

    const imageName = getByText("batman");
    expect(imageName).toBeInTheDocument();
    expect(imageName).toBeVisible();
    expect(imageName).toHaveClass('image-name');
    expect(imageName).not.toHaveClass('extra');
});

it("check image", () => {
    const name = "batman";
    const src = "https://fwcdn.pl/fpo/63/18/626318/7998475.3.jpg";
    const { getByAltText } = render(<Provider store={store}><CustomizedImage name={name} src={src} /></Provider>);

    const image = getByAltText("batman");
    expect(image).toBeInTheDocument();
    expect(image).toBeVisible();
    expect(image).toHaveClass('image');
    expect(image).toHaveAttribute('src', src);
    expect(image).toHaveAttribute('alt', name);
});

it("check like/dislike button", () => {
    const name = "batman";
    const src = "https://fwcdn.pl/fpo/63/18/626318/7998475.3.jpg";
    const { getByRole } = render(<Provider store={store}><CustomizedImage name={name} src={src} /></Provider>);

    const button = getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toBeVisible();
    expect(button).toHaveClass('button');
    expect(button).toHaveClass('like-button');
});