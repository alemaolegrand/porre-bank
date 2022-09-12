import { useEffect, useState } from 'react';
import './formlogin.css';

const Form = () => {
  function cadastrarUsuario(e)  {
    e.preventDefault()  
    console.log(`Ussuário ${user} cadastrado com a senha: ${pass}`)
  }
  const [user, setUser] = useState()
  const [pass, setPass] = useState()

  return(
   <>
      <p>Login</p>
      <form onSubmit={cadastrarUsuario} >
        <div className='user-box'>
          <label htmlFor='name'>Usuário</label>
          <input type='text' id='name' placeholder='Nome se usuário' onChange={(e) => setUser(e.target.value)}></input>
        </div>

        <div className='pass-box'>
          <label htmlFor='password'>Senha</label>
          <input type='password' id='password' placeholder='Escolha uma senha' onChange={(e) => setPass(e.target.value)}></input>
        </div>
      </form>
      <div>
        <button className='buttonClass' onClick={cadastrarUsuario}>Cadastrar</button>
      </div>
    
   </>
 )

};

export default Form