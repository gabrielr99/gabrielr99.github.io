import React from 'react';
import Header from './components/Header/Header';
import Contato from './components/Contato/Contato'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import Projetos from './components/Projetos/Projetos'
import SobreMIm from './components/SobreMim/SobreMIm'
import './App.css'
// import SobreMIm from './components/SobreMim/SobreMIm'

function App() {
  return (
    <main>
      <Header />
      <section>
        <Profile />
      </section>
      <section>
        <SobreMIm />
      </section>
      <section>
        <Projetos />
      </section>
      <section>
        <Contato />
      </section>
      <Footer />
    </main>
  )
}

export default App
