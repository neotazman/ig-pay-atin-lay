//import React, { useState } from 'react'
//import convertToPigLatin from '../code.js'

export default function toPigLatin(props) {
    const[data, setData] = useState('')
    let result = ''
    
    const handleInputChange = (e) => {
        setData(e.target.value)
    }

    handleConvert = (e) => {
        e.preventDefault()
        result = convertToPigLatin(data)
    }
    

    return (
        <div>
            <label>Convert to Pig Latin</label>
            <input type="text" placeholder="type words here" value={data} onChange={handleInputChange} />
            <button onClick={handleConvert}>Convert</button>
            <p>{result}</p>
        </div>
    )
}
