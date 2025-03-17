import React, { useEffect, useState } from "react";
import '../item-cart/ItamCart.scss'
import { Button } from "@mui/material";
import Procent from '../../asset/procent.svg'

const getTimeRemaining = (endTime) => {
    const now = new Date();
    const end = new Date(endTime);
    const timeDiff = end - now;

    if (timeDiff <= 0) {
        return "Час вичерпано";
    }

    const days = Math.floor(timeDiff / (1000 * 3600 * 24)); // Кількість днів
    const hours = Math.floor((timeDiff % (1000 * 3600 * 24)) / (1000 * 3600)); // Години після повних днів
    const minutes = Math.floor((timeDiff % (1000 * 3600)) / (1000 * 60)); // Хвилини
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000); // Секунди

    // Конвертуємо дні в години
    const totalHours = days * 24 + hours; // Додаємо до годин кількість годин в днях

    let timeEnd = {
        hours: totalHours > 9 ? totalHours : `0${totalHours}`,
        minutes: minutes > 9 ? minutes : `0${minutes}`,
        seconds: seconds > 9 ? seconds : `0${seconds}`,
    };

    return timeEnd;
};

export default function ItemCart(data) {
    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(data.time));

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeRemaining(getTimeRemaining(data.time));
        }, 1000);

        return () => clearInterval(intervalId);
    }, [data.time]);

    // Обчислюємо суму після застосування знижки
    const discountAmount = (data.cost * data.discount) / 100;
    const priceAfterDiscount = data.cost - discountAmount;

    return (
        <div className="item-cart">
            <p className="cart-title">{data.title}</p>
            <div className="cart-content">
                <img className="cart-img" src={data.img} alt="" />
                <ul>
                    {
                        data.discription.map((item, index)=>{
                            return <li key={`list-index${index}`}>{item}</li>
                        })
                    }
                </ul>
            </div>
            <div className="cart-buy">
                <div className="cart-time">
                    <div className="cart-time_box">
                       <span>{timeRemaining.hours}</span>
                       <span>Годин</span>    
                    </div>
                    <div className="cart-time_box">
                        <span>{timeRemaining.minutes}</span>
                        <span>Хвилин</span>    
                    </div>
                    <div className="cart-time_box">
                        <span>{timeRemaining.seconds}</span>
                        <span>Секунд</span>
                    </div>
                </div>
                <div className="cart-cost">
                    <div className="cart-cost_case flex-colum">
                
                        <span>звичайна ціна:</span>
                        <span><span>{data.cost}</span>грн</span>
                    </div>
                    <div className="cost-icon">
                        <img src={Procent} alt="" />
                    </div>
                    <div className="cart-cost_case flex-colum">
                        <span>ціна за акція:</span>
                        <span>{priceAfterDiscount.toFixed(0)}грн</span>
                    </div>
                </div>
                

                <Button className="buy-button" style={{background:'#ffbc1a'}} variant="contained" color="secondary">
                    Замовити зараз
                </Button>
            </div>
        </div>
    );
}