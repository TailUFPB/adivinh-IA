import CardItem from './cardItem';
import './cards.css';

function Cards() {
    return (
        <div className = 'cards'>
            <div className = "cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src = "https://avatars.githubusercontent.com/u/26287741?v=4"
                        text = "Jorge Gomes"
                        label='Ciência da Computação'
                        path='https://www.linkedin.com/in/jorge-gomes-578205167/'
                        />
                        <CardItem 
                        src = "https://media-exp1.licdn.com/dms/image/C4D03AQEsqKdzs424pQ/profile-displayphoto-shrink_200_200/0/1600348779639?e=1640822400&v=beta&t=SQIOoxw5TUa6hCpS9lOsTHrukp6egZYJ-E0BKIG-_po"
                        text = "Epitácio Neto"
                        label = "Engenharia da Computação"
                        path='https://www.linkedin.com/in/epitacio-neto-61ba98168/'
                        />
                        
                    </ul>
                    <ul className="cards__items">
                    <CardItem
                    src='https://avatars.githubusercontent.com/u/40697115?v=4'
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
                    src=''
                    text='Arthur Silva'
                    label='Curso'
                    path=''
                    />
                    
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                    src='https://media-exp1.licdn.com/dms/image/C5603AQG0qag0TiS5Ew/profile-displayphoto-shrink_200_200/0/1571352848487?e=1640822400&v=beta&t=YowmbKPTeK3rsH2dIOdzjlLuHQo0SfjgDNf7NDL6cfM'
                    text='Daniel Cabral'
                    label='Engenharia Civil'
                    path='https://www.linkedin.com/in/danielcabralcosta/'
                    />
                    <CardItem
                    src=''
                    text='Humberto Escorel'
                    label='Curso'
                    path=''
                    />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards