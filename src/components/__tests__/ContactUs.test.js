import { render, screen, fireEvent } from "@testing-library/react";
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";
import UserContext from "../../utils/UserContext";

// beforeAll(() => {
//     console.log("Before All");
// });

// beforeEach(() => {
//     console.log("Before Each");
// });

// afterAll(() => {
//     console.log("After All");
// });

// afterEach(() => {
//     console.log("After Each");
// });

describe("Test all the functions and inputs", () => {
    test("renders the component with the user name and email", () => {
        // Arrange
        const mockUser = "Dipankar Sahoo";
        const mockSetUser = jest.fn();
        render(
            <UserContext.Provider value={{ loggedInUser: mockUser, setUserName: mockSetUser }}>
                <ContactUs />
            </UserContext.Provider>
        );

        // Assert
        expect(screen.getByText(/Hello!/i)).toBeInTheDocument();
        expect(screen.getByText(mockUser)).toBeInTheDocument();
        expect(screen.getByText(/dipankarsahoo180@gmail.com/i)).toBeInTheDocument();
    });

    test("updates the user name when the input value changes", () => {
        // Arrange
        const mockUser = "Dipankar Sahoo";
        const mockSetUser = jest.fn();
        render(
            <UserContext.Provider value={{ loggedInUser: mockUser, setUserName: mockSetUser }}>
                <ContactUs />
            </UserContext.Provider>
        );

        // Act
        const input = screen.getByDisplayValue(mockUser);
        fireEvent.change(input, { target: { value: "Lizu Sahoo" } });

        // Assert
        expect(mockSetUser).toHaveBeenCalledWith("Lizu Sahoo");
    });

    test("updates the user name when the button is clicked", () => {
        // Arrange
        const mockUser = "Dipankar Sahoo";
        const mockSetUser = jest.fn();
        render(
            <UserContext.Provider value={{ loggedInUser: mockUser, setUserName: mockSetUser }}>
                <ContactUs />
            </UserContext.Provider>
        );

        // Act
        const button = screen.getByText(/Update User Name/i);
        fireEvent.click(button);

        // Assert
        expect(mockSetUser).toHaveBeenCalledWith("Lizu Sahoo");
    });
})

test('should render contact us component', () => {

    render(<ContactUs />);

    //find all the headings in contact
    const heading = screen.getByRole('heading')

    expect(heading).toBeInTheDocument();
});

test('should render button contact us component', () => {

    render(<ContactUs />);

    //find all the button in contact
    const button = screen.getAllByRole('button')

    expect(button.length).toBe(2)
})

it('should render button contact us component', () => {

    render(<ContactUs />);

    //find all the button in contact
    const button = screen.getByText('Update User Name')

    expect(button).toBeInTheDocument();
})


