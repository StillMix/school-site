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
        <div className={`${props.tems ? 'notfound__dark' : 'notfound__white'}`}>
         <div className="notfound">
                <img alt="значок" className="notfound__img" src={props.tems ? Dark : White}/>
                <p className={`notfound__title ${props.tems ? 'notfound__title-dark' : 'notfound__title-white'}`}>NOT FOUND</p>
         </div>
            <p className={`notfound__error ${props.tems ? 'notfound__error-dark' : 'notfound__error-white'}`}>404</p>
            <p className={`notfound_error_text ${props.tems ? 'notfound_error_text-dark' : 'notfound_error_text-white'}`}>страница не найдена</p>
            <button onClick={handleBack} className="notfound__btn hover">Назад</button>
     </div>
    );
}

export default NotFound;