import { Link } from 'react-router-dom'
import AnimatedPage from '../../components/AnimatedPage.jsx'
import './Skills.js'

const Skills = () => {
  return (
    <div>
        <AnimatedPage>
        <h1>Skills</h1>
        <p>
            Aqui você encontra uma lista com os meus conhecimentos.<br/>
        </p>
    <div className='content'>
      <div>
        <p>
          <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt='html'/>
          <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt='css'/>
          <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt='javascript'/>
          <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="node" /><br/>
          <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt='react'/>
          <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white" alt="bootstrap" />
          <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white" alt="git" />
          <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="github" /><br/>
          <img src="https://cdn.discordapp.com/attachments/944823677361475584/1024733214167802008/firebase.png" alt="firebase" />
          <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="mongodb" />
          <img src="https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white" alt="netlify" />
          <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="vercel" />
        </p>
      </div>
    </div>
    <div>
        Você pode encontrar todas essas tecnologias sendo colocadas<br/> em prática aqui no meu site na página de <Link to="projects">projetos</Link>,<br/> no meu <a href="https://github.com/leoz11">Github</a> ou no meu <a href="https://www.youtube.com/channel/UCaHLG1KGomJI72z7UIJdaww">canal do youtube.</a>
    </div>
    <div className='social'>
        <p>
           <ul>
              <a href="https://www.youtube.com/channel/UCaHLG1KGomJI72z7UIJdaww" alt='youtube'><li className='youtube'><i class="fa-brands fa-youtube"></i></li></a>
              <a href="https://github.com/leoz11" alt="github"><li className='github'><i class="fa-brands fa-github"></i></li></a>
              <a href="https://twitter.com/leozera1_" alt="twitter"><li className='twitter'><i class="fa-brands fa-twitter"></i></li></a>
           </ul>
        </p>    
      </div>
      <div>
      <footer className='footer'>
        <p>&copy; 2022 Leonardo Oliveira - Todos os direitos reservados.</p>
      </footer>
      </div>
    </AnimatedPage>
    </div>
  )
}

export default Skills