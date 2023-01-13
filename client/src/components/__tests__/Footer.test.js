import React from 'react';
import { render, screen, cleanup } from "@testing-library/react";
import Footer from "../Footer/Footer";

test("Should render Footer component", () => {
  render(<Footer />);
  const FooterElement = screen.getByTestId("footer");
  const currentYear = new Date().getFullYear();

  expect(FooterElement).toBeInTheDocument();
  expect(FooterElement).toHaveTextContent(
    "ATD Sensor diagnostic dashboardSome descriptio here to give the footer a purpose!Copyright © Website link 2023."
  );
  expect(FooterElement).toHaveTextContent(currentYear);
});
