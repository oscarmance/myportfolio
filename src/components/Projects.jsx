import React from "react";
import project1 from '../images/project1.png';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';
import project5 from '../images/project5.jpg';
import project6 from '../images/project6.jpg';

function Projects(){

    return(
        <div className='project-section'>
          <h2 >Projects</h2>
          <div class="container">
            <div class="row">
                <div class="col-xl-4 col-lg-6 pt-1">
                    <img class="img-fluid" src={project1} alt="project 1"/>
                    <h3>Tindog</h3>
                </div>
                <div class="col-xl-4 col-lg-6 pt-1">
                    <a href="https://oscarmance.github.io/KeeperApp/">
                        <img class="img-fluid" src={project2}  alt="project 2"/>
                        <h3>Keeper App</h3>
                    </a>
                </div>
                <div class="col-xl-4 col-lg-6 pt-1">
                    <img class="img-fluid" src={project3} alt="project 3"/>
                    <h3>Another</h3>
                </div>
                <div class="col-xl-4 col-lg-6 pt-1">
                    <img class="img-fluid" src={project4} alt="project 4"/>
                    <h3>Tindog</h3>
                </div>
                <div class="col-xl-4 col-lg-6 pt-1">
                    <img class="img-fluid" src={project5} alt="project 5"/>
                    <h3>FinancePal</h3>
                </div>
                <div class="col-xl-4 col-lg-6 pt-1">
                    <img class="img-fluid" src={project6} alt="project 6"/>
                    <h3>GymBuddy</h3>
                </div>
            </div>
          </div>
        </div>
    )

    
}

export default Projects;