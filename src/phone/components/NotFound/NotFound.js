import './NotFound.css';
import { useHistory } from 'react-router-dom';
import Dark from '../../image/NotFoundDark.svg';
import White from '../../image/NotFoundWhite.svg';

function NotFound(props) {
    const history = useHistory();

    const handleBack = () => {
        history.goBack();
    };
    return(
        <div className={`${props.tems ? 'notfoundMobile__dark' : 'notfoundMobile__white'}`}>
         <div className="notfoundMobile">
                <img alt="значок" className="notfoundMobile__img" src={props.tems ? Dark : White}/>
                <p className={`notfoundMobile__title ${props.tems ? 'notfoundMobile__title-dark' : 'notfoundMobile__title-white'}`}>NOT FOUND</p>
         </div>
            <p className={`notfoundMobile__error ${props.tems ? 'notfoundMobile__error-dark' : 'notfoundMobile__error-white'}`}>404</p>
            <p className={`notfoundMobile_error_text ${props.tems ? 'notfoundMobile_error_text-dark' : 'notfoundMobile_error_text-white'}`}>страница не найдена</p>
            <button onClick={handleBack} className="notfoundMobile__btn hover">Назад</button>
     </div>
    );
}

export default NotFound;