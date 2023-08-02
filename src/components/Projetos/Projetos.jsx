import React from 'react';
import Cards from './Cards';
import projetosData from '../../Utils/projetosData'
import './projetos.css'

const Projetos = () => {
  return (
    <div>
      <h1 className="h1-sections" id="projetos">Projetos</h1>
      <div className='container-projetos'>
        {
          projetosData.map(({ name, title, img, deploy, code }) => <Cards name={name} title={title} img={img} deploy={deploy} code={code} />)
        }
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