import React from 'react'

import './button.css'

const showButtonLabel = (e) => {
    alert(`A label desse botão é ${e.target.innerHTML}`)
}

// Ao monitor: usei innerHTML, mas há uma forma de apresentar a label com props?

const Button = (props) => {
    return (
        <button
            className='btn'
            onClick={showButtonLabel}>
            {props.label}
        </button>
    )
}

Button.defaultProps = {
    label: 'Clique aqui!'
}

export default Button