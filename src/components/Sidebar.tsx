import React, { useContext } from 'react'
import { DashboardContext, useUserContext } from '../contexts/context'

const Sidebar = () => {
    const user = useUserContext()
    return <div>Sidebar</div>
}

export default Sidebar
