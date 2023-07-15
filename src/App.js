import React from 'react';
import img from './kid.png';
import arrow from './arrows.png';
import './App.css';

import { languages, descriptions, guests } from './helper';

function App() {
  const searchParams = new URLSearchParams(window.location.search);
  const langParam = searchParams.get('lang');
  const lang = languages.includes(langParam) ? langParam : 'en';
  const guest = searchParams.get('guest');

  if (!guests[guest]) {
    return null;
  }

  return (
    <div className="App">
      <div className="content">
        <h1>Dear, {guests[guest]}</h1>
        <div className="img-block">
          <img src={img} className="image" alt="logo" />
          <div className='name'>INNA PIPIA</div>
          <div className='arrow-block'>
            <img src={arrow} className='arrow' alt='arrow' />
            <div className="remember">Remember<br/>this kid?</div>
          </div>
        </div>
        <div className="invitation">
          {descriptions[lang]}
          <br/>
          <a href='https://goo.gl/maps/PfciL6nd4GNuqrK1A' target='_blank'>MAPS</a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(App);
