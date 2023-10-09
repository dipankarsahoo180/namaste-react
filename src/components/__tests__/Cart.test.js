import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import { act } from 'react-dom/test-utils';
import RestaurantMenu from "../RestaurantCardMenu"
import MOCK_DATA from "../mocks/resMenuMock";
import "@testing-library/jest-dom";
import Header from "../Header";
import Cart from "../Cart";
global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(MOCK_DATA) }));

test('should Load restaurant Menu component', async () => {
    await act(async () => render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
                <RestaurantMenu />
                <Cart />
            </Provider>
        </BrowserRouter>

    ))

    const recommended = screen.getByText(/Recommended/);
    fireEvent.click(recommended);

    const items = screen.getAllByTestId("foodItems");
    expect(items.length).toBe(6);

    const addBtn = screen.getAllByText(/ADD/)[0];
    fireEvent.click(addBtn);
    const cart = screen.getByText("Cart(1)");
    expect(cart).toBeInTheDocument();

    const addBtnAgain = screen.getAllByText(/ADD/)[1];
    fireEvent.click(addBtnAgain);
    const cartUpdated = screen.getByText("Cart(2)");
    expect(cartUpdated).toBeInTheDocument();

    fireEvent.click(cart);
    const item = screen.getByText(/Cart total/);
    expect(item).toBeInTheDocument();

    const removeBtn = screen.getAllByText("REMOVE -")[1];
    fireEvent.click(removeBtn);
    expect(screen.getByText("Cart(1)")).toBeInTheDocument();

    fireEvent.click(screen.getAllByText("REMOVE -")[0]);
    expect(screen.getByText("Cart(0)")).toBeInTheDocument();
})