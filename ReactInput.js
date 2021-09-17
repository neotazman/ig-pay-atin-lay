import React, { useState } from 'react'
import convertToPigLatin from './code.js'

export default function toPigLatin(props) {
    const[data, setData] = useState('')
    
    convertToPigLatin(data)

    return (
        <div>
            
        </div>
    )
}
