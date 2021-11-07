import CardItem from './cardItem';
import './cards.css';


function Cards() {
    return (
        <div className = 'cards'>
            <div className = "cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src = {require("../../assets/jorge.jpg").default}
                        text = "Jorge Gomes"
                        label='Ciência da Computação'
                        path='https://www.linkedin.com/in/jorge-gomes-578205167/'
                        />
                        <CardItem 
                        src = {require("../../assets/epitacio.jpg").default}
                        text = "Epitácio Neto"
                        label = "Engenharia da Computação"
                        path='https://www.linkedin.com/in/epitacio-neto-61ba98168/'
                        />
                        
                    </ul>
                    <ul className="cards__items">
                    <CardItem
                    src={require("../../assets/yann.jpg").default}
                    text='Yann Nóbrega'
                    label='Medicina'
                    path='https://www.linkedin.com/in/yannngn/'
                    />
                    <CardItem
                    src='https://avatars.githubusercontent.com/u/69730206?v=4'
                    text='Cândido Alfredo'
                    label='Engenharia Civil'
                    path='https://www.linkedin.com/in/candidoalfredocl/'
                    />
                    <CardItem
                    src={require("../../assets/arthur.jpg").default}
                    text='Arthur Silva'
                    label='Ciência da Computação'
                    path='https://www.linkedin.com/in/arthur-s-cavalcante-ferreira/'
                    />
                    
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                    src= {require("../../assets/daniel.jpg").default}
                    text='Daniel Cabral'
                    label='Engenharia Civil'
                    path='https://www.linkedin.com/in/danielcabralcosta/'
                    />
                    <CardItem
                    src={require("../../assets/humberto.jpg").default}
                    text='Humberto Escorel'
                    label='Engenharia da Computação'
                    path='https://www.linkedin.com/in/humberto-escorel-154641127/'
                    />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards