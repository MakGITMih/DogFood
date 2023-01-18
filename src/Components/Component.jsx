import React from "react"
import Logo from './Images/logo.svg'

// Функциональные компоненты


export function LogoComponent (params) {
    return(
         <a href="#" className="header__logo">
             <img className="header__logo-img" src={Logo} alt="Что то сломалось..."/>
         </a>
    )
}

// export function Subtitles (params) {
//     return (
       
//         <div className="footer__subtitles">
//             <h3 className="footer__catalog">Каталог</h3>
//             <h3 className="footer__catalog">Акции</h3>
//             <h3 className="footer__catalog">Новости</h3>
//             <h3 className="footer__catalog">Отзывы</h3>
//         </div>
        
//     )
// }