import React from 'react';
// import PropTypes from 'prop-types';
import './contato.css'
import whatsApp from '../../assets/whatsapp.png'
import linkedIn from '../../assets/linkedin.png'
import gitHub from '../../assets/github.png'

const Contato = () => {
  return (
    <div className='container-div-contato'>
      <h1 className="h1-sections" id='contato'>Contato</h1>
      <div className='container-contato-span'>
        <span>
          Olá, se você gostou do meu perfil e deseja entrar em contato,<br />você pode clicar em algum dos links de sua<br />preferência e falar diretamente comigo!
        </span>
      </div>
      <div className='container-contato-links'>
        <a className='link-contato' href=" https://wa.me/5531999925346" target="_blank" rel="noopener noreferrer">
          <img className='icon-contato whatsapp' src={whatsApp} alt="" />
        </a>
        <a className='link-contato linkedin' href="https://www.linkedin.com/in/gabrielrd-dev/" target="_blank" rel="noopener noreferrer">
          <img className='icon-contato' src={linkedIn} alt="" />
        </a>
        <a className='link-contato github' href="https://github.com/gabrielr99" target="_blank" rel="noopener noreferrer">
          <img className='icon-contato' src={gitHub} alt="" />
        </a>
      </div>
      <div className='ultimo-container-contato-span'>
        <span>Obrigado pela visita!</span>
      </div>
      <hr className='final-hr'/>
    </div>
  );
};

// Contato.propTypes = {
  
// };

export default Contato;