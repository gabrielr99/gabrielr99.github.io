// import React from 'react';
// import PropTypes from 'prop-types';
import './navbar.css'

const Navbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const id = e.target.name
    const top = document.getElementById(id).offsetTop;
    // window.scrollTo(0, top)
    window.scroll({
      top: top - 70,
      behavior: 'smooth'
    })
  }

  

  return (
    <header className="container-navbar" id='inicio'>
      <span>Portifólio - Gabriel Rodrigues</span>
      <nav className='container-nav'>
        <a href="" name='inicio' onClick={ (e) => { handleSubmit(e) } }>Inicio</a>
        <a href="" name='sobre-mim' onClick={ (e) => { handleSubmit(e) } }>Sobre Mim</a>
        <a href="" name='projetos' onClick={ (e) => { handleSubmit(e) } }>Projetos</a>
        <a href="" name='contato' onClick={ (e) => { handleSubmit(e) } }>Contato</a>
      </nav>
    </header>
  );
};

// Navbar.propTypes = {

// };

export default Navbar;