import Footer from '../../Footer/';
import {Link} from "react-router-dom";
import "./index.css"

function Home() {
    return (
        <div className="wrapper">
            <h1 className = "title">
                Adivinh-IA
            </h1>
            <Link to="/game">
               <div className="button-49">
                JOGAR
               </div>
            </Link>
            <br/>
            <Link to="/rules">
                REGRAS
            </Link>
            <Link to="/about">
                <div className="button-49">
                QUEM SOMOS
               </div>
            </Link>
            <Footer />
        </div>
    )
}

export default Home;