import * as S from "./styled";
import Footer from '../../Footer/';
import {Link} from "react-router-dom";

function Home() {
    return (
        <>
            <h1>
                Adivinh-IA
            </h1>
            <Link to="/game">
                <S.StartButton>
                JOGAR
               </S.StartButton>
            </Link>
            <br/>
            <Link to="/rules">
            <S.StartButton>
                REGRAS
               </S.StartButton>
            </Link>
            <Footer />
        </>
    )
}

export default Home;