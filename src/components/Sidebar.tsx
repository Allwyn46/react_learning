import { useUserContext } from '../contexts/context'

const Sidebar = () => {
    const user = useUserContext()
    return (
        <div>
            <h1>{user.name}</h1>
        </div>
    )
}

export default Sidebar
