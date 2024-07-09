import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'

function Blogformat(props) {
  return (
    <div className='blogs'>
                <p>{props.p1}</p>
                <h3>{props.t}</h3>
                <p>{props.p2}</p>
                <p className=' col-lg-12 col-md-12 blogp'>{props.p3}</p>
                <img src={props.image} className='img-fluid col-lg-12 col-md-12'/>
                <p className=' col-lg-12 col-md-12 blogp'>{props.p4}</p>
            </div>
  )
}

export default Blogformat