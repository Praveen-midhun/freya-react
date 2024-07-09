import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarrr from '../components/Navbarrr'
import Homeanimated from './Homeanimated'
import Blogformat from './Blogformat';
import './Home.css'

import blog1 from '../assets/blog_header.jpg'
import blog2 from '../assets/blog_01.jpg'
import blog3 from '../assets/blog_02.jpg'
import blog4 from '../assets/blog4.png'
import blog6 from '../assets/blog_05.jpg'


function Blog() {
    return (
        <div>
            <Navbarrr />
            <Homeanimated image={blog1} head="Design Blog" head2="THOUGHTS & MUSINGS" />
            <Blogformat p1="Architecture" t="Inspiration: minsat" p2="George Bellaroza. December 13, 2017" p3="Who's your source of inspiration when it comes to 
                architectural design? Sed posuere consectetur est at lobortis. 
                Maecenas sed diam eget risus varius blandit sit amet non magna. 
                Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. 
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. 
                Aenean lacinia bibendum nulla sed consectetur." image={blog2} p4="Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Morbi leo risus,
                porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.

                <br/>Curabitur blandit tempus porttitor.
                Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna."/>


            <Blogformat p1="Interiors" t="Mid-Century Classics" p2="Shaun Bean. December 9, 2017" p3="Structural 
                beauty of mid century is Nulla vitae elit libero, a pharetra augue. Morbi leo risus, 
                porta ac consectetur ac, vestibulum at eros. Maecenas sed diam eget risus varius blandit 
                sit amet non magna. Donec id elit non mi porta gravida at eget metus. 
                Nullam id dolor id nibh ultricies vehicula ut id elit." image={blog3} />
            
             <Blogformat p1="Interiors" t="Beauty of Abstracts" p2="Alex Hogg. December 1, 2017" p3="Ceramics 
             represent excellence nowadays Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum 
             id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam 
             venenatis vestibulum. " image={blog4}/>


            <Blogformat p1="News" t="Project: Beverly Hills" p2="Mathew Jones. October 22, 2017" p3="Have you heard 
            of the recent Beverly Hills project? Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum 
            nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient 
            montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Donec sed odio dui. Praesent commodo cursus magna, vel 
            scelerisque nisl consectetur et." image={blog6} />                


        </div>
    )
}

export default Blog