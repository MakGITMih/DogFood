import React, { useContext } from "react";
import './Header.css'
import Logo from '../Images/logo.svg'
import Bag from '../Images/buy.svg'
import Muzzle from '../Images/muzzle.svg'
import Close from '../Images/close.svg'
// import Logout from '../Images/logout.svg'
import {ReactComponent as Heart} from '../Images/heart.svg'
import {ReactComponent as Logout} from '../Images/logout.svg'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CardContext } from "../../Context/CardContext";
import { UserContext } from "../../Context/UserContext";


export function Header ({changeInput,user,onUpdateUser, 
   // setActiveModal,
   // isAuthentificated
}) {
    // const handleClickButtonEntry = (e) => {
    //     e.preventDefault();
    //     onUpdateUser({ about: 'Писатель', name: "Васисуалий" });
    //   };
      const { favorites } = useContext(CardContext); 
      const location = useLocation();

      const { isAuthentificated,
          setActiveModal
          } = useContext(UserContext)

   //    let navigate = useNavigate();

   //   const handleClick = () => {
   //      navigate('/');
   //    };

// console.log(isAuthentificated);
      
    return(
      <header className="header">
            <div className="header__container _container">
                 <div className="header__wrap-logo">
                 <Link to ={'/'}>
                   <div  className="header__logo">
                        <img className="header__logo-img" src={Logo} alt="Что то сломалось..."/>
                     </div> 
                  </Link>     
                </div>
                <div className="header__wrap-search" > 
                     <form action="#" className="header__search">                        
                         <input className="header__search-input" type="text" autoFocus placeholder="Поиск" onInput={changeInput} 
                        //  onClick={handleClick}
                         ></input>                                             
                         <button type="submit " className="header__search-btn">             
                            <div className="header__wrap-close"><img
                           //   onClick={handleClick}
                              className="header__close-img" src={Close} alt="Что то сломалось..."/></div>                           
                        </button>                                              
                     </form>
                </div>
                <div className="header__wrap-icons">
                    <div className="header__icon-container">
                         <Link to ={'/register'}
                            state = {{backgroundLocation: location, initialPath: location.   pathname}} 
                            onClick = {() => setActiveModal (true)}>
                                  <span className="header__entry">Регистрация</span>
                         </Link>
                         {/* <span>{user?.name} </span>
                         <span>{user?.about} </span> */}
                         { !isAuthentificated && 
                         <Link to ={'/login'} 
                            state = {{backgroundLocation: location, initialPath: location.   pathname}} 
                            onClick = {() => setActiveModal (true)}>
                                  <span className="header__entry">Вход</span>
                         </Link>
                         }                       
                          <Link to ={'/resetpass'}
                            state = {{backgroundLocation: location, initialPath:  location.   pathname}} 
                            onClick = {() => setActiveModal (true)}>
                                  <span className="header__entry" >Восстановить</span>
                          </Link>
                         <div className="header__heart" >
                            <Link to ={'/favorites'}>
                                 <Heart className="header__heart-img"></Heart>
                                 {favorites.length !== 0 && (<span className='header__heart-counter'>{favorites.length}</span>)}
                            </Link>
                         </div>
                         <Link to ={'/form'}>
                         <button  className="header__bag" >
                            <img className="header__bag-img" src={Bag} alt="Что то сломалось..."/>
                         </button>
                         </Link>
                         { isAuthentificated ? (
                         <Link to ={'/profile'}>
                         <button className="header__muzzle" onClick = {() => setActiveModal (true)} >
                            <img  className="header__muzzle-img" src={Muzzle} alt="Что то сломалось..."/>
                        </button>
                        </Link>)
                          :
                        (<Link to ={'/login'} >
                         <button  className="header__muzzle" onClick = {() => setActiveModal (true)} >
                           <Logout className="header__muzzle-img"></Logout>
                         </button>
                         </Link>)
                        }
                     </div>
                </div>               
            </div>
      </header>
    )  
}