import React from 'react';
import trybeWars from '../../assets/trybeWarsHomePage.png'
import './cards.css'

const Cards = () => {
  return (
    <div className='container-card'>
      <img src={ trybeWars } alt="" />
      <h3>TrybeWars</h3>
      <span>
        Projeto feito individualemnte testando conhecimentos de React.
      </span>
      <div className='buttons-card'>
        <a className='link-card' href="https://gabrielr99.github.io/project-starwars-planets-search/" target='blank'>Navegar</a>
        <a className='link-card' href="https://github.com/gabrielr99/project-starwars-planets-search" target='blank' >Code</a>
      </div>
    </div>
  );
};

export default Cards;