import Footer from '../../Footer/';
import {Link} from "react-router-dom";
import "./index.css"

function Home() {
    return (
        <div className="wrapper">
            <Link to="/">
                <h1 className = "title">
                    Adivinh-IA
                </h1>
            </Link>
            <Link to="/game">
               <div className="button-49">
                JOGAR
               </div>
            </Link>
            <br/>   
            <Link to="/rules">
                <div className="button-49">
                REGRAS
                </div>
            </Link>
            <br/>
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