import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// components
import Footer from './Footer';

// styles
import '../styles/about.scss';

class About extends Component {
  render() {
    return (
      <React.Fragment>
        <Link to='/'>
          <div className='header-button-back'>
            <i className='zmdi zmdi-fast-rewind'></i>
            <span>Back 🔙</span>
          </div>
        </Link>
        <div className='about'>
          <h2 className='about-title'>About</h2>
          <h3 className='about-h3'>console.log('Hi! 👋')</h3>
          <code>
            <h4 className='about-h4'>let aboutMe = [</h4>
            <p className='about-text'>
              Exploradora de lo terrenal y lo conocido, apasionada de la comunicación y sus infinitos canales, he
              conseguido grandes logros como la creación de productos editoriales desde cero, que ponen de relieve mi
              meticulosidad, ojo clínico para los detalles, así como gestión de los tiempos. En el ámbito profesional me
              gusta regarlo todo de humor y aprendizaje continuo, además de saber trazar la línea en el mapa que separa
              lo profesional de lo personal. Ahora me embarco hacia el nuevo mundo del desarrollo front-end, para
              navegar por los canales del cero y el uno que valen mucho más que eso, y están cargados de futuro. ¡No le
              tengo miedo a las documentaciones farragosas de un nuevo <i>framework</i> o tecnología!
            </p>
            <h4 className='about-h4'>];</h4>
          </code>

          <code>
            <h4 className='about-h4'>let techStack = [</h4>
            <h5 className='about-h5'>Front_end:</h5>
            <div
              className='about-container-grid
            '
            >
              <img
                src='https://img.shields.io/badge/HTML5-E34F26?style=flat&label&logo=html5&logoColor=white'
                alt='HTML5'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/CSS3-1572B6?style=flat&label&logo=css3&logoColor=white'
                alt='CSS3'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/Sass-CC6699?style=flat&label&logo=sass&logoColor=white'
                alt='Sass'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/Bootstrap-563D7C?style=flat&label&logo=bootstrap&logoColor=white'
                alt='Bootstrap'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/JavaScript-323330?style=flat&label&logo=javascript&logoColor=F7DF1E'
                alt='JavaScript'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/React-20232A?style=flat&label&logo=react&logoColor=61DAFB'
                alt='React'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/Vue.js-35495E?style=flat&label&logo=vue.js&logoColor=4FC08D'
                alt='Vue'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/TypeScript-007ACC?style=style=flat&label&logo=typescript&logoColor=white'
                alt='Typescript'
                className='about-img'
              />
            </div>
          </code>

          <code>
            <h5 className='about-h5'>Back_end:</h5>
            <div
              className='about-container-grid
            '
            >
              <img
                src='https://img.shields.io/badge/Node.js-43853D?style=flat&label&logo=node.js&logoColor=white'
                alt='NodeJS'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/Express.js-404D59?style=flat&label&logo=express&logoColor=white'
                alt='ExpressJS'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/SQLite-07405E?style=flat&label&logo=sqlite&logoColor=white'
                alt='SQLite'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/MySQL-00000F?style=flat&label&logo=mysql&logoColor=white'
                alt='MySQL'
                className='about-img'
              />
            </div>
          </code>

          <code>
            <h5 className='about-h5'>Diseño:</h5>
            <div
              className='about-container-grid
            '
            >
              <img
                src='https://img.shields.io/badge/Photoshop-075584?style=flat&label&logo=adobe-photoshop&logoColor=061e26'
                alt='Photoshop'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/InDesign-E749A0?style=flat&label&logo=adobe-indesign&logoColor=26000f'
                alt='InDesign'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/Illustrator-f57d0c?style=flat&label&logo=adobe-illustrator&logoColor=261300'
                alt='Illustrator'
                className='about-img'
              />
            </div>
            <h5 className='about-h5'>Herramientas:</h5>
            <div
              className='about-container-grid
            '
            >
              <img
                src='https://img.shields.io/badge/-git-F05032.svg?style=flat&label&logo=git&logoColor=white'
                alt='GIT'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/-npm-CC3534.svg?style=flat&label&logo=npm&logoColor=white'
                alt='npm'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/-gulp-cf4647.svg?style=flat&label&logo=gulp&logoColor=white'
                alt='Gulp'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/-Postman-ff6c37.svg?style=flat&label&logo=postman&logoColor=white'
                alt='Postman'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/-VS%20Code-007ACC.svg?style=flat&label&logo=visual-studio-code&logoColor=white'
                alt='VSCode'
                className='about-img'
              />
            </div>
          </code>

          <code>
            <h5 className='about-h5'>Trabajo_remoto:</h5>
            <div
              className='about-container-grid
            '
            >
              <img
                src='https://img.shields.io/badge/Slack-4A154B?style=flat&label&logo=slack&logoColor=white'
                alt='Slack'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/zoom-2D8CFF?style=flat&label&logo=zoom&logoColor=white'
                alt='Zoom'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/Discord-7289DA?style=flat&label&logo=discord&logoColor=white'
                alt='Discord'
                className='about-img'
              />
              <img
                src='https://img.shields.io/badge/Teams-6264A7?style=flat&label&logo=microsoft-teams&logoColor=white'
                alt='Teams'
                className='about-img'
              />
            </div>
            <h4 className='about-h4'>];</h4>
          </code>

          <code>
            <h4 className='about-h4'>💬let contact =</h4>
            <div
              className='about-container-grid
            '
            >
              <a target='_blank' rel='noreferrer' href='https://www.linkedin.com/in/2y2son4/'>
                <img
                  src='https://img.shields.io/badge/Adriana_Del_Teso-0077B5?style=flat&label&logo=linkedin&logoColor=white'
                  alt='Linkedin'
                  className='about-img'
                />
              </a>
              <a target='_blank' rel='noreferrer' href='mailto:adrianadelteso@gmail.com'>
                <img
                  src='https://img.shields.io/badge/-adrianadelteso-c0392b?style=flat&labelColor=c0392b&logo=gmail&logoColor=white'
                  alt='GMail'
                  className='about-img'
                />
              </a>
              <a target='_blank' rel='noreferrer' href='https://www.behance.net/2y2son4'>
                <img
                  src='https://img.shields.io/badge/2y2son4-053eff?style=flat&label&logo=behance&logoColor=white'
                  alt='Behance'
                  className='about-img'
                />
              </a>
              <a target='_blank' rel='noreferrer' href='https://twitter.com/2y2son4'>
                <img
                  src='https://img.shields.io/badge/@2y2son4-1DA1F2?style=flat&label&logo=twitter&logoColor=white'
                  alt='Twitter'
                  className='about-img'
                />
              </a>
            </div>
            <h4 className='about-h4'> ; </h4>
          </code>

          <code>
            <h4 className='about-h4'>🔭 let projects = [</h4>
            <div
              className='grid-container
            '
            >
              <a target='_blank' rel='noreferrer' href='https://github.com/2y2son4/flex-portfolio'>
                <img
                  src='https://github-readme-stats.vercel.app/api/pin/?username=2y2son4&repo=flex-portfolio&theme=dark'
                  alt='Portfolio'
                  className='about-img'
                />
              </a>
              <a target='_blank' rel='noreferrer' href='https://github.com/2y2son4/js-30-days-challenge'>
                <img
                  src='https://github-readme-stats.vercel.app/api/pin/?username=2y2son4&repo=js-30-days-challenge&theme=dark'
                  alt='JavaScript 30 days
              challenge'
                  className='about-img'
                />
              </a>
              <a target='_blank' rel='noreferrer' href='https://github.com/2y2son4/rick-and-morty-characters-browser'>
                <img
                  src='https://github-readme-stats.vercel.app/api/pin/?username=2y2son4&repo=rick-and-morty-characters-browser&theme=dark'
                  alt='Rick & Morty
              Browser'
                  className='about-img'
                />
              </a>
              <a target='_blank' rel='noreferrer' href='https://github.com/2y2son4/changing-background-colors'>
                <img
                  src='https://github-readme-stats.vercel.app/api/pin/?username=2y2son4&repo=changing-background-colors&theme=dark'
                  alt='Changing background
              colors'
                  className='about-img'
                />
              </a>
              <a target='_blank' rel='noreferrer' href='https://github.com/2y2son4/equipo-sexto-sentido'>
                <img
                  src='https://github-readme-stats.vercel.app/api/pin/?username=2y2son4&repo=equipo-sexto-sentido&theme=dark'
                  alt='Sexto
              sentido'
                  className='about-img'
                />
              </a>
              <a target='_blank' rel='noreferrer' href='https://github.com/2y2son4/github-users-organizations-search'>
                <img
                  src='https://github-readme-stats.vercel.app/api/pin/?username=2y2son4&repo=github-users-organizations-search&theme=dark'
                  alt='Users and organization GitHub
              browser'
                  className='about-img'
                />
              </a>
            </div>
            <h4 className='about-h4'> ]; </h4>
          </code>

          <code>
            <h4 className='about-h4'>📈 let statistics =</h4>
            <div
              className='grid-container
            '
            >
              <img
                src='https://github-readme-stats.vercel.app/api?username=2y2son4&theme=dark&show_icons=true&custom_title=2y2son4_y_sus_locas_aventuras'
                alt='2y2son4 GitHub
              Stats'
                className='about-img'
              />
              <img
                src='https://github-readme-stats.vercel.app/api/top-langs/?username=2y2son4&count_private=true&theme=dark&layout=compact'
                alt='2y2son4 most used languages'
                className='about-img'
              />
            </div>
            <h4 className='about-h4'> ;</h4>
          </code>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;
