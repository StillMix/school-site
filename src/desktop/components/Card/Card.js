import './Card.css';

function Card(props) {

    return (
        <div className="card">
            <img src={props.src} alt="фото" className="card__img"/>
            <p className={`card__title ${props.tems ? 'card-dark' : 'card-white'}`}>{props.name}</p>
            <p className={`card__about ${props.tems ? 'card-dark' : 'card-white'}`}>{props.about}</p>
        </div>
    );
}

export default Card;