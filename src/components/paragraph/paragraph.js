import React from 'react'

import './paragraph.css'

const Paragraph = (props) => {
    return (
        <p
            className='paragraph'
            style={{ color: props.color, textTransform: 'uppercase' }}>
            {props.content}
        </p>
    )
}

Paragraph.defaultProps = { 
    content: 'Texto colorido e em maiúsculo',
    color: '#92b'
}

export default Paragraph