import React from "react";
import '../Card/Card.css'
import Heart from '../Images/heart.svg'
import '../data.json'

 export function Card (params) {
    return(
    <>
    <div className="card">      
        <div className="card__pic">          
                <span className="card__percent">10%</span>
                <span className="card__logo"><img src={Heart} alt="Избранное" /></span>
                <button className="card__favorit">
                    <img src="https://react-learning.ru/image-compressed/6.jpg" alt="Тут где - то был товар..." className ="card__favorit-icon"/>
                </button>           
        </div>
        <div className="card__desc">
            <a href="#" className="card__link">
                 <span className="card__price">300 ₽</span><br></br>
                 <span className="card__how">1 шт</span>
                 <p className="card__text">Рога оленя для собак весом до 3кг. Размер XS</p>
            </a>    
        </div>
        <div className="card__wrap-btn">
            <button className="card__btn">В корзину</button>
        </div>            
    </div>
    </>  
    )
}