import React from 'react';
import { Link } from 'react-router-dom';

//header and footer
import Navbar from '../section/navbar';
import Footer from '../section/footer';

// import ad from './assets/icon/ad.gif';
import bg from './assets/icon/bg.png';

import ssc from './assets/img/ssc.png';
import aai from './assets/img/aai.png';
import isro from './assets/img/isro.png';
import upsc from './assets/img/upsc.png';
import rrb from './assets/img/rrb.png';
import esic from './assets/img/esic.png';
import epfo from './assets/img/epfo.png';
import dda from './assets/img/dda.png';


const imgcss = {
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
  height: "200px"
}

const Card = ({ imgSrc, avatarSrc, title }) => {
  return (

    <Link to={`/Show/${title}`} className="custom-link">
      
      <div className='card data '>
        <div className='card-body text-center'>
          <img className='rounded-circle' src={avatarSrc} alt='Avatar' />
          <h5 className='card-title'>{title}</h5>
        </div>
      </div>

    </Link>
  );
};

const Home = () => {
  const cardData = [
    {
      avatarSrc: rrb,
      title: 'RRB',
      subtitle: 'Famous Actor',
    },
    {
      avatarSrc: ssc,
      title: 'SSC',
      subtitle: 'Famous Actor',
    },
    {
      avatarSrc: dda,
      title: 'DDA',
    },
    {
      avatarSrc: epfo,
      title: 'EPFO',
    },
    {
      avatarSrc: esic,
      title: 'ESIC',
    },
    {
      avatarSrc: aai,
      title: 'AAI',
    },
    {
      avatarSrc: isro,
      title: 'ISRO',
    },
    {
      avatarSrc: upsc,
      title: 'UPSC',
    },

  ];

  return (
    <div className='container-fluid'>
      <Navbar />
      <div className='row'>

        <div className='banner '>
        <h2 >One hub for all your previous years questions. </h2>  
          <div className='left'>
            
            <br /><br/>

            <h4>
              No sign in required
            </h4>

            <h4 className='typing-demo'>
              Absolutely free!
            </h4>

          </div>

          <div className='right'>
            <img src={bg} alt='bg' style={imgcss} />
          </div>
        </div>

        <div className='col-md-3 text-center mt-4'>
          {/* <img src={ad} className='ad' alt='ad' /> */}ad
        </div>

        <div className='col-md-6 main mt-4'>
          <h3 className='text-center mb-3'> <u>Notice</u></h3>
          <div className='notice'>
          <ul>
          <li>Launching soon </li>
          <li>stay tuned for updates</li>
          </ul>
          
        </div>
        </div>


        <div className='col-md-3 text-center mt-4'>
          {/* <img src={ad} className='ad' alt='ad' /> */}ad
        </div>


      </div>
      <div className='card banner' style={{height:"auto"}}>
      Our platform is an essential resource for those gearing up for competitive government exams. Attempt old papers to expand your knowledge, evaluate yourself and learn about your areas of strength and growth. This useful practice will improve your time-management abilities as well as your comprehension of the exam design.<br/><br/>
      Become familiar with the kinds of questions offered in government exams by starting this self-assessment journey. Maximize your exam preparation by going over previous papers.
        </div>

      <div className='row ram'>
        {cardData.map((card, index) => (
          <div key={index} className='col-lg-3 col-md-4 col-sm-6 ' >
            <Card {...card}/>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
