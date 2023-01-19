import React from "react";
import './Footer.css'
import { LogoComponent } from "../Component";
import Instagram from '../Images/instagram.svg'
import Telegram from '../Images/telegram.svg'
import Viber from '../Images/viber.svg'
import Vk from '../Images/vk.svg'
import Whatsapp from '../Images/whatsapp.svg'


export function Footer () {
    return (
        <>
        <div className="footer">
            <div className="footer__container _container">
                <div className="footer__wrap-logo">
                    <div className="footer__logo"><LogoComponent></LogoComponent></div>
                    <span className="footer__text"> © «Интернет-магазин DogFood.ru»</span> 
                </div>
                <div className="footer__wrap-subtitles-left" >
                         <span className="footer__catalog">Каталог</span>
                         <span className="footer__stock">Акции</span>
                         <span className="footer__news">Новости</span>
                         <span className="footer__reviews">Отзывы</span>
                </div>
                <div className="footer__wrap-subtitles-rigth" >
                         <span className="footer__catalog">Оплата и доставка</span>
                         <span className="footer__stock">Часто спрашивают</span>
                         <span className="footer__news">Обратная связь</span>
                         <span className="footer__reviews">Контакты</span>                       
                </div>
                 <div className="footer__wrap-connection">
                     <div className="footer__connection">Мы на связи</div>
                     <div className="footer__phone"><a href="tel:+7999000000">8 (999) 00-00-00</a>
                         <p className="footer__mail"><a href="mailto:dogfood.ru@gmail.com">dogfood.ru@gmail.com</a></p>
                     </div>
                     <div className="footer__wrap-socials">
                             <div className="footer__telegram _socials-size "><a href="https://t.me/DogFood" target='_blank'><img className="footer__telegram-img _socials-size" src={Telegram} alt="Что то сломалось..."/></a>
                             </div>
                             <div className="footer__whatsapp _socials-size"><a href="https://wa.me/+7999000000" target='_blank'><img className="footer__whatsapp-img _socials-size" src={Whatsapp} alt="Что то сломалось..."/></a>
                             </div>
                             <div className="footer__viber _socials-size"><a href="viber://chat?number=%2B79001234567" target='_blank'><img className="footer__viber-img _socials-size" src={Viber} alt="Что то сломалось..."/></a>
                             </div>
                             <div className="footer__instagram _socials-size">
                                <a href="https://www.instagram.com/" target='_blank'>
                                    <img className="footer__instagram-img _socials-size" src={Instagram} alt="Что то сломалось..."/>
                                    </a>
                             </div>
                             <div className="footer__vk _socials-size"><a href="https://vk.com/" target='_blank'><img className="footer__vk-img _socials-size" src={Vk} alt="Что то сломалось..."/></a>
                             </div>
                     </div>
                </div>    
            </div>
        </div> 
        </>
    )
}
