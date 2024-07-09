import React from 'react'
import './Home.css'

function Homeanimated(props) {
    const textOverlayStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'white',
        fontSize: '24px',
        textAlign: 'center',
      };
  return (
    <div className='imgb' style={{ position: 'relative', display: 'inline-block' }}>
        <img src={props.image} />
        <div style={textOverlayStyle}>
          <p id='imgbt1' className='animated-text'>{props.head}</p>
          <p id='imgbt2' className='animated-text'>{props.head2}</p>
        </div>
      </div>
  )
}

export default Homeanimated