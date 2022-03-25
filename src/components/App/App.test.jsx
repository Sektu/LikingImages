import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import store from "../../store";
import { Provider } from "react-redux";

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Provider store={store}><App /></Provider>);
  expect(asFragment()).toMatchSnapshot();
});