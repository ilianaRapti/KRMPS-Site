import "./Experience.css";
import {data} from "../data/data";

export default function Experience(){

    return(
        <section id="experience" className="experience">
            <h2>EXPERIENCE</h2>

            {data.experience.map((e,i) => (
                <div key={i} className="card">
                    <h3>{e.role}</h3>
                    <span>{e.company}</span>
                    <p>{e.desc}</p>
                </div>
            ))}
        </section>
    );
}