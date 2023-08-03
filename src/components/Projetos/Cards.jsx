import React from 'react';
// import trybeWars from '../../assets/trybeWarsHomePage.png'
import './cards.css'

const Cards = ({ name, title, img, deploy, code }) => {
  return (
    <div className='container-card'>
      <img src={ img } alt="imagem da home do proejto" />
      <h3> {name} </h3>
      <span>
        { title }
      </span>
      <div className='buttons-card'>
        {
          deploy && <a className='link-card' href={ deploy } target='blank'>Demo</a>
        }
        <a className='link-card' href={ code } target='blank' >Source</a>
      </div>
    </div>
  );
};

export default Cards;