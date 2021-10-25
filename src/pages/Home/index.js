import Footer from '../../Footer/';
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <h1>
                Adivinh-IA
            </h1>
            <Link to="/game">
                JOGAR
            </Link>
            <Link to="/about">
                QUEM SOMOS
            </Link>
            <Footer />
        </>
    )
}

export default Home;