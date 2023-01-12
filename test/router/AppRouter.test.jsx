import { render, screen } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../src/authent"


describe('Pruebas en <AppRouter />', () => { 
    
    test('debe de mostrar el login sino esta auttenticado', () => {
        
        const contextValue = {
            logged: false
        }
        
        render(
                <MemoryRouter initialEntries={['/marvel']}>
                    <AuthContext.Provider value={ contextValue }>
                        
                    </AuthContext.Provider>
                </MemoryRouter>
        )
    })
})