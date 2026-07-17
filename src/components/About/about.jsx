import "./about.css";

function About() {
    return (
        <section id="about" className="about">

            <div className="about-title">
                <p>Get To Know</p>
                <h2>About Me</h2>
            </div>

            <div className="about-content">

                <div className="about-left">

                    <div className="about-card">

                        <h3>Who am I?</h3>

                        <p>
                            I’m Muthuraj, a Information technology student passionate about
                            frontend development, UI/UX design, and immersive
                            technologies. I enjoy turning ideas into modern,
                            usable experiences that solve real problems.
                        </p>

                        <p>
                            My goal is to keep growing as a developer by building
                            meaningful projects and exploring new technologies.
                        </p>

                    </div>

                </div>

                <div className="about-right">

                    <div className="info-box">
                        <h4>Education</h4>
                        <p>B.TECH Information Technology</p>
                    </div>

                    <div className="info-box">
                        <h4>Experience</h4>
                        <p>Developer & Intern</p>
                    </div>

                    <div className="info-box">
                        <h4>Projects</h4>
                        <p>2 Completed</p>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default About;