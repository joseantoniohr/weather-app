import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CityList from './CityList' // SUT 

const cities = [
    { city: "Buenos Aires", country: "Argentina"},
    { city: "Bogotá", country: "Colombia"},
    { city: "Madrid", country: "España"},
    { city: "Ciudad de México", country: "México"},
]

test("CityList renders", async () => {
    // AAA Arrange Act Assert
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    expect(items).toHaveLength(4)
})

test("CityList click on item", async () => {
    // Debemos imular una acción del usuario: click sobre un item
    // Para eso vamos a utilizar una función "mock"
    const fnClickOnItem = jest.fn()

    const { findAllByRole } = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")
    // Simulamos la acción con el fireEvent
    fireEvent.click(items[0])

    // Se debió llamar a la función fnClickOnItem UNA única vez
    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})