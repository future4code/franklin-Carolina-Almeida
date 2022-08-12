import React from 'react';
import { getByLabelText, render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import LoginPage from './index';
import axios from 'axios';

jest.mock('axios')

jest.mock('react-router-dom', () => ({
     __esModule: true, //ES6 module
     useHistory: () => ({
         push: jest.fn()
    }),
})) 

describe("Página de Login", () => {
    test("API de login é chamada com os dados corretos", async () => {
        const {getByLabelText, getByText} = render(<LoginPage />)

        const emailInput = getByLabelText("Email")
        const passwordInput = getByLabelText("Senha")
        const button = getByText(/entrar/i)

        const usuario = {
            email: "franklin@labenu.com",
            senha: "ilovegui"
        }

        axios.post.mockResolvedValue({
            data: {
                token: "qualquercoisa"
            }
        })

        await userEvent.type(emailInput, usuario.email)
        await userEvent.type(passwordInput, usuario.password)

        userEvent.click(button)

        expect(axios.post).toHaveBeenCalledTimes(1)
        expect(axios.post).toHaveBeenCalledWith('https://us-central1-labenu-apis.cloudfunctions.net/labeX/gabarito/login', usuario)
    })
})