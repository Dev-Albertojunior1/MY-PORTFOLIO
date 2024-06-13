import {
    DiJava,
    DiPhp,
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
  } from "react-icons/di";
  
  import "../styles/components/technologies.sass";
  
  const technologies = [
    { id: "java", name: "Java", icon: <DiJava />,description: <p>Uma biblioteca JavaScript para construir interfaces de usuário.</p>},
    { id: "php", name: "PHP", icon: <DiPhp /> ,description: <p>Uma biblioteca JavaScript para construir interfaces de usuário.</p>},
    { id: "html", name: "HTML5", icon: <DiHtml5 />,description: <p>Uma biblioteca JavaScript para construir interfaces de usuário.</p> },
    { id: "css", name: "CSS3", icon: <DiCss3 />,description: <p>Uma biblioteca JavaScript para construir interfaces de usuário.</p> },
    { id: "js", name: "JavaScript", icon: <DiJsBadge />,description: <p>Uma biblioteca JavaScript para construir interfaces de usuário.</p> },
    { id: "node", name: "Node.js", icon: <DiNodejsSmall />,description: <p>Uma biblioteca JavaScript para construir interfaces de usuário.</p> },
    { id: "mysql", name: "MySQL", icon: <DiMysql />,description: <p>Uma biblioteca JavaScript para construir interfaces de usuário.</p> },
    { id: "react", name: "React", icon: <DiReact />,description: <p>Uma biblioteca JavaScript para construir interfaces de usuário.</p> },
  ];
  
  const Technologies = () => {
    return (
      <section className="technologies-container">
        <h2>Technologies</h2>
        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div className="technology-card" id={tech.id} key={tech.id}>
              {tech.icon}
              <div className="technology-info">
                <p className="subtext">{tech.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Technologies;