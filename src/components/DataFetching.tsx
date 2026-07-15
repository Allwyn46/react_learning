import { useEffect, useState } from 'react'
import { Skeleton } from './ui/skeleton'

const BASE_URL = 'https://jsonplaceholder.typicode.com'

interface Post {
    id: number
    title: string
}

const DataFetching = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            const response = await fetch(`${BASE_URL}/posts`)
            const post = (await response.json()) as Post[]
            setPosts(post)
            setIsLoading(false)
        }

        fetchPosts()
    }, [])
    return (
        <div>
            <h1>Data Fetching</h1>
            {isLoading ? (
                <Skeleton />
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DataFetching
