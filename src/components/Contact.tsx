import './section.css';

const Contact = () => {
    return(
        <section
            className="contact"
            id="contact"
        >
            <span>CONTACT</span>

            <h2>
                LET'S 
                <br/>
                <section className='build-text'>
                BUILD
                </section>
               
            </h2>

            <a href="mailto:info@atlascivil.com">
                info@atlascivil.com
                <br />
                2751 068156
                <div className="location">
                    Καλμούχου 3, Άργος 212 00
                </div>
            </a>
        </section>
    );
};

export default Contact;