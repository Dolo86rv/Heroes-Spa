import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'

/*const initialState = {
    logged: false
}*/

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'))

    return{
        logged: !!user,
        user: user
    }
}

export const AuthProvider = ({children}) => {
    
    const [state, dispatch] = useReducer(authReducer, {}, init)

    const login = ( user = '' ) => {
        
        const u = {id: 'ABC', user}
        const action = {
            type: types.login,
            payload: {
                id: 'ABC',
                user: user
            }
        }

        localStorage.setItem('u', JSON.stringify(u) )
        dispatch(action)
    }

    const logout = () => {
        localStorage.removeItem('u')
        
        const action = {
            type: types.logout
        }
        dispatch(action)
    }
    
    return (
        <AuthContext.Provider value={{
            ...state,
            login: login,
            logout: logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}
