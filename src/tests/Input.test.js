import { add, divide } from "../components/calculations"

describe("addition", () => {
    test("addera två heltal och returnera summan", () => {
        //Given
        const x = 15;
        const y = 8;

        //When
        const sum = add(x,y)

        //Then
        expect(sum).toBe(23);
    })})


    test("dividera två heltal och returnera närmaste heltal", () => {
        //Given
        const x = 7;
        const y = 4;
    
        //When, Then
        expect(divide(x, y)).toBe(2);
    })
    