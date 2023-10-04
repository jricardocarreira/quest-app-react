import React from 'react'

import './index.css'

const StyledText = (props) => {
    return (
        <p
            className='paragraph'
            style={{ color: props.color, textTransform: 'uppercase' }}>
            {props.content}
        </p>
    )
}

StyledText.defaultProps = { 
    content: 'Texto colorido e em maiúsculo',
    color: '#92b'
}

export default StyledText