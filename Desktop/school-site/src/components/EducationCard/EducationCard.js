import React from 'react';
import './EducationCard.css';

function EducationCard(props) {
        const map = props.card.mark ? props.card.mark.map(i => { return i }) : null;
    const mapI = map && props.card.mark ? map.map(i => { return i }) : null;
    const mapIName = mapI && props.card.mark ? mapI.map(i => { return i.name }) : null;
    const sumMap = mapIName && props.card.mark ? mapIName.reduce(add, 0) : null;
        function add(accumulator, a) {
            return accumulator + a;
        
    }
    const sum = sumMap && props.card.mark ? sumMap / props.card.mark.length : null;
    return (
        <div className={`EducationCard ${props.tems ? 'EducationCard-dark' : 'EducationCard-white'}`}>
            <div className={`EducationCard__container ${props.tems ? 'EducationCard__container-dark' : 'EducationCard__container-white'}`}>
                <p className={`EducationCard__title ${props.tems ? 'EducationCard__title-dark' : 'EducationCard__title-white'}`}>{props.card.name}</p>
                <p className={`EducationCard__average ${props.tems ? 'EducationCard__average-dark' : 'EducationCard__average-white'}`}>Ср.{sum}</p>
          </div>
            <div className="EducationCard__container">
            {
               mapI && props.card.mark ? mapI.map(i => {
                    if(i.name == 5){
                        return <div key={i.id} className="EducationCard__five"><p className="EducationCard__name">{i.name}</p><p className="EducationCard__date">{i.date}</p></div>
                    }
                    if (i.name == 4) {
                        return <div key={i.id} className="EducationCard__four"><p className="EducationCard__name">{i.name}</p><p className="EducationCard__date">{i.date}</p></div>
                    }
                    if (i.name == 3) {
                        return <div key={i.id} className="EducationCard__three"><p className="EducationCard__name">{i.name}</p><p className="EducationCard__date">{i.date}</p></div>
                    }
                    if (i.name == 2) {
                        return <div key={i.id} className="EducationCard__two"><p className="EducationCard__name">{i.name}</p><p className="EducationCard__date">{i.date}</p></div>
                    }
                }) : null
            }
            </div>
        </div>
    );
}

export default EducationCard;