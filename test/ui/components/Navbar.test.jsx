import { fireEvent, render, screen } from "@testing-library/react"
import { MemoryRouter, useNavigate } from "react-router-dom"
import { AuthContext } from "../../../src/authent"
import { Navbar } from "../../../src/ui"

const mockedUseNavigate = jest.fn()

jest.mock('react-router-dom', ()=>({
    ...jest.requireActual('react-router-dom'),
    useNavigate: ()=> mockedUseNavigate
}))

describe('Pruebas en el <Navbar />', () => { 
    
    const contextValue = {
        logged: true,
        user: {
            id: '1a',
            user: 'Alex'
        },
        logout: jest.fn()
    }

    beforeEach(()=> jest.clearAllMocks())
    
    test('debe mostrar el nombre del usuario si esta autenticado', () => { 
                
        render(
            <MemoryRouter>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        //screen.debug()
        const span = screen.getByLabelText('span')
        expect(span.innerHTML).toBe('Alex')

    })

    test('debe mostrar de llamar el logout cuando se hace click en el boton', () => { 
    
        render(
            <MemoryRouter initialEntries={['/marvel']}>
                <AuthContext.Provider value={ contextValue }>
                    <Navbar />
                </AuthContext.Provider>
            </MemoryRouter>
        )
        const btLogout = screen.getByLabelText('btLogout')
        fireEvent.click(btLogout)

        expect(contextValue.logout).toHaveBeenCalled()
        expect(mockedUseNavigate).toHaveBeenCalledWith('/login', {"replace": true})
    })
})        