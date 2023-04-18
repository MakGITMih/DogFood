import React from "react";
import { Link } from "react-router-dom";
import '../Card/Card.css'
import {ReactComponent as Heart} from '../Images/heart.svg'



 export function Card ({ name,price,discount,wight,pictures,likes,currentUser,
    onProductLike,_id, }) {

        function handleLikeClick(){
            onProductLike({_id,likes})
        }

        const liked = likes.some((id) => id === currentUser?._id);    
        const discount_price = Math.round (price - price * discount/100);
    return(
    <>
    <div className="card">  
        <div className="card__icons">
            {!! discount &&  <span className="card__percent">-{discount}%</span>}                         
            <div className="card__logo">
                <button className="card__favorit" onClick={handleLikeClick}>
                        <Heart className = { liked ? "card__favorit-icon" : 'card__nofavorit-icon'}></Heart>                      
                </button> 
            </div>         
        </div>
        <div className="card__desc">
            <Link to ={`/product/${_id}`} className="card__link">
                 <img src={pictures} alt="Тут где - то был товар..." className ="card__pic"/>
                 <span className={!! discount ? 'card__old-price' : 'card__price'}>{price}&nbsp;₽</span>
                 {!! discount && <span className="card__new-price">{discount_price}&nbsp;₽</span>}               
                 <span className="card__how">{wight}</span>
                 <p className="card__text">{name}</p>
            </Link>    
        </div>
        <div className="card__wrap-btn"> 
            <button className="card__btn">В корзину</button>
        </div>                 
    </div>
    </>  
    )
}