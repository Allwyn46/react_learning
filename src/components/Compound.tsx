import PostCard from './PostCard'

const Compound = () => {
    return (
        <PostCard
            post={{
                id: 1,
                title: 'Hello World',
                content: 'this is the first post',
                user: {
                    id: 1,
                    name: 'john snow',
                },
            }}
        >
            <PostCard.Title />
        </PostCard>
    )
}

export default Compound
