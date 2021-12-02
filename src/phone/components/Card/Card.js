import './Card.css';

function Card(props) {

    return (
        <div className="cardMobile">
            <img src={props.src} alt="фото" className="cardMobile__img"/>
            <p className={`cardMobile__title ${props.tems ? 'cardMobile-dark' : 'cardMobile-white'}`}>{props.name}</p>
            <p className={`cardMobile__about ${props.tems ? 'cardMobile-dark' : 'cardMobile-white'}`}>{props.about}</p>
        </div>
    );
}

export default Card;