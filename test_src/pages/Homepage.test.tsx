import { cleanup, render, screen } from '@testing-library/react'
import { MemoryRouter } from "react-router-dom"
import Homepage from "../../src/pages/Homepage"
import { describe, expect, test, afterEach } from 'vitest'
import '@testing-library/jest-dom'

afterEach(cleanup)

const renderApp = () => {
    render(
        <MemoryRouter>
            <Homepage />
        </MemoryRouter>
    )
}
describe('app test', () => {
    test("app", async () => {
        renderApp()

        const element = await screen.findByText('Leave Management System')
        expect(element).toBeInTheDocument()
    })
})