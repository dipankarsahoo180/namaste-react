import { render, screen } from "@testing-library/react";
import RestaurantCard, {withPromtedLabel} from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom"

// Create a mock component for testing
const MockComponent = (props) => (
    <div data-testid="mock-component">
        <RestaurantCard resData={MOCK_DATA}/>
    </div>
);

const WrappedComponent = withPromtedLabel(MockComponent); // Wrap the MockComponent with the HOC

test('should show promoted label', () => {
    render(<WrappedComponent />)

    // Check if the Promoted label is displayed
    const promotedLabel = screen.getByText("Promoted");
    expect(promotedLabel).toBeInTheDocument();

    // Check if the MockComponent content is rendered
    const mockComponent = screen.getByTestId("mock-component");
    expect(mockComponent).toBeInTheDocument();

    //should show restaurant card
    const cafe = screen.getByText("The Rameshwaram Cafe");
    expect(cafe).toBeInTheDocument();
});



