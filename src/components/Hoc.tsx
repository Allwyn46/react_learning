import React, { useEffect, useState } from 'react'

interface WithLoaderProps {
    Element: React.ComponentType<any>
    Url: string
}

const WithLoader = ({ Element, Url }: WithLoaderProps) => {
    return (props: object) => {
        const [data, setData] = useState('')

        useEffect(() => {
            async function fetchData() {
                const response = await fetch(Url)
                const result = await response.json()
                setData(result)
            }
            fetchData()
        }, [])

        if (!data) {
            return <div>Loading...</div>
        }

        return <Element {...props} data={data} />
    }
}

export default WithLoader
