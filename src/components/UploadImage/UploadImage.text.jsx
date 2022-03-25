import React from 'react';
import { render, cleanup } from '@testing-library/react';
import UploadImage from './UploadImage';
import store from "../../store";
import { Provider } from "react-redux";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Provider store={store}><UploadImage /></Provider>);
  expect(asFragment()).toMatchSnapshot();
});

it("check upload image", () => {
    const { getByRole } = render(<Provider store={store}><UploadImage /></Provider>);

    const uploadImage = getByRole("input");
    expect(uploadImage).toBeInTheDocument();
    expect(uploadImage).toBeVisible();
    expect(uploadImage).toHaveAttribute('type', "file");
    expect(uploadImage).toHaveAttribute('accept', "image/*");
    expect(uploadImage).not.toHaveClass('extra');
    expect(uploadImage).not.toHaveAttribute('type', "radio");
    expect(uploadImage).not.toHaveAttribute('type', "button");
    expect(uploadImage).not.toHaveAttribute('type', "checkbox");
});
