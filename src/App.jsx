import { useState } from 'react'
import './App.css'
import Login from './paginas/Login'
import Cadastro from './paginas/Cadastro'
import Usuário from './paginas/Usuário'

function App() {
  const [tela, setTela] = useState('login')

  const renderizarTela = () => {
   if(tela === 'login') {
     return <Login/>
   } else if (tela === 'cadastro') {
     return <Cadastro/>
   }else if (tela === 'usuário') {
     return <Usuário/>
   }
  }
  
const trocarTela = (pagina) => {
  setTela(pagina)
}

  return (
    <>
      <h1>bernardo</h1>
      <button onClick={ () => trocarTela('login')}>login</button>
      <button onClick={ () => trocarTela('cadastro')}>cadastro</button>
       <button onClick={ () => trocarTela('usuário')}>usuário</button>

       <hr />
       
      {renderizarTela()}
    </>   
  )
}

export default App
