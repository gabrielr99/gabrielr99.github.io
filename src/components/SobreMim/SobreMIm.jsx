import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import './sobremim.css';


const SobreMIm = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.hidden-sobremim')

    const myObserver = new IntersectionObserver( (entries) => {
      entries.forEach((entrie) => {
        console.log(entrie.isIntersecting)
        if(entrie.isIntersecting === true) {
          entrie.target.classList.add('show-sobremim')
        } else {
          entrie.target.classList.remove('show-sobremim')
        }
      })
    })

    elements.forEach((element) => myObserver.observe(element));
  }, [])

  return (
    <div className='container-div-sobremim'>
      <h1 className='h1-sections' id='sobre-mim'>Sobre Mim</h1>
      <div className='container-paragrafos'>
        <div className='contianuer1 hidden-sobremim'>
          <p className='p-sobre-mim paragrafo1'>Olá, meu nome é Gabriel, estou cursando Desenvolvimento Web FullStack na Trybe. Sou apaixonado por tecnologia, exatas, astrologia e sempre tive muita vontade de empreender, isso me fez tomar alguns caminhos no meu trajeto pós ensino médio!</p>
        </div>
        <div className='container2 hidden-sobremim'>
          <p className='p-sobre-mim paragrafo2'>Comecei fazendo um curso de aprendizagem no SENAI-MG de mecânica de autos e como sempre tive o interesse na área de exatas optei por fazer Engenharia Mecânica para ensino superior. No sexto perído da faculdade tive uma oportunidade de abrir um franquia na área de transporte de cargas, como era um sonho empreender acabei optando por esse caminho e tive a experiência por quase 3 anos.</p>
        </div>
        <div className='container3 hidden-sobremim'>
          <p className='p-sobre-mim paragrafo3'>Como um entusiasta em tecnologia e buscando por algo novo, hoje me encontro na área de desenvolvimento, muito motivado e com uma vontade enorme de aprender cada vez mais e em poder contribuir em alguma oportunidade de trabalho!</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

// SobreMIm.propTypes = {
  
// };

export default SobreMIm;