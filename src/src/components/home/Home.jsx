import React from 'react';
import { Link } from 'react-router-dom';

import ad from './assets/icon/ad.gif';

import ssc from './assets/img/ssc.png';
import aai from './assets/img/aai.png';
import isro from './assets/img/isro.png';
import upsc from './assets/img/upsc.png';
import rrb from './assets/img/rrb.png';
import esic from './assets/img/esic.png';
import epfo from './assets/img/epfo.png';
import dda from './assets/img/dda.png';

const Card = ({ imgSrc, avatarSrc, title }) => {
  return (

    <Link to={`/Show/${title}`}>
    <div className='card data'>
      <img className='card-img-top cardImg'  src={imgSrc} alt='Card' />
      <div className='card-body text-center'>
        <img className='rounded-circle' src={avatarSrc} alt='Avatar' />
        <h4 className='card-title'>{title}</h4>
      </div>
    </div>
    </Link>
  );
};

const Home = () => {
  const cardData = [
    {
      imgSrc: rrb,
      avatarSrc: rrb,
      title: 'RRB',
      subtitle: 'Famous Actor',
    },
    {
      imgSrc: ssc,
      avatarSrc: ssc,
      title: 'SSC',
      subtitle: 'Famous Actor',
  },
    {
      imgSrc: dda,
      avatarSrc: dda,
      title: 'DDA',
    },
    {
      imgSrc: epfo,
      avatarSrc: epfo,
      title: 'EPFO',
  },
    {
      imgSrc: esic,
      avatarSrc: esic,
      title: 'ESIC',
   },
    {
      imgSrc: aai,
      avatarSrc: aai,
      title: 'AAI',
   },
    {
      imgSrc: isro,
      avatarSrc: isro,
      title: 'ISRO',
      },
    {
      imgSrc: upsc,
      avatarSrc: upsc,
      title: 'UPSC',
    },

  ];

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-lg-3 text-center'>
          <img src={ad} className='ad' alt='ad' />
        </div>

        <div className='col-lg-6 card main'>
          <h2>One hub for all your previous years question ! <span className="bi bi-exclamation"></span> </h2>
          <br/>
          <p>
            Attempt old papers to expand your knowledge and prepare for various government examinations. Evaluate yourself and learn about your areas of strength and growth. This useful practice will improve your time-management abilities as well as your comprehension of the exam design.
          </p>

          <p>
            Become familiar with the kinds of questions offered in government exams by starting this self-assessment journey. Maximize your exam preparation by going over previous papers.
          </p>
        </div>

        <div className='col-lg-3 text-center'>
          <img src={ad} className='ad' alt='ad' />
        </div>
      </div>

      <div className='row' id='exam'>
        {cardData.map((card, index) => (
          <div key={index} className='col-12 col-sm-6 col-md-4 col-lg-3'>
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
