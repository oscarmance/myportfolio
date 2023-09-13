import oscar from '../images/oscar.png';
import git from '../images/github.png';
import Footer from "./Footer";
import linkedin from '../images/linkedin.svg';
import email_icon from '../images/email-icon.png';

function App() {
  return (
    <div id="wrapper">
      
      {/* Home */}
      <section>
        <div class="home-container">
          <div class="flex-column">
            <div class='name-box'>
              <h1>Oscar Mancera</h1>
              <h2>Software engineer</h2>
            </div>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id dapibus mauris, in tincidunt nibh. Phasellus semper nunc non mauris auctor luctus.</p>
            <div class="flex-row">
              <a href='https://github.com/oscarmance'>
                <img src={git} alt="git logo" height={"70;"}/>
              </a>
              <a href='https://www.linkedin.com/in/oscar-a-mancera-ramirez'>
                <img src={linkedin} alt='linkedIn logo' height={"70;"}/>
              </a>
              <a href=''> 
                <img src={email_icon} alt='email icon' height={"70;"} />
              </a>
            </div>
          </div>

          <div>
            <img class="oscar" src={oscar} alt='profile picture' height={"100vh;"}/>
          </div>

        </div>
      </section>


      <div>
        
        <div className='projects-box'>
          <h2>Projects:</h2>
          <ul>
            <li><a href="https://oscarmance.github.io/KeeperApp/">Keeper App</a></li>
          </ul>
        </div>
        <div className='technologies-box'>
          <h2>Technologies:</h2>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>Javascript
              <ul>
                <li>React</li>
                <li>NodeJS</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </li>
          </ul>
        </div>
        
      </div>

      <Footer/>
    </div>
  );
}

export default App;
