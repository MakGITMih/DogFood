import React from "react";
import '../Card/Card.css'
import {ReactComponent as Heart} from '../Images/heart.svg'
import '../data.json'


 export function Card ({name,picture,discount,price,wight,isFavorite }) {
    const discount_price = Math.round (price - price * discount/100);
    return(
    <>
    <div className="card">  
        <div className="card__icons">
            {!!discount &&  <span className="card__percent">-{discount}%</span>}                         
            <div className="card__logo">
                <button className="card__favorit">
                        <Heart className ={isFavorite ? "card__favorit-icon" : 'card__nofavorit-icon' }></Heart>
                </button> 
            </div>         
        </div>
        <div className="card__desc">
            <a href="#" className="card__link">
                 <img src={picture} alt="Тут где - то был товар..." className ="card__pic"/>
                 <span className={!! discount ? 'card__old-price' : 'card__price'}>{price}&nbsp;₽</span>
                 {!! discount && <span className="card__new-price">{discount_price}&nbsp;₽</span>}               
                 <span className="card__how">{wight}</span>
                 <p className="card__text">{name}</p>
            </a>    
        </div>
        <div className="card__wrap-btn"> 
            <button className="card__btn">В корзину</button>
        </div>                 
    </div>
    </>  
    )
}