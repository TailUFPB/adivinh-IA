import './styles.css';
import GithubIcon from "../assets/github.svg";

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido pela equipe de Visão Computacional da TAIL
            <div className="footer-icons">
                <a href="https://github.com/TailUFPB/adivinh-IA" target="_new">
                    <img src={GithubIcon} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;