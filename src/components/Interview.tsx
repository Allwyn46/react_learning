import React, { useRef, useState } from 'react'

const Interview = () => {
    const [value, setValue] = useState('')
    if (value) {
        const inputRef = useRef(null)
        const handleSubmit = () => alert(inputRef.current.value)
        return <input type="text" ref={inputRef} defaultValue="" />
    }

    return (
        <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default Interview
