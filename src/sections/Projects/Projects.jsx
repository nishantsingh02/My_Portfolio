import React from 'react'
import Styles from "./ProjectsStyles.module.css"
import Spotify from "../../assets/Spotify.png"
import Doc from "../../assets/Doc.png"
import Gallery from "../../assets/Gallery.png"
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
  <section id="projects" className={Styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={Styles.projectContainer}>
        < ProjectCard 
        src={Spotify}  
        link = {"https://www.linkedin.com/posts/nishant-singh02_webdev-learninginpublic-spotifyclone-ugcPost-7202972437859192832-Y5Rp/"}
        h3 = {'Spotify Clone'}
        p = {"Streaming App"}
        />

        < ProjectCard 
        src={Gallery}  
        link = {"https://www.linkedin.com/posts/nishant-singh02_webdesign-css-codingjourney-activity-7200834506033881089-E5SC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpAIQoBw0X3ge5Xok4zBhARXqz1lTdAN04"}
        h3 = {'Gallery'}
        p = {"CSS project: a stunning gallery!"}
        />

        < ProjectCard 
        src={Doc} 
        link = {"https://www.linkedin.com/posts/nishant-singh02_webdev-learninginpublic-spotifyclone-ugcPost-7202972437859192832-https://www.linkedin.com/posts/nishant-singh02_webdesign-css-codingjourney-activity-7200834506033881089-E5SC?utm_source=share&utm_medium=member_desktop&rcm=ACoAADpAIQoBw0X3ge5Xok4zBhARXqz1lTdAN04/"}
        h3 = {'React Website'}
        p = {"Built with React and React Router"}
        />
        
    </div>
  </section>
  )
}

export default Projects;
