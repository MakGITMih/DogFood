import React from "react";
import './Header.css'
// import Logo from '../Images/logo.svg'
import Heart from '../Images/heart.svg'
import Bag from '../Images/buy.svg'
import Muzzle from '../Images/muzzle.svg'
import Close from '../Images/close.svg'
import { LogoComponent } from "../Component.jsx";

// export function LogoComponent (params) {
//     return(
//          <a href="#" className="header__logo">
//              <img className="Logo" src={Logo} alt="Что то сломалось..."/>
//          </a>
//     )
// }

export function Header (params) {
    return(
      <header className="header">
            <div className="header__container _container">
                <div className="header__wrap-logo">
                    <LogoComponent></LogoComponent>
                </div>
                <div className="header__wrap-search"> 
                     <form action="#" className="header__search">                        
                         <input className="header__search-input" autoFocus placeholder="Поиск"></input>                                                
                         <button type="submit" className="header__search-btn"><div className="header__wrap-close"><img className="header__close-img" src={Close} alt="Что то сломалось..."/></div></button>                         
                     </form>
                </div>
                <div className="header__wrap-icons">
                    <div className="header__icon-container">
                        <div className="header__heart">
                            <img className="header__heart-img" src={Heart} alt="Что то сломалось..."/>
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