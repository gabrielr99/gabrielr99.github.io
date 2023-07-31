import React from 'react';
import Cards from './Cards';
import './projetos.css'
// import Cards from './Cards';

const Projetos = () => {
  return (
    <div>
      <h1 className="h1-sections" id="projetos">Projetos</h1>
      <div className='container-projetos'>
        <Cards />
      </div>
      <div className='construção'>
        <p>
          Em construção!<br></br>
          Ultima atualização: 31/07/2023
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Projetos;