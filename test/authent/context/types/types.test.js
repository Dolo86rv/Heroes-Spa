import { types } from "../../../../src/authent/types/types"


describe('Pruebas en el Types', () => { 
    
    test('debe de resgresar estos types', () => { 
        
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout'
        })
    })
})