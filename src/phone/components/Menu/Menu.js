import './Menu.css';
import Btn from '../../image/menu-btn.svg';
import React from 'react';
import FilterCheckBox from '../FilterCheckBox/FilterCheckBox';
import { NavLink } from 'react-router-dom';
import BtnOpenMenu from '../../image/btn-openMenu.svg';
import BtnCloseMenu from '../../image/btn-closeMenu.svg';

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

    function handleClick() {
        if (props.isOpen) {
            props.setIsOpen(false)
        } else {
            props.setIsOpen(true)
        }
    }


    return (
        <>
                {
            props.isOpen ? (
                    <div className={`menuMobile ${props.tems ? 'menuMobile-dark' : 'menuMobile-white'}`}>
                        <div className="menuMobile__header">
                            <div className="menuMobile__container-btn">
                                <img src={Btn} alt='кнопка' className="menuMobile_header_btn hover" />
                                <p className="menuMobile_header_acc">Ученик</p>
                            </div>
                            <img src={BtnCloseMenu} onClick={handleClick} alt='закрыть меню' className="menuMobile__closeMenu hover"/>
                            <div className='menuMobile__container-thems'>
                                <p className="menuMobile__tems">{`${props.tems ? 'тёмная' : 'светлая'}`}</p>
                                <FilterCheckBox onChange={handleChange} value={values.filtercheckbox} />
                            </div>
                        </div>
                        <div className="menuMobile__navigation">
                            <NavLink to='/main' className="menuMobile__text hover" activeClassName='menuMobile__hover'>Новости</NavLink>
                            <NavLink to='/homework' className="menuMobile__text hover" activeClassName='menuMobile__hover'>Домашнее Задание</NavLink>
                            <NavLink to='/education' className="menuMobile__text hover" activeClassName='menuMobile__hover'>Успеваемость</NavLink>
                            <NavLink to='/note' className="menuMobile__text hover" activeClassName='menuMobile__hover' >Напоминание</NavLink>
                        </div>
                        <div className={`menuMobile__restangle ${props.tems ? 'menuMobile__restangle-dark' : 'menuMobile__restangle-white'}`}>
                        </div>
                    </div>
            ) : (
                        <img src={BtnOpenMenu} onClick={handleClick} alt="открыть меню" className="btn__openMenu hover" />
            )
        }

        </>
  );
}

export default Menu;