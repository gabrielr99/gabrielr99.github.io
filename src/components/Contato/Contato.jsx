import React from 'react';
// import PropTypes from 'prop-types';
import './contato.css'

const Contato = () => {
  return (
    <div>
      <h1 className="h1-sections" id='contato'>Contato</h1>
      <div className='container-form'>
        <form className='form' action="">
          <label htmlFor="nome">
            Nome:
            <input type="text" name="nome" id="nome" required />
          </label>
          <label htmlFor="email">
            Email:
            <input type="email" name="email" id="email" required/>
          </label><label htmlFor="tel">
            Telefone:
            <input type="tel" name="tel" id="tel" />
          </label>
          <label htmlFor="assunto">
            Assunto:
            <textarea name="" id="assunto" cols="30" rows="10" required></textarea>
          </label>
          <button type="submit">ENVIAR</button>
        </form>
      </div>
      <hr className='final-hr'/>
    </div>
  );
};

// Contato.propTypes = {
  
// };

export default Contato;