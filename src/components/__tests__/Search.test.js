import { fireEvent, render, screen } from "@testing-library/react";
import { Body } from "../Body";
import MOCK_DATA from "../mocks/swiggyRestApiMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

//To mock the fetch data, since fetch is present in browser but not in js dom
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

//We should also enclose it inside act using the following syntax
test('should Search Restaurant List and filter restaurant based on Top Rated and Reset the Restaurant List', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>
    ))

    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(9);

    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target: { value: "burger" } });

    const cardsAfterSearch1 = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch1.length).toBe(1);

    fireEvent.change(searchInput, { target: { value: "" } });

    const cardsAfterSearch2 = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch2.length).toBe(9);

    const topRatedButton = screen.getByText("Top Rated");
    fireEvent.click(topRatedButton);
    const cardsAfterSearch3 = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch3.length).toBe(6);

    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);
    const cardsAfterSearch4 = screen.getAllByTestId("resCard");
    expect(cardsAfterSearch4.length).toBe(9);
})