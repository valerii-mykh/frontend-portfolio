import { useParams } from 'react-router-dom';

import BtnGitHub from '../component/btnGitHub/BtnGitHub';
import { projects } from '../helpers/ProjectsList';
import BtnLivePage from 'component/btnLivePage/BtnLivePage';

const Project = ({ gitHubLink, livePage }) => {
  const { id } = useParams();
  const project = projects[id];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img src={project.imgBig} alt={project.title} className="project-details__cover" />

          <div className="project-details__desc">
            <p>{project.skills}</p>
          </div>
          <div className="project-details__block">
            {project.livePage && <BtnLivePage link={project.livePage} />}
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
