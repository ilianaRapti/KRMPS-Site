import "./Home.css";

const Home = () => {
    return(
        <section className="home">
            <div className="home-top">
                <span>ΜΑΡΙΝΟΣ ΚΑΡΜΠΑΣ</span>
                <span>ΑΡΓΟΣ / WORLDWIDE</span>
            </div>

            <div className="home-title">
                <h1>
                    BUILD <span>
                    ✳STRUCTURE</span>
                </h1>
            </div>
            
            <div className="hero-grid">
                <div className="home-image">
                    <img
                        src="https://roadshub.org/wp-content/uploads/2025/10/Screenshot-2025-09-22-100418.png"
                        alt="engineering"
                    />
                </div>

                <div className="home-info">
                    <p>
                        Τεχνικό γραφείο, μελέτες, κατασκευές, επιβλέψεις από το <span>1986</span>. 
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Home;