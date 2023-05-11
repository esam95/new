import { render, screen, fireEvent } from "@testing-library/react"
import Calculator from "../Calculator";


test("should render with correct calculation", () => {
    //Given
    const x = 3;
    const y = 2;
    

    //When
    render(<Calculator/>);
    const inputElement1 = screen.getByPlaceholderText(/Enter first value/i);
    const inputElement2 = screen.getByPlaceholderText(/Enter second value/i);
    const addButton = screen.getByText('Add');
    const equalsButton = screen.getByText('Equals');
    fireEvent.change(inputElement1, { target: { value: x } });
    fireEvent.change(inputElement2, { target: { value: y } });
    fireEvent.click(addButton);
    fireEvent.click(equalsButton);

    //Then
    expect(screen.getByText('The result is: 5')).toBeInTheDocument();

})