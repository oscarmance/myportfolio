import oscar from '../images/oscar.png';
import git from '../images/github.png';
import reactIcon from '../images/react icon.png';
import javaIcon from '../images/java icon.png';
import mongoIcon from '../images/mongoDB.png';
import htmlIcon from '../images/html css js.png';
import linkedin from '../images/linkedin.svg';
import email_icon from '../images/email-icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './Projects';


function App() {

  return (
    <div id="wrapper">

      {/* Home */}
      <section id="link1">
        <div class="home-container">
          <div class="flex-column">
            <div class='name-box'>
              <h1>Oscar Mancera</h1>
              <h2>Software engineer</h2>
            </div>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id dapibus mauris, in tincidunt nibh. Phasellus semper nunc non mauris auctor luctus.</p>
            <div class="flex-row">
              <a href='https://github.com/oscarmance'>
                <img src={git} alt="git logo" height={"70;"} />
              </a>
              <a href='https://www.linkedin.com/in/oscar-a-mancera-ramirez'>
                <img src={linkedin} alt='linkedIn logo' height={"70;"} />
              </a>
              <a href=''>
                <img src={email_icon} alt='email icon' height={"70;"} />
              </a>
            </div>
          </div>

          <div>
            <img class="oscar" src={oscar} alt='profile picture' height={"100vh;"} />
          </div>

        </div>
      </section>

      {/* About Me */}
      <section id="link2">
        <div class="about-container">
          <div class="about-column" >
              <h2>About Me</h2>
              <p>Duis massa risus, ultrices ac feugiat sit amet, feugiat vitae orci. Suspendisse elit mi, vestibulum mollis pellentesque vel, euismod sit amet sapien.</p>    
          </div>

          <div class="grid-container">
            <div class="logo-grid">
              <div><img class="icon" src={reactIcon} alt='react icon' ></img></div>
              <div><img class="icon" src={javaIcon} alt='java icon'></img></div>
              
              <div class="mongo-icon"><img class="icon" src={mongoIcon} alt='mongoDB icon'></img></div>
              <div class="html-icon"><img class="icon" src={htmlIcon} alt='html css javaScript'></img></div>
            </div>
          </div>

        </div>
      </section>

      {/* Projects */}
      <section id="link3">
        <Projects />
      </section>

      {/* Footer */}
      <section id="link4">
        <footer>
              <div class="footer-section">
                  <br/>
                  <hr/>
                  <h3>© Oscar Mancera</h3>
                  <div className="links-section">
                      <a href="#link1">Home</a>
                      <a href="#link2">About Me</a>
                      <a href="#link3" >Projects</a>
                      <a href="mailto:oscar-97@live.com">Contact Me</a>
                  </div>
              </div>
          </footer>
      </section>

    </div>
  );
}

export default App;
