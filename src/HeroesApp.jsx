import React from 'react'
import { AuthProvider } from './authent'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    )
}
