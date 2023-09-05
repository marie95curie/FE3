import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Form from "../Components/Form";

describe('Form testing', ()=>{

    test('Title exists', ()=>{
        render(<Form/>)
        const title = screen.getByText('Ingrese su nombre')
        expect(title).toBeDefined()
    })
    test('Input contain letters', ()=>{
        render(<Form/>)
        const input = screen.getByTestId('name')
        fireEvent.change(input, {target: {value: 'elias'}})
        function hasLetters(str) {
            return /^[a-zA-Z]+$/.test(str)
        }
        expect(hasLetters(input.value)).toBeTruthy()
    })
    test('Input must not contain numbers', ()=>{
        render(<Form/>)
        const input = screen.getByTestId('name')
        fireEvent.change(input, {target: {value: 'elias5'}})
        function hasLetters(str) {
            return /^[a-zA-Z]+$/.test(str)
        }
        expect(hasLetters(input.value)).toBeFalsy()
    })
})