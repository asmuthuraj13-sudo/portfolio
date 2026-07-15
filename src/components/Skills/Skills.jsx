import "./Skills.css";
import skills from "../../Data/skillsData";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="skills-title">
        <p>What I Know</p>
        <h2>My Skills</h2>
      </div>

      {skills.map((category) => (
        <div className="skill-category" key={category.category}>

          <h3>{category.category}</h3>

          <div className="skills-grid">

            {category.items.map((skill) => (
              <SkillCard
                key={skill}
                skill={skill}
              />
            ))}

          </div>

        </div>
      ))}

    </section>
  );
}

export default Skills;