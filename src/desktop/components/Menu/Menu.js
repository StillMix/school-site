import './Menu.css';
import Btn from '../../image/menu-btn.svg';
import React from 'react';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import { NavLink } from 'react-router-dom';

function Menu(props) {
    const [values, setValues] = React.useState({
        filtercheckbox: false,
    });
    React.useEffect(() => {
      if (values.filtercheckbox === true){
          props.setTems(true)
      }else{
          props.setTems(false)
      }
      
    }, [values.filtercheckbox, props]);

    const handleChange = (evt) => {
        const { target } = evt;
        const { name } = target;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setValues({
            ...values,
            [name]: value,
        });
    };


    return (
      <div className={`menu ${props.tems ? 'menu-dark' : 'menu-white'}`}>
        <div className="menu__header">
            <div className="menu__container-btn">
           <img src={Btn} alt='кнопка' className="menu_header_btn hover" />
           <p className="menu_header_acc">Ученик</p>
        </div>
        <div className='menu__container-thems'>
                    <p className="menu__tems">{`${props.tems ? 'тёмная' : 'светлая'}`}</p>
            <FilterCheckBox onChange={handleChange} value={values.filtercheckbox}/>
        </div>
        </div>
            <div className="menu__navigation">
                <NavLink to='/main' className="menu__text hover" activeClassName='menu__hover'>Новости</NavLink>
                <NavLink to='/homework' className="menu__text hover" activeClassName='menu__hover'>Домашнее Задание</NavLink>
                <NavLink to='/education' className="menu__text hover" activeClassName='menu__hover'>Успеваемость</NavLink>
                <NavLink to='/note' className="menu__text hover" activeClassName='menu__hover' >Напоминание</NavLink>
            </div>
            <div className={`menu__restangle ${props.tems ? 'menu__restangle-dark' : 'menu__restangle-white'}`}>
            </div>
      </div>
  );
}

export default Menu;