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
        <p></p>
        <button>Projetos</button>
      </div>
    </div>
  </div>
  
  );
};

export default Home;