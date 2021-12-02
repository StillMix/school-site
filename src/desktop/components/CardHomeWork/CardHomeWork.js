import React from 'react';
import './CardHomeWork.css';


function CardHomeWork(props) {
    const [click, setClick] = React.useState(false);
    const [ids, setId] = React.useState(null); 

    function handleClick(evt) {
        const { target } = evt;
        const { id } = target;
        if (ids == id){
            if (click === true) {
                setClick(false)
            } else {
                setClick(true)
                setId(id);
            }
        }else{
            setClick(false)
            setId(id);
            setClick(true)
        }
     }

    return (
        <div className="cardhomework">
            <p className={`cardhomework__title ${props.tems ? 'cardhomework__title-dark' : 'cardhomework__title-white'}`}>{props.card.title}</p>
            <div className={`cardhomework__container ${props.tems ? 'cardhomework__container-dark' : 'cardhomework__container-white'}`}>
                <div className="cardhomework__container-lesson">
                    <p className="cardhomework__lessons">Уроки</p>
                    {
                        props.card.lessons.map(i => {
                            return <p key={i.id} id={i.id} name={i.id} className="cardhomework__lesson">{i.name}{i.homework ? (
                                <span key={i.id} id={i.id} name={i.id} onClick={handleClick} className={`cardhomework_lesson_btn hover ${props.tems ? 'cardhomework_lesson_btn-dark' : 'cardhomework_lesson_btn-white'}`}>Д/З</span>
                            ): null}</p>
                        })
                    }
               </div>
               <div className="line"></div>
                <div className="cardhomework__container-homework">
                    <p className="cardhomework__homeworks">Д/З</p>
                   {
                       click ? (
                           props.card.lessons.map(i => {
                               if (i.id == ids){
                                   return <p className="cardhomework__homework">{i.homework}</p>
                               }
                            })
                       ) : null
                   }                  
                </div>
            </div>
        </div>
    );
}

export default CardHomeWork;