import React from "react";
import "../Main/Main.css";
import bg from "../../assets/bg-paper.png";
import paper from "../../assets/paper1.png";
import { DELIVERY, FEEDBACK1, FEEDBACK2, FEEDBACK3, NAME1, NAME2, NAME3, ORDER, ORDER_PHONE, SALES_TEXT, STORE_NAME, SUPER_OFFER, WALLET } from "../../config";
import tovar1 from "../../assets/tovar1.jpg";
import tovar2 from "../../assets/tovar2.jpg";
import tovar3 from "../../assets/tovar3.jpg";
import time from "../../assets/time.png";
import quality from "../../assets/quality.png";
import reability from "../../assets/reability.png";
import price from "../../assets/price.png";
import { ADVANTAGES_PRICE } from "../../config";
import { ADVANTAGES_QUALITY } from "../../config";
import { ADVANTAGES_REABILITY } from "../../config";
import { ADVANTAGES_TIME } from "../../config";
import order from "../../assets/order.png";
import delivery from "../../assets/delivery.png";
import wallet from "../../assets/wallet.png";
import phone from "../../assets/phone.png";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import offer from "../../assets/offer.png";
const Main = () => {
    return(
        <div>
            <div className="bg-pick">
                <img src={bg} alt="bg" className="bg-pick-img" />
                <div className="presentation-wrapper">
                    <div className="present-card">
                        <div className="present-text">
                            <h1>Магазин {STORE_NAME}</h1>
                            <span>приветствует вас</span>
                            <p className="present-info">Более миллиона довольных покупателей, которые возвращатся снова и снова за качеством, надежностью, мягкостью и заботой</p>
                        </div>
                        <img src={paper} alt="paper" className="present-img" />
                    </div>
                </div>
            </div>
            <div className="product-wrappper">
                <div className="product-img-wrapper">
                    <div className="products-img">
                        <img src={tovar1} alt="tovar" className="product-img"/>
                    </div>
                    <div className="products-img">
                        <img src={tovar3} alt="tovar" className="product-img"/>
                    </div>
                    <div className="products-img">
                        <img src={tovar2} alt="tovar" className="product-img"/>
                    </div>
                </div>
                <div className="product-text-info">
                    ТЕКСТ ОПИСАНИЯ ТОВАРА: Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos nobis maxime illum officia explicabo dolor eveniet sit aliquam, laudantium ex, fugit corrupti, veritatis nulla optio commodi deleniti molestiae laborum facere?
                </div>
            </div>
            <div className="advantages-wrapper">
                <div className="advantages-wrapper-content">
                <div className="advantages-title">
                    <p>Наши преимущества</p>
                </div>
                <div className="advantages-content">
                    <div className="advantages-item">
                        <img src={time} alt="time" className="advantages-item-img"/>
                        <div className="advantages-item-text">
                            <p>{ADVANTAGES_TIME}</p>
                        </div>
                    </div>
                    <div className="advantages-item">
                        <div className="advantages-item-text">
                            <p>{ADVANTAGES_QUALITY}</p>
                        </div>
                        <img src={quality} alt="quality" className="advantages-item-img"/>
                    </div>
                    <div className="advantages-item">
                        <img src={reability} alt="reability" className="advantages-item-img"/>
                        <div className="advantages-item-text">
                            <p>{ADVANTAGES_REABILITY}</p>
                        </div>
                    </div>
                    <div className="advantages-item">
                        <div className="advantages-item-text">
                            <p>{ADVANTAGES_PRICE}</p>
                        </div>
                        <img src={price} alt="price" className="advantages-item-img"/>
                    </div>
                </div>
                </div>
            </div>
            <div className="order-wrapper">
                <div className="order-title">
                    <p>Как сделать заказ ?</p>
                </div>
                <div className="order-point-wrapper">
                    <div className="order-point">
                        <div className="point-content">
                            <div>
                                <img src={order} alt="order" className="order-img"/>
                            </div>
                            <div className="number">1</div>
                            <p className="oreder-text">{ORDER}</p>
                        </div>
                        <div className="point-content">
                            <div>
                                <img src={phone} alt="order" className="order-img"/>
                            </div>
                            <div className="number">2</div>
                            <p className="oreder-text">{ORDER_PHONE}</p>
                        </div>
                        <div className="point-content">
                            <div>
                                <img src={delivery} alt="order" className="order-img"/>
                            </div>
                            <div className="number">3</div>
                            <p className="oreder-text">{DELIVERY}</p>
                        </div>
                        <div className="point-content">
                            <div>
                                <img src={wallet} alt="order" className="order-img"/>
                            </div>
                            <div className="number">4</div>
                            <p className="oreder-text">{WALLET}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="feedback-wrapper">
                <div className="feedback-wrapper-content">
                    <div className="feedback-title">
                        <p>Отзывы покупателей</p>
                    </div>
                    <div className="feedback-content">
                        <div className="feedback-user">
                            <div className="feedback-user-name">
                                <img src={photo1} alt="time" className="feedback-item-img"/>
                                <div className="user-name">
                                    <p>{NAME1}</p>
                                </div>
                            </div>
                            <div className="feedback-user-comment">
                                {FEEDBACK1}
                            </div>
                        </div>
                        <div className="feedback-user">
                            <div className="feedback-user-name">
                                <img src={photo2} alt="time" className="feedback-item-img"/>
                                <div className="user-name">
                                    <p>{NAME2}</p>
                                </div>
                            </div>
                            <div className="feedback-user-comment">
                                {FEEDBACK2}
                            </div>
                        </div>
                        <div className="feedback-user">
                            <div className="feedback-user-name">
                                <img src={photo3} alt="time" className="feedback-item-img"/>
                                <div className="user-name">
                                    <p>{NAME3}</p>
                                </div>
                            </div>
                            <div className="feedback-user-comment">
                                {FEEDBACK3}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="super-offer-wrapper">
                <div className="super-offer-title">
                    {SUPER_OFFER}
                </div>
                <div className="super-offer-content">
                    <div className="offer-form-wrapper">
                        <div className="sales-text">
                            {SALES_TEXT}
                        </div>
                        <div className="sales-form">
                            <input type="text" className="sales-input" placeholder="Имя"/>
                            <input type="text" className="sales-input" placeholder="Телефон"/>
                            <button className="sales-btn" onClick={()=>{alert("Заказ успешно оформлен!")}}>Заказать</button>
                        </div>
                    </div>
                    <div className="offer-wrapper-img">
                        <div className="super-price">
                           <div className="super-word1">Акция!</div>
                           <div className="super-word2">90%</div>
                           <div className="super-word3">Скидка</div>
                        </div>
                        <div className="main-offer-img">
                            <img src={offer} alt="" className="offer-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;