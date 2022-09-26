import './Projects.css';

import example from './example.png'
import site from './meusite.png'
import instagram from './instagram.png'
import food from './food.png'
import food2 from './food2.png'
import forca from './forca.png'
import AnimatedPage from '../../components/AnimatedPage';

const Projects = () => {
  return (
    <AnimatedPage>
    <div>
      <div>
          <h1>Meus projetos</h1>
          <p>Aqui nesta página você encontra meus projetos<br/> e clicando nos cards você pode visitá-los.</p>
      </div>
      <ul class="cards">
  <li>
    <a href="" class="card">
      <img className='img-card' src={example} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">                   
          <div class="card__header-text">
            <h3 class="card__title">Mini-Blog</h3>
          </div>
        </div>
        <p class="card__description">
          Criado utilizando a tecnologia React e o banco de dados Firebase do google.<br/>
          Clique no card para saber mais.
        </p>
      </div>
    </a>      
  </li>
  <li>
    <a href="" class="card">
      <img className='img-card' src={instagram} class="card__image" alt="" />
      <div class="card__overlay">        
        <div class="card__header">                
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Clone do Instagram</h3>
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img className='img-card' src={food} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">                     
          <img class="card__thumb" src="https://i.imgur.com/7D7I6dI.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Site restaurante</h3>        
          </div>
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img className='img-card' src={food2} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">               
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Outro site de restaurante</h3>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>
  <li>
    <a href="" class="card">
      <img className='img-card' src={forca} class="card__image" alt="" />
      <div class="card__overlay">
        <div class="card__header">              
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Jogo da forca</h3>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li>  
  <li>
    <a href="" class="card">
      <img className='img-card' src={site} class="meusite" alt="" />
      <div class="card__overlay">
        <div class="card__header">            
          <img class="card__thumb" src="https://i.imgur.com/sjLMNDM.png" alt="" />
          <div class="card__header-text">
            <h3 class="card__title">Meu site</h3>
          </div>          
        </div>
        <p class="card__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, blanditiis?</p>
      </div>
    </a>
  </li> 
</ul>
  </div>
  </AnimatedPage>
  )
}

export default Projects;