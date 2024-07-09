import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

// images
import logo from '../assets/logo.jpg'
import carosel1 from '../assets/header_1c.jpg';
import carosel2 from '../assets/header_2c.jpg';
import carosel3 from '../assets/header_3c.jpg';
import cardimg1 from '../assets/img_1.jpg';
import cardimg2 from '../assets/img_2.jpg';
import cardimg3 from '../assets/img_3.jpg';
import imgb1 from '../assets/banner_1c.jpg';
import toimg1 from '../assets/img_4.jpg'
import toimg2 from '../assets/img_5.jpg'
import toimg3 from '../assets/img_6.jpg'
import imgb2 from '../assets/banner_2c.jpg'
import toimg4 from '../assets/img_7.jpg'
import toimg5 from '../assets/img_8.jpg'
import toimg6 from '../assets/img_9.jpg'
import imgb3 from '../assets/banner_3c.jpg'
import toimg7 from '../assets/img_10.jpg'
import toimg8 from '../assets/img_11.jpg'
import toimg9 from '../assets/img_12.jpg'
import toimg10 from '../assets/img_13.jpg'
import imgb4 from '../assets/banner_4c.jpg'
import toimg11 from '../assets/img_14.jpg'
import toimg12 from '../assets/img_15.jpg'
import toimg13 from '../assets/img_16.jpg'
import toimg14 from '../assets/img_17.jpg'
// images

// icons
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
// end of icons
import './Home.css'
import Textbox from './Textbox';
import Homeanimated from './Homeanimated.js'
import Navbarrr from '../components/Navbarrr'


function Home() {
  const carouselStyle = {
    height: '600px',
    width: '100%',

    // Adjust the height as needed
  };
  const imageStyle = {
    height: 'auto', width: '100%' // Adjust the height as needed
  };
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
    <div>
      <Navbarrr />


      <Carousel fade style={carouselStyle} className='caro'>
        <Carousel.Item interval={1000}>
          <img src={carosel1} style={imageStyle} className='caslimg' />
          <Carousel.Caption className='captions  slide-up'>
            <h3>AVEPOINT RICHMOND</h3>
            <h4>More livable spaces</h4>
            <button className='carbutton'>View Case Study</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={carosel2} style={imageStyle} className='caslimg' />
          <Carousel.Caption className='captions slide-up'>
            <h3>FRENCH VALLEY</h3>
            <h4>Luxurious Apartment</h4>
            <button className='carbutton'>More About Freya</button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
          <img src={carosel3} style={imageStyle} className='caslimg' />
          <Carousel.Caption className='captions slide-up'>
            <h3>UPPER CHESTERFIELD</h3>
            <h4>Sorption Marking Studio</h4>
            <button className='carbutton'>More About Sorption</button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <div class="homesecond">
        <h4>Freya Inc. is the hub for world's top architects and inventors, ready to turn your imagination into reality</h4>
        <p>All photographs provided for demo purposes only.</p>
      </div>


      <div className='imgcards'>
        <CardGroup className='cdgroup'>
          <Card className='cd'>
            <Card.Img variant="top" src={cardimg1} className='cdimg' />
            <Card.Body className='cdb'>
              <Card.Title className='cdt'>RESIDENTIAL</Card.Title>
              <Card.Text className='cdt1'>From Manitoba to Brooklyn, affordable,comfortable and livable houses for families
                of all shapes and sizes are covered by us. Cras justodio, dapibus, egestas eget quam lorem ipsum.
              </Card.Text>
            </Card.Body>

          </Card>
          <Card className='cd'>
            <Card.Img variant="top" src={cardimg2} />
            <Card.Body className='cdb'>
              <Card.Title className='cdt'>COMMERCIAL</Card.Title>
              <Card.Text className='cdt1'>Wehave also designing interiors for restuarnts,bar or office spaces,.
                Cras mattis consctetur purus sit amet fermentum. Cm sociis natoque penatibus et magnis dolor.{' '}
              </Card.Text>
            </Card.Body>

          </Card>
          <Card className='cd'>
            <Card.Img variant="top" src={cardimg3} className='cdimg' />
            <Card.Body className='cdb'>
              <Card.Title className='cdt'>HOSPITALITY</Card.Title>
              <Card.Text className='cdt1'>You nees your guests to have an unforgetable experience, Freya Inc. is ready to deliver.
                Vivamus sagittis lacus vel augue laoreet rurtrum faucibus dolor auctor. Fusce dapibus.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>


      <Homeanimated image={imgb1} head="Museo" head2="MANITOBA"/>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={toimg1} alt='Image 1' className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <img src={toimg2} alt='Image 2' className='img-fluid' />
          </div>
          <div className='col-md-12'>
            <img src={toimg3} alt='Image 2' className='bigimg' />
          </div>
        </div>
      </div>

      <Homeanimated image={imgb2} head="A Touch of Green" head2="IN BROOKLYN"/>
      
      <Textbox title1="A Brooklyn space becomes greener than ever." matter="With Freya's magical touch, 
      a office space at Brooklyn becomes greener than ever.
          Cras matti consectetur purus st amet fermentum. Donec id elit non mi porta gravida at
          eget metus. Morbi leo risus, consectetur ac, vestibulum at eros. Aenean eu leo quam.
          Pellentesque ornare sem lacinia qua venenatis vestibulum. Aenean lacinia bibendum nulla
          sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna.
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula neget."/>

      <div className='container contr'>
        <div className='row'>
          <div className='col-md-12'>
            <img src={toimg4} alt='Image 2' className='bigimg1' />
          </div>
          <div className='col-md-6'>
            <img src={toimg5} alt='Image 1' className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <img src={toimg6} alt='Image 2' className='img-fluid' />
          </div>
        </div>
      </div>


      <Homeanimated image={imgb3} head="Prestana Remereo" head2="RIO DE JANEIRO"/>
    

      <Textbox title1="Prestana Remereo deserved a new coat of paint" matter="Prestana Remereo wanted renovation, we simply delivered.
          Nullam quis risus eget urna mollis ornare vel leo. Donec sed odio dui. Nullam
          quis risus eget ua mollis ornare vel eu leo. Donec sed odio dui.
          Donec ullamcorper nulla non metus auctor fringilla."/>

      <div className='container contr'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={toimg7} alt='Image 1' className='img-fluid' />
          </div>
          <div className='col-md-6 mb-5'>
            <img src={toimg8} alt='Image 2' className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <img src={toimg9} alt='Image 1' className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <img src={toimg10} alt='Image 2' className='img-fluid' />
          </div>
        </div>
      </div>

      <Homeanimated image={imgb4} head="Exquisite" head2="HAWAII"/>
      

     <Textbox title1="Luxurious lifestyle in the Mansion" matter="No matter the task, Freya Inc. is up for it. Cum sociis natoque
          penatibus et magnis dis parturient bee, nascetur ridiculus mus. Nulla vitae elit libero,
          pharetra. Integer posuere erat ante venenatis posuere velit aliquet.
          Etiam wagner moura porta malesuada magna mollis euismod mondar alu aflak."/>

      <div className='container contr'>
        <div className='row'>
          <div className='col-md-12'>
            <img src={toimg11} alt='Image 2' className='bigimg1' />
          </div>
          <div className='col-md-6'>
            <img src={toimg13} alt='Image 1' className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <img src={toimg14} alt='Image 2' className='img-fluid' />
          </div>
          <div className='col-md-12'>
            <img src={toimg12} alt='Image 2' className='bigimg1' />
          </div>
        </div>
      </div>


    </div>

  );
};

export default Home