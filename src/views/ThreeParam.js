import React from 'react'

export default function ThreeParam({word,color,bgc}) {
    return (
        <div>
            <h2 style={{color:color,backgroundColor:bgc}}>The word is: {word}</h2>
        </div>
    )
}
