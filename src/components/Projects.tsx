import "./Projects.css"

const Projects = () => {

    return(
        <section
            className="section projects"
            id="projects"
        >
            <div className="section-number">
                03
            </div>

            <div className="section-content">
                <h2>PROJECTS</h2>

                <div className="projects-grid">

                    <article>
                        <img
                            src="https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNpdmlsJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww"
                            alt=""
                        />

                        <h3>Residential Complex</h3>
                    </article>

                    <article>
                        <img 
                            src="https://training.certstaff.com/images/certstaffix/Blog-Images/AutoCAD-Graph-4.jpg"
                            alt=""
                        />
                        <h3>Commercial Structure</h3>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Projects;