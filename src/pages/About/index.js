import { Link } from "react-router-dom";
import Cards from "./cards";

function About() {
    return(
        <div className="wrapper">
            <Link to="/">
                <h1 className = "title">
                    Adivinh-IA
                </h1>
            </Link>
            <Cards/>
        </div>
    )
}

export default About;