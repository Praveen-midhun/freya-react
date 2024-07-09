import React from 'react'
import Navbarrr from '../components/Navbarrr'
import Homeanimated from './Homeanimated'
import './Home.css'
import Textbox from './Textbox'
import Card from './Card'

import pimgb1 from '../assets/about_headerc.jpg'
import pimgb2 from '../assets/about_teamc.jpg'
import pimgb3 from '../assets/about_careersc.jpg'
import pcardimg1 from '../assets/portrait-1.jpg'
import pcardimg2 from '../assets/portrait-2.jpg'
import pcardimg3 from '../assets/portrait-3.jpg'

const Pages = () => {
  return (
    <div>
      <Navbarrr />
      <Homeanimated image={pimgb1} head="Stylish Interior" head2="IS THE SYMBOL OF ELEGANCE" />
      <Textbox title1="With a view to become the most promising architectural and 
        interior design farm out there, Freya Inc. was 
        founded by renowned architect Frays Mayer in 1967." matter="Today, Freya has achieved its 
        initial goal and created a position of its own. Fusce dapibus, tellus ac cursus commodo, ut 
        fermentum massa. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. 
        Nullam id dolor id nibh ultricies vehicula ut id elit." />
      <Homeanimated image={pimgb2} head="Our People" head2="ARE ALWAYS UP FOR THE CHALLENGE" />

      <div className='textbox1'>
        <h2>Our Associates</h2>
        <p>Working hard to get the thing done</p>
      </div>

      <div className='pcardgroup d-flex flex-wrap'>
        <Card image={pcardimg1} title="Shane Cotter" sub="Associate, IT" />
        <Card image={pcardimg2} title="Kathryn Wilson" sub="Associate, Development" />
        <Card image={pcardimg3} title="Thomas Anders" sub="Associate, Architecture" />
      </div>


      <div className='ptables1'>
        <h2>Partners & Staffs</h2>
        <div className="row">
          <div className="col-md-6 col-lg-3">
            <h5>Eduardo Gurrerro</h5>
            <p>Senior Architect</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Cathy Williams</h5>
            <p>Designer</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Michele Kasperwich</h5>
            <p>Designer</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Brandon Tylor</h5>
            <p>Business Development</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Elisa Toyoung</h5>
            <p>Architect</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Jamie Dupis</h5>
            <p>Senior Designer</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Doglous Moor</h5>
            <p>Photographer</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Terry Hagan</h5>
            <p>IT Manager</p>
          </div>

          <div className="col-md-6 col-lg-3">
            <h5>Andrew Simmons</h5>
            <p>Architect</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Tracy Chapman</h5>
            <p>Designer</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Arif Tagore</h5>
            <p>Business Development</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Alex Hails</h5>
            <p>Office Manager</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Ana Kurnikova</h5>
            <p>Designer</p>
          </div>
          <div className="col-md-6 col-lg-3">
            <h5>Santiago Munez</h5>
            <p>Business Development</p>
          </div>
        </div>
      </div>

      <Homeanimated image={pimgb3} head="Recruitments" head2="WE'RE ALWAYS HIRING" />



    </div>
  )
}

export default Pages
