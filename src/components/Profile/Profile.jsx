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
import React, { useEffect } from 'react'


const Profile = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.hidden')

    const myObserver = new IntersectionObserver( (entries) => {
      entries.forEach((entrie) => {
        console.log(entrie.isIntersecting)
        if(entrie.isIntersecting === true) {
          entrie.target.classList.add('show')
        } else {
          entrie.target.classList.remove('show')
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
          <h4 className='paragrah'>Desenvolvedor Full-Stack em desenvolvimento!</h4>
        </div>
      </div>
      <div className='container-div-tec'>
        <h2>Tecnologias</h2>
        <div className='container-tec'>
          <div className='tecnologia hidden'>
            <span>Html5</span>
            <img src={ html5 } alt="" />
          </div>
          <div className='tecnologia hidden'>
            <span>Css3</span>
            <img src={ css3 } alt="" />
          </div>
          <div className='tecnologia hidden'>
            <span>JavaS cript</span>
            <img src={ javascript } alt="" />
          </div>
          <div className='tecnologia hidden'>
            <span>React</span>
            <img src={ react } alt="" />
          </div>
          <div className='tecnologia hidden'>
            <span>Redux</span>
            <img src={ redux } alt="" />
          </div>
          <div className='tecnologia hidden'>
            <span>Docker</span>
            <img src={ docker } alt="" />
          </div>
          <div className='tecnologia hidden'>
            <span>NodeJS</span>
            <img src={ nodeJs } alt="" />
          </div>
          <div className='tecnologia hidden'>
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