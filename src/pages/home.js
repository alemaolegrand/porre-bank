import React, { useState, useEffect } from 'react';
import FormLogin from '../components/formlogin';

import './home.css';

const Home = () => {
  const [relogio, setRelogio] = useState(new Date())
  useEffect(()=>{
    setInterval(()=>{
      setRelogio(new Date())
    }, 1000)
  },[])

  const exibirRelogio = () => {
    const lang = 'pt'
    return <div>{relogio.toLocaleDateString(lang)} - {relogio.toLocaleTimeString(lang)}</div>
    
  }
  
  return (
    <section className="section-home">
      <div className="home-div">
        <p className='home-title'>Melhor que muitos bancos... <br />pior que todos eles juntos.</p>
        <div className='login-container'>
          <FormLogin />
          <div>{exibirRelogio()}</div>
        </div>
      </div>
    </section>
  )

};
export default Home