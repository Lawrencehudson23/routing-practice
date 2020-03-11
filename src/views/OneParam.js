import React from 'react'

export default function OneParam({word}) {
    return (
        <div>
            {isNaN(+word)?<h2>The word is:{word}</h2> :<h2>The number is:{word}</h2>}
            
        </div>
    )
}
