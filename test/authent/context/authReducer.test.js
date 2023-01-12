import { authReducer } from "../../../src/authent"

describe('Pruebas en authReducer', () => { 
    
    const initialState = []

    test('debe de retornar el estado por defecto', () => { 
        
        const newState = authReducer( {logged: false}, {})
        expect(newState).toEqual({logged: false})
    })
    
    test('debe de (login) llamar el login autenticar y establecer el user', () => {
        
        const action = {
            type: '[Auth] Login',
            payload: {
                id: 'ABC',
                user: 'Dolores'
            }
        }

        const { user } = authReducer(initialState, action)
        expect(user).toBe(action.payload)
    })
    
    test('debe de (logout) borrar el name del usuario y logged en false', () => {
        
        const state = {
            logged: true,
            user: { id: 'ABC', user: 'Dolores'}
        }
                
        const action = {
            type: '[Auth] Logout',
        }
        
        const newState = authReducer(state, action)
        expect(newState).toEqual({logged:false})
    })
})