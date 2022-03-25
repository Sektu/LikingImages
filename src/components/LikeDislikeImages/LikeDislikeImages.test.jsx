import React from 'react';
import { render, cleanup } from '@testing-library/react';
import LikeDislikeImages from './LikeDislikeImages';
import store from "../../store";
import { Provider } from "react-redux";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Provider store={store}><LikeDislikeImages /></Provider>);
  expect(asFragment()).toMatchSnapshot();
});

it("check like dislike images", () => {
    const { getAllByRole } = render(<Provider store={store}><LikeDislikeImages /></Provider>);

    const headings = getAllByRole("heading");

    headings.forEach((h) => {
      expect(h).toBeInTheDocument();
      expect(h).toBeVisible();
      expect(h).toHaveClass('image-name');
    });

    expect(headings.length).toEqual(3);

    const imgs = getAllByRole("img");

    imgs.forEach((i) => {
      expect(i).toBeInTheDocument();
      expect(i).toBeVisible();
      expect(i).toHaveClass('image');
      expect(i).not.toHaveAttribute('alt', "");
      expect(i).not.toHaveAttribute('src', "");
    });

    expect(imgs.length).toEqual(3);

    const buttons = getAllByRole("button");

    buttons.forEach((b) => {
      expect(b).toBeInTheDocument();
      expect(b).toBeVisible();
      expect(b).toHaveClass('button');
      expect(b).toHaveClass('like-button');
    });

    expect(buttons.length).toEqual(3);
});
