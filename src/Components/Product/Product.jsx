import React from "react";
import '../Product/Product.css'
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {ReactComponent as Glass} from '../Images/glass.svg'
import {ReactComponent as Heart} from '../Images/heart.svg'
import {ReactComponent as Truck} from '../Images/truck.svg'
import {ReactComponent as Union} from '../Images/union.svg'

export function Product ({
    handleProductLike,
    _id, 
    pictures,
    name,
    price,
    discount,
    onProductLike,
    likes = [],
    currentUser,
    description,}) {

     const discount_price = Math.round(price - (price * discount) / 100);
     const isLike = likes.some((id) => id === currentUser?._id);
     const desctiptionHTML = { __html: description };

     let navigate = useNavigate();
     const handleClick = () => {
        navigate('/');
      };

    
    return (
         <>  
         <div className="product">
            <div className="product__container _container">
                <div className="product__header">
                     <button onClick={handleClick} className="product__btn"> Назад </button>
                     <h1 className="product__name">{name}</h1>
                     <div className="product__block">
                         <div className="product__articles">Артикул: <b>238793</b></div>
                         <div className="product__stars" >Звезды </div> 
                         <div className="product__reviews">Отзывы</div> 
                     </div>
                </div>
                <section className="pictures">
                    <div className="pictures__image">
                        <div className="pictures__discount">{!!discount &&  <span className="pictures__percent">-{discount}%</span>}</div>                        
                        <Glass className="pictures__pic _socials-size"></Glass>
                        <img className="pictures__img" src= {pictures} alt="" />                       
                    </div>
                    <div className="pictures__wrap-thumbnail"> 
                        <img className="pictures__thumbnail" src= {pictures} alt="" />  
                    </div>
                    <div className="pictures__benefits">
                        <div className="pictures__wrap-price">
                             <div className="pictures__discount"><span className={!! discount ? 'pictures__old-price' : 'pictures__price'}>{price}&nbsp;₽</span>
                             </div>
                             <div className="pictures__price">{!! discount && <span className="pictures__new-price"> {discount_price}&nbsp;₽</span>} </div>
                         </div>
                         <div className="pictures__wrap-basket">
                             <div className="pictures__counter">
                                 <button className="pictures__minus">-</button>
                                 <span className="pictures__zero">0</span>
                                 <button className="pictures__plus">+</button>
                             </div>
                             <div className="pictures__wrap-btn"> 
                                 <button className="pictures__btn">В корзину</button>
                             </div>                 
                         </div>
                         <button onClick={onProductLike} className="pictures__wrap-favorites"> 
                            <Heart className={`'pictures__icon-heart' ${isLike ? '_activ' : 'pictures__icon-heart'}`}
                            // 'pictures__icon-heart'
                            >
                            </Heart>                   
                             <span className="pictures__favorites-text">{isLike ? 'В избранном' : 'В избранное'}</span>
                         </button>
                         <div className="pictures__wrap-delivery">
                             <Truck className="pictures__icon-delivery"></Truck>                 
                             <div className="pictures__delivery">
                                 <h3 className="pictures__title">Доставка по всему Миру!</h3>
                                 <div className="pictures__courier">Доставка курьером — <b>от 399 ₽</b></div>
                                 <div className="pictures__office">Доставка в пункт выдачи — <b>от 199 ₽</b></div>
                             </div>
                         </div>
                         <div className="pictures__wrap-quality">
                            <Union className="pictures__icon-quality"></Union>
                             <div className="pictures__quality">
                                 <h3 className="pictures__title-quality">Гарантия качеств</h3>
                                 <div className="pictures__text-quality">Если Вам не понравилось качество нашей продукции, мы вернем деньги, либо сделаем все возможное, чтобы удовлетворить ваши нужды.</div>
                             </div>
                         </div>
                    </div>    
                </section>
                <section className="description">
                     <div className="description__wrap-description">
                         <div className="description__wrap-title">
                             <h2 className="description__title">Описание</h2>
                         </div>
                         <div className="description__wrap-text">
                            <p className="description__text"dangerouslySetInnerHTML=     {desctiptionHTML}></p>
                         </div>
                     </div>
                     <div className="description__wrap-characteristic">
                        <div className="description__wrap-titles">
                            <h2 className="description__titles">Характеристики</h2>
                        </div>
                        <div className="description__wrap-text">
                            <div className="description__wrap-headline">
                                <div className="description__wrap-weight">
                                    <div className="description__block-weight">
                                         <span className="description__weight">Вес</span>
                                         <span className="description__border-weight">.........................</span>
                                     </div>
                                     <span className="description__quantity-weight">1 шт 120-200 грамм</span>
                                </div>
                                <div className="description__wrap-price">
                                    <div className="description__block-price">
                                         <span className="description__price">Цена</span>
                                         <span className="description__border-price">......................</span>
                                     </div>
                                     <span className="description__quantity-price">490 ₽ за 100 грамм</span>
                                </div>
                                <div className="description__wrap-benefit">
                                    <div className="description__block-benefit">
                                         <span className="description__benefit">Польза</span>
                                         <span className="description__border-benefit">.................</span>
                                     </div>
                                     <div className="description__paragraph-benefit">
                                         <p className="description__one-benefit">Большое содержание аминокислот и микроэлементов оказывает положительное воздействие на общий обмен веществ собаки.</p>
                                         <p className="description__two-benefit">Способствуют укреплению десен и жевательных мышц.</p>
                                         <p className="description__three-benefit">Развивают зубочелюстной аппарат, отвлекают собаку во время смены зубов.</p>
                                         <p className="description__four-benefit">Имеет цельную волокнистую структуру, при разжевывание получается эффект зубной щетки, лучше всего очищает клыки собак.</p>
                                         <p className="description__five-benefit">Следует учесть высокую калорийность продукта.</p>
                                     </div>
                                </div>
                            </div>
                        </div>
                     </div>
                </section>
            </div>
         </div>       
         </>
    )
    
}