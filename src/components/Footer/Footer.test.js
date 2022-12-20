/* eslint-disable no-undef */
import React from "react";
import { render, screen } from '@testing-library/react';
import MainFooter from './Footer';

test('encontrar el texto Footer, Copyright 2022', () => {
  render(<MainFooter />);
  const linkElement = screen.getByText(/Footer, Copyright 2022/i);
  expect(linkElement).toBeInTheDocument();
});
