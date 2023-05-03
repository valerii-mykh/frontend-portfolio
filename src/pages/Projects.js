import Project from "../component/project/Project";

import { projects } from "../helpers/ProjectsList";

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map(({ title, img }, index) => {
            return (
              <Project key={title} title={title} img={img} index={index} />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
