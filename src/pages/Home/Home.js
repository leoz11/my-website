import AnimatedPage from '../../components/AnimatedPage';
import './Home.css'

import logo from './logo.jpg';

const Home = () => {
  return (
    
  <div>
    <div className='home'>
      <AnimatedPage>
      <img src={logo} alt="" />
      <div className='container'>
        <div className='caixa'>
          <p className='title'>Olá! Bem-vindo ao meu site!</p>
        </div>
      </div>
      <div>
        <p>Eu me chamo Leonardo, tenho 17 anos e sou um desenvolvedor full-stack!<br />
           Aqui no meu site você pode encontrar informações sobre mim e alguns dos meus projetos.
        </p>
      </div>
      </AnimatedPage>
    </div>
    
    <div className='content'>
      <div>
        <h2>Conhecimentos</h2>
        <p>
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt='html'/>
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt='css'/>
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt='javascript'/>
          <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="node" />
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt='react'/>
          <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootstrap" />

        </p>
        <button>Projetos</button>
      </div>
    </div>
  </div>
  
  );
};

export default Home;