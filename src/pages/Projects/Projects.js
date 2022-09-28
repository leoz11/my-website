import './Projects.css';

import example from './images/example.png'
import site from './images/meusite.png'
import food from './images/food.png'
import AnimatedPage from '../../components/AnimatedPage';

const Projects = () => {
  return (
    <div>
      <AnimatedPage>
      <div>
          <h1>Meus projetos</h1>
          <p>Aqui nesta página você encontra meus projetos<br/> e clicando nos cards você pode visitá-los.</p>
      </div>
      <div className='gittube'>
        <p>
          Você pode encontrar meus outros projetos<br/> acessando meu <a href='https://github.com/leoz11'>Github</a> ou meu <a href='https://www.youtube.com/channel/UCaHLG1KGomJI72z7UIJdaww'>canal no YouTube</a>!
        </p>
      </div>
      <ul class="cards">
  <li>
    <div className="card">
      <img className='img-card' src={example} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">                   
          <div class="card__header-text">
            <h3 class="card__title">Mini Blog</h3>
          </div>
        </div>
        <p class="card__description">
          Criado utilizando HTML5, CSS3, JavaScript com o framework React e o banco de dados Firebase do google.<br/>
          Clique <a href="https://mini-blog-leo.vercel.app">aqui</a> para saber mais.
        </p>
      </div>
    </div>      
  </li>
  <li>
  <div className="card">
      <img className='img-card' src={food} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <div class="card__header-text">
            <h3 class="card__title">Site restaurante</h3>        
          </div>
        </div>
        <p class="card__description">
          Criado utilizando HTML5, CSS3, Bootstrap e JavaScript.<br/>
          Clique <a href="https://restaurante-site-leo.vercel.app">aqui</a> para saber mais.
        </p>
      </div>
    </div>
  </li>
  <li>
    <div className="card">
      <img className='img-card' src={site} class="meusite" alt="" />
      <div class="card__overlay">
        <div class="card__header">
          <div class="card__header-text">
            <h3 class="card__title">Meu site</h3>
          </div>          
        </div>
        <p class="card__description">Meu site também é um dos meus projetos. Foi criado utilizando o framework React e framer-motion.</p>
      </div>
    </div>
  </li> 
</ul>
    <div>
      <footer className='footer'>
        <p>&copy; 2022 Leonardo Oliveira - Todos os direitos reservados.</p>
      </footer>
    </div>
</AnimatedPage>
  </div>

  )
}

export default Projects;