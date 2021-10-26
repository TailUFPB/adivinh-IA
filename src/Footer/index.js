import './styles.css';
import GithubIcon from "../assets/github.svg";
import LinkedinIcon from "../assets/linkedin.svg"

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido pela equipe de Visão Computacional da TAIL
            <div className="footer-icons">
                <a href="https://github.com/TailUFPB/adivinh-IA" target="_new">
                    <img src={GithubIcon} />
                </a>
                <a href="https://www.linkedin.com/company/tailufpb/" target="_new">
                    <img src={LinkedinIcon} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;