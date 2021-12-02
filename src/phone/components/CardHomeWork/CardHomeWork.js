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
        <div className="cardhomeworkMobile">
            <p className={`cardhomeworkMobile__title ${props.tems ? 'cardhomeworkMobile__title-dark' : 'cardhomeworkMobile__title-white'}`}>{props.card.title}</p>
            <div className={`cardhomeworkMobile__container ${props.tems ? 'cardhomeworkMobile__container-dark' : 'cardhomeworkMobile__container-white'}`}>
                <div className="cardhomeworkMobile__container-lesson">
                    <p className="cardhomeworkMobile__lessons">Уроки</p>
                    {
                        props.card.lessons.map(i => {
                            return <p key={i.id} id={i.id} name={i.id} className="cardhomeworkMobile__lesson">{i.name}{i.homework ? (
                                <span key={i.id} id={i.id} name={i.id} onClick={handleClick} className={`cardhomeworkMobile_lesson_btn hover ${props.tems ? 'cardhomeworkMobile_lesson_btn-dark' : 'cardhomeworkMobile_lesson_btn-white'}`}>Д/З</span>
                            ): null}</p>
                        })
                    }
               </div>
               <div className="line"></div>
                <div className="cardhomeworkMobile__container-homework">
                    <p className="cardhomeworkMobile__homeworks">Д/З</p>
                   {
                       click ? (
                           props.card.lessons.map(i => {
                               if (i.id == ids){
                                   return <p className="cardhomeworkMobile__homework">{i.homework}</p>
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