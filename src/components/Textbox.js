import React from 'react'
import './Textbox.css'

function Textbox(props) {
  return (
    <div className='text1'>
        <h3 className='texth'>{props.title1}</h3>
        <p className='textp'>{props.matter}</p>
      </div>
  )
}

export default Textbox