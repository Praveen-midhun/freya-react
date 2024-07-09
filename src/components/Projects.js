import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarrr from '../components/Navbarrr'
import Homeanimated from './Homeanimated'
import ProjectFormat from './ProjectFormat'
import './Home.css'

import headimg from '../assets/projects_header.jpg'
import firstptimg from '../assets/firstptimg.jpg'
import secondptimg from '../assets/secondptimg.jpg'
import thirdptimg from '../assets/thirdptimg.jpg'
import fourptimg from '../assets/fourptimg.jpg'
import fiveptimg from '../assets/fiveptimg.jpg'

function Projects() {
    return (
        <div>
            <Navbarrr />
            <Homeanimated image={headimg} head="Projects" head2="WHERE LOVE MADE VISIBLE" />
            <ProjectFormat title="Inspiration: Go green" place="Brooklyn, USA" image={firstptimg} text1="Maecenas sed diam eget risus varius blandit sit amet non magna. 
                        Donec id elit non mi porta gravida at eget metus. Aenean lacinia bibendum nulla sed consectetur." text2="Nam vel orci in lacus aliquet viverra et a justo. Fusce gravida felis eu leo fringilla dapibus.
                        Vivamus molestie dictum aliquet. Nunc nec nisl nulla. Integer gravida quam et sem egestas, 
                        nec dictum enim interdum. Suspendisse volutpat diam urna, et imperdiet lectus pharetra sit amet.
                        Nunc sed ex et neque vulputate dignissim. Nullam a tempus lacus, ac pulvinar mauris. 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras facilisis eget erat a molestie. 
                        Suspendisse sed scelerisque lectus, eget ornare elit. 
                        Donec non lectus non enim fermentum dapibus vel sit amet dolor. Praesent a vestibulum massa."/>


<div className='projtgalery'>
            <div className='row'>
                <div className='col-lg-4 col-md-12 first img-fluid'>
                    <h3>Warmer look of a coffee shop</h3>
                    <h6>Wyoming, USA</h6>
                </div>
                <div className='col-lg-8 col-md-12 second2'>
                    <img src={fourptimg} className='col-lg-6 col-md-12 img-fluid' />
                    <img src={fiveptimg} className='col-lg-6  col-md-12 img-fluid' />
                    <p>In quis porttitor orci, vitae rhoncus nunc. Vivamus tincidunt ac purus
                         at efficitur. Donec sed faucibus sem, nec pharetra ipsum. Pellentesque habitant 
                         morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut sodales 
                         sollicitudin ante ac molestie. Aliquam scelerisque metus in ultricies venenatis. 
                         Duis in nisi felis. Donec a nibh blandit, semper eros hendrerit, 
                        vestibulum ex. Pellentesque tincidunt purus lacus, quis luctus velit auctor quis.</p>
                    
                    
                </div>
            </div>
        </div>



            <ProjectFormat title="Renovation on going" place="Alberta, Canada" image={secondptimg} text1="Proin et neque in diam auctor 
            facilisis a ut risus. Etiam eleifend mi ex. Praesent ac ullamcorper urna, nec placerat arcu. Nunc placerat aliquam congue. 
            Aenean at urna ac ipsum semper luctus. Aenean a sem nibh. Maecenas velit ex, feugiat eget neque non, semper condimentum nisl. 
            Donec convallis venenatis quam sed placerat. " />


            <ProjectFormat title="Living Luxuriously" place="Bloemfontein, South Africa" image={thirdptimg} text1="Suspendisse rutrum lacinia o
            rci, at fermentum dolor. Donec odio sem, pulvinar at ornare a, feugiat et justo. In eget convallis urna. Nulla ac nunc id tellus
             aliquet convallis eu a dui. Donec pellentesque vehicula elit in eleifend. Duis ut faucibus arcu. Curabitur tincidunt risus id 
             luctus tincidunt. Integer ac consectetur magna. Etiam at est et sapien aliquam volutpat. In tempor lacus ut placerat gravida. 
             Fusce ultrices et odio mattis imperdiet. Proin eleifend diam a pharetra consequat. Ut varius efficitur ante vel viverra. 
            Nunc cursus ligula felis, sed lobortis velit ultrices." />
        </div>
    )
}

export default Projects