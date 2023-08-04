import React, { useEffect } from 'react'
import './profile.css'
import imgPerfil from '../../assets/perfil.jpg'
import html5 from '../../assets/html5.png'
import css3 from '../../assets/css3.png'
import javascript from '../../assets/javascript.png'
import react from '../../assets/react.png'
import redux from '../../assets/redux.png'
import docker from '../../assets/docker.png'
import nodeJs from '../../assets/node-js.png'
import mysql from '../../assets/mysql.png'


const Profile = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.hidden-profile')

    const myObserver = new IntersectionObserver( (entries) => {
      entries.forEach((entrie) => {
        console.log(entrie.isIntersecting)
        if(entrie.isIntersecting === true) {
          entrie.target.classList.add('show-profile')
        } else {
          entrie.target.classList.remove('show-profile')
        }
      })
    })

    elements.forEach((element) => myObserver.observe(element));
  }, [])

  return (
    <div className='container-div-profile'>
      {/* <h1 className='h1-profile'>Olá, bem vindo ao meu portifólio!</h1> */}
      <div className='container-profile'>
        <img className='imgPerfil' src={ imgPerfil } alt="Minha imagem de perfil" />
        <div>
          <h2 className='paragrah'>Gabriel Rodrigues</h2>
          <h5 className='paragrah'>Desenvolvedor Full-Stack</h5>
        </div>
      </div>
      <div className='container-div-tec'>
        <h2>Tecnologias</h2>
        <div className='container-tec'>
          <div className='tecnologia hidden-profile'>
            <span>Html5</span>
            <img src={ html5 } alt="" />
          </div>
          <div className='tecnologia hidden-profile'>
            <span>Css3</span>
            <img src={ css3 } alt="" />
          </div>
          <div className='tecnologia hidden-profile'>
            <span>JavaScript</span>
            <img src={ javascript } alt="" />
          </div>
          <div className='tecnologia hidden-profile'>
            <span>React</span>
            <img src={ react } alt="" />
          </div>
          <div className='tecnologia hidden-profile'>
            <span>Redux</span>
            <img src={ redux } alt="" />
          </div>
          <div className='tecnologia hidden-profile'>
            <span>Docker</span>
            <img src={ docker } alt="" />
          </div>
          <div className='tecnologia hidden-profile'>
            <span>NodeJS</span>
            <img src={ nodeJs } alt="" />
          </div>
          <div className='tecnologia hidden-profile'>
            <span>MySql</span>
            <img src={ mysql } alt="" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Profile;