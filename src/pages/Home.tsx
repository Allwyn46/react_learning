import { useState } from 'react'
import Dashboard from '../components/Dashboard'
import { User } from 'lucide-react'
import { DashboardContext } from '../contexts/context'

export interface User {
    isSubscribed: boolean
    name: string
}

const Home = () => {
    const [user] = useState<User>({
        isSubscribed: true,
        name: 'Kiba',
    })
    return (
        <div>
            <DashboardContext.Provider value={user}>
                <Dashboard />
            </DashboardContext.Provider>
        </div>
    )
}

export default Home
