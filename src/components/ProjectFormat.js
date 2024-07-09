import React from 'react'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function ProjectFormat(props) {
  return (
    <div>
        <div className='projtgalery'>
            <div className='row'>
                <div className='col-lg-4 col-md-12 first img-fluid'>
                    <h3>{props.title}</h3>
                    <h6>{props.place}</h6>
                </div>
                <div className='col-lg-8 col-md-12 second'>
                    <img src={props.image} className='img-fluid' />
                   
                    <p>{props.text1}</p>
                    <p>{props.text2}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectFormat