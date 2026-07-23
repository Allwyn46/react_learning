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
    const [errors, setErrors] = useState<string | null>(null)

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true)
            try {
                const response = await fetch(`${BASE_URL}/posts`)
                const post = (await response.json()) as Post[]
                setPosts(post)
                setIsLoading(false)
            } catch (error) {
                setErrors('Failed to fetch posts')
                setIsLoading(false)
            }
        }

        fetchPosts()
    }, [])

    if (isLoading) {
        return <Skeleton />
        // return <div>Loading...</div>
    }

    return (
        <div>
            <h1>Data Fetching</h1>
            {errors && <p className="text-red-500">{errors}</p>}
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
