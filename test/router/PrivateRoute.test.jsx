import { render, screen } from "@testing-library/react"
import { PrivateRoute } from "../../src/router/PrivateRoute"
import { AuthContext } from "../../src/authent"
import { MemoryRouter } from "react-router-dom"

describe('Pruebas en el <PrivateRoute />', () => {

    test('debe de mostrar el children si no esta autenticado', () => { 
        
        Storage.prototype.setItem = jest.fn()

        const contextValue = {
            logged: true,
            user: {
                id: 'ABCDE',
                user: 'Dolores'
            }
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoute>
                        <h1>Ruta privada</h1>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>  
        )
        //screen.debug()
        expect(screen.getByText('Ruta privada')).toBeTruthy()
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath", "/search?q=batman")
    })
})