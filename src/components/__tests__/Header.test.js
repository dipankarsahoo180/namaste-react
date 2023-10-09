import { render, screen,fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import UserContext from "../../utils/UserContext";
import "@testing-library/jest-dom"; //toBeInTheDocument

test('should render Header Component with login/logout button', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                    <Header></Header>
            </Provider>
        </BrowserRouter>

    )

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
})

test('should render Header Component with cart items (0)', () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>

    )

    const Cart = screen.getByText(/Cart/); //regex
    expect(Cart).toBeInTheDocument();
})

test("Login should be changes to logout on button click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>

    )

    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    expect(logoutButton).toBeInTheDocument();
})

test("Logout should be changes to Login on button click", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>

    )

    const loginButton = screen.getByRole("button",{name:"Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name:"Logout"});
    fireEvent.click(loginButton);
    const loginButtonAgain = screen.getByRole("button",{name:"Login"});
    expect(loginButtonAgain).toBeInTheDocument();
})


test("renders the component with the user name and email", () => {
    const mockUser = "Dipankar";
    const mockSetUser = jest.fn();
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <UserContext.Provider value={{ loggedInUser: mockUser, setUserName: mockSetUser }}>
                    <Header></Header>
                </UserContext.Provider>
            </Provider>
        </BrowserRouter>

    )

    // Assert
    expect(screen.getByText(/Dipankar/)).toBeInTheDocument();
});