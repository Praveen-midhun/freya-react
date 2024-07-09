import React from 'react'
import './Card.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Card(props) {
  return (
    <div className='pcards d-flex flex-column align-items-center mb-3'>
        <img src={props.image} className='img-fluid'/>
        <h4>{props.title}</h4>
        <p>{props.sub}</p>

    </div>
  )
}

export default Card