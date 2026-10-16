import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import ReviewRequestedHelps from "./ReviewRequestedHelps";



vi.mock("../features/request-help/ReviewRequestedHelpsTable",()=>({
    default: ()=> <div data-testid="review-requested-helps-table" />
}));

vi.mock("../ui/index.js", ()=>({
    Heading: ({children,as: Tag = "h1"}) =><Tag>{children}</Tag>
}));

const setup = ()=> render(<ReviewRequestedHelps />);


describe("ReviewRequestedHelps",()=>{
    it("should render the page heading",()=>{
        setup();

        expect(
            screen.getByRole("heading",{name:"Review Requested Helps"}),
        ).toBeInTheDocument();
    });

    it("should render the heading as the h1 level",()=>{
        setup();

        expect(
            screen.getByRole("heading", { name: "Review Requested Helps", level: 1 }),
        ).toBeInTheDocument();
    });

    it("should render the Review Requested Helps Table",()=>{
        setup();

        expect(
            screen.getByTestId("review-requested-helps-table"),
        ).toBeInTheDocument();
    });
});
