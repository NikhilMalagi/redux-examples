import React from 'react'

const Age = (props) => {
    const {age} = props;

    return (        
        <div className="Age-label">
          your age: <span>{age}</span>
        </div>
    )
}

export default Age;