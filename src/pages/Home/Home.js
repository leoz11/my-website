import AnimatedPage from '../../components/AnimatedPage';
import './Home.css'

import react from './images/reactt.png';

const Home = () => {
  return (
  <div>
    <div className='home'>
      <AnimatedPage>
        <img src={react} alt="react" />
      <div className='container'>
        <div className='caixa'>
          <p>Olá! Bem-vindo ao meu site!</p>
        </div>
      </div>
      <div className='social'>
        <p>Eu me chamo Leonardo, tenho 17 anos<br /> e sou um front-end developer!<br /><br />
           Aqui no meu site você pode encontrar informações<br /> sobre mim e alguns dos meus projetos.<br/>
           <ul>
              <a href="https://www.youtube.com/channel/UCaHLG1KGomJI72z7UIJdaww"><li className='youtube'><i class="fa-brands fa-youtube"></i></li></a>
              <a href="https://github.com/leoz11"><li className='github'><i class="fa-brands fa-github"></i></li></a>
              <a href="https://twitter.com/leozera1_"><li className='twitter'><i class="fa-brands fa-twitter"></i></li></a>
           </ul>
        </p>    
      </div>
      <div>  
      </div>
      </AnimatedPage>
    </div>
    <div>
      <footer className='footer'>
        <p>&copy; 2022 Leonardo Oliveira - Todos os direitos reservados.</p>
      </footer>
    </div>
  </div>
  );
};

export default Home;
