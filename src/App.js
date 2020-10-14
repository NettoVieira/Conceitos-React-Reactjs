import React from 'react';
import Header from './components/Header';


/***
 * Componente
 * Propriedade
 * Estado
 * ***/

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>homepage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="Projects" >
        <ul>
          <li>Login</li>
          <li>Repository</li>
        </ul>        
      </Header>
    </>
  )
};

export default App;