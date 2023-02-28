import React from "react";
import './Header.css'
// import '../Card/Card.jsx'
import Logo from '../Images/logo.svg'
import Bag from '../Images/buy.svg'
import Muzzle from '../Images/muzzle.svg'
import Close from '../Images/close.svg'
import {ReactComponent as Heart} from '../Images/heart.svg'

export function Header ({changeInput,user,onUpdateUser}) {
    const handleClickButtonEntry = (e) => {
        e.preventDefault();
        onUpdateUser({ about: 'Писатель', name: "Васисуалий" });
      };
    return(
      <header className="header">
            <div className="header__container _container">
                 <div className="header__wrap-logo">
                    <a href="#" className="header__logo">
                        <img className="header__logo-img" src={Logo} alt="Что то сломалось..."/>
                    </a>
                </div>
                <div className="header__wrap-search" > 
                     <form action="#" className="header__search">                        
                         <input className="header__search-input" type="text" autoFocus placeholder="Поиск" onInput={changeInput}></input>                                                
                         <button type="submit" className="header__search-btn">
                            <div className="header__wrap-close"><img className="header__close-img" src={Close} alt="Что то сломалось..."/></div>
                        </button>                         
                     </form>
                </div>
                <div className="header__wrap-icons">
                    <div className="header__icon-container">
                         <span>{user?.name} </span>
                         <span>{user?.about} </span>
                         <button className="header__entry" onClick={handleClickButtonEntry}>вход</button>
                         <div className="header__heart">
                            <Heart className="header__heart-img"></Heart>
                         </div>
                         <div className="header__bag">
                            <img className="header__bag-img" src={Bag} alt="Что то сломалось..."/>
                         </div>
                         <div className="header__muzzle">
                            <img className="header__muzzle-img" src={Muzzle} alt="Что то сломалось..."/>
                        </div>
                     </div>
                </div>               
            </div>
      </header>

    )  
}