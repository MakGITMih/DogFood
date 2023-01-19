import React from "react";
import '../Card/Card.css'
import Heart from '../Images/heart.svg'
import '../data.json'

 export function Card ({name,picture,discount,price,wight }) {
        // console.log (props);
    return(
    <>
    <div className="card">      
        <div className="card__icons">          
                <div className="card__percent">{discount}</div>
                <div className="card__logo">
                <button className="card__favorit">
                    <img src={Heart} alt="Избранное" className ="card__favorit-icon"/>
                </button> 
                </div>         
        </div>
        <div className="card__desc">
            <a href="#" className="card__link">
                 <img src={picture} alt="Тут где - то был товар..." className ="card__pic"/>
                 <span className="card__price">{price}</span><br></br>
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