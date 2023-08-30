import { fireEvent, render, screen } from "@testing-library/react";
import Home from "../src/routes/Home";
import React from "react";
import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
  it("should render the button", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    // grab the input box & the button
    const searchField = screen.getByLabelText(/Search title/i);
    // check both are present in the screen
    expect(searchField).toBeVisible();
  });
});
