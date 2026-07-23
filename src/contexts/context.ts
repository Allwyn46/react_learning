import { createContext, useContext } from 'react'
import type { User } from '../pages/Home'

export const DashboardContext = createContext<User | undefined>(undefined)

export function useUserContext() {
    const context = useContext(DashboardContext)

    if (!context) {
        throw new Error('Missing Dashboard Context')
    }

    return context
}
