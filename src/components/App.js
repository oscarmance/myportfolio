import oscar from '../images/oscar.png';
import Footer from "./Footer";

function App() {
  return (
    <div id="wrapper">
      <div  className="content-box">
        <h1>My name is Oscar Mancera</h1>
        <div className='projects-box'>
          <h2>Projects</h2>
        </div>
        <div className='technologies-box'>
          <h2>Technologies</h2>
          <ul>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>Javascript
              <ul>
                <li>React</li>
                <li><a href="https://oscarmance.github.io/KeeperApp/">Keeper App</a></li>
                <li>NodeJS</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </li>
          </ul>
        </div>
        
      </div>

      <div className='profile-background'>
        <img className="oscar" src={oscar} alt="oscar"/>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
