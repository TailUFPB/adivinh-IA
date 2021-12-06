import { Link } from "react-router-dom";
import './index.css'

function Rules() {
    return (
        <div className="wrapper">
            <Link to="/">
                <h1 className = "title">
                    Adivinh-IA
                </h1>
            </Link>
            <div className="container">
                <div className="titleRule">Regras</div>
                <p className="ruleP">
                    O Adivinh-IA é um jogo de adivinhação em que os jogadores precisam usar de sua intuição para descobrir quais palavras geraram as imagens que vão aparecer na tela. Cada imagem é formada a partir de uma inteligência artificial que tenta construí-la a partir do uso de uma palavra, sendo essa a palavra que o usuário tem que adivinhar.
                    </p>
                <p className="ruleP">A cada 50 segundos o usuário vê uma nova imagem ser gerada e, a partir disso, ganha pontos dependendo do tempo em que acertar a palavra que gerou a imagem e, a rigor, as palavras estão em Português do Brasil. A resposta será aceita se apresentar leves erros, mas, caso esteja incorreta, 3 segundos são cortados do tempo do jogador.
                </p>
            </div>
        </div>
    )
}

export default Rules;