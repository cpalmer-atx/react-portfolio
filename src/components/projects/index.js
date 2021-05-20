import icon1 from '../../images/banner-reactjs.png';
import icon2 from '../../images/icon1.png';
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsH2,
  ProjectsP,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
} from './ProjectElements.js';

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={icon1} />
          <ProjectsH2>React Page</ProjectsH2>
          <ProjectsP>This page was built using React styled components, click here to see the code!</ProjectsP>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsIcon src={icon2} />
          <ProjectsH2>Chuckles</ProjectsH2>
          <ProjectsP>A full CRUD application that retrieves Chuck Norris jokes from a 3rd party API or simple database.</ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
}

export default Projects;
