import React from 'react'

const Button = ({click, children}) => {
    return (
        <button onClick={click}>
            {children}
        </button>
    )
}

export default Button
