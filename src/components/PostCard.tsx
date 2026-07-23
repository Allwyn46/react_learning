import { createContext, useContext, type PropsWithChildren } from 'react'

type PostCardContextProps = {
    post: Post
}

const PostCardContext = createContext<PostCardContextProps | undefined>(
    undefined
)

function usePostCardContext() {
    const context = useContext(PostCardContext)
    if (!context) {
        throw new Error('UsePostCardContext must be used within the PostCard')
    }
    return context
}

type Post = {
    id: number
    title: string
    content: string
    user: {
        id: number
        name: string
    }
}

type PostCardProps = PropsWithChildren & {
    post: Post
}

export default function PostCard({ children, post }: PostCardProps) {
    return (
        <PostCardContext.Provider value={{ post }}>
            <div className="flex w-75 flex-col gap-2 rounded-md bg-neutral-800 p-2">
                {children}
            </div>
        </PostCardContext.Provider>
    )
}

PostCard.Title = function PostCardTitle() {
    const { post } = usePostCardContext()
    return <h2 className="text-lg font-semibold text-white">{post.title}</h2>
}

PostCard.Content = function PostCardContent() {
    const { post } = usePostCardContext()
    return <p className="text-gray-50">{post.content}</p>
}

PostCard.User = function PostCardUser() {
    const { post } = usePostCardContext()
    return <p className="text-sm text-neutral-400">{post.user.name}</p>
}

PostCard.Buttons = function PostCardButtons() {
    // const { post } = usePostCardContext()
    return (
        <div className="flex flex-row gap-2">
            <button>Read More</button>
            <button>Comments</button>
        </div>
    )
}
