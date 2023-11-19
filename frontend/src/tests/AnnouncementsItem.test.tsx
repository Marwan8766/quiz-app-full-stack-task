import { render, screen } from "@testing-library/react";
import AnnouncementItem from "../components/Dashboard/AnnouncementItem";
import React from "react";

describe("AnnouncementItem Component", () => {
  test("renders announcement item with provided props", () => {
    const props = {
      image: "path/to/image.jpg",
      name: "John Doe",
      title: "Software Developer",
      message: "Hello, this is a test message.",
    };

    render(<AnnouncementItem {...props} />);

    // Assertions to check if the rendered content matches the provided props
    expect(screen.getByAltText(props.name)).toBeInTheDocument();
    expect(screen.getByText(props.name)).toBeInTheDocument();
    expect(screen.getByText(props.title)).toBeInTheDocument();
    expect(screen.getByText(props.message)).toBeInTheDocument();
  });
});
