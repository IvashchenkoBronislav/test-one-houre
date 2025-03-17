import React from "react";
import ItemCart from "./component/item-cart/ItemCart";
import itemIcon from "./asset/35a9d435456f31f0248dcfffedee0a47.webp"
import itemIcon1 from "./asset/5caa71827952684758659dd9f6be9f9a.webp"


const testData =[
    {
        title:'Мереживна накидка',
        img:itemIcon,
        discription:[
            'Якісний гіпералергенний матеріал',
            'Вирінювання, приховування недоліків',
            'Акція: -50грн на другу покупку'
        ],
        time: '2025-03-22T12:00:00', // дата закінчення
        discount:10,
        cost:275
    },
    {
        title:'Мереживна накидка 2',
        img:itemIcon1,
        discription:[
            'Якісний гіпералергенний матеріал',
            'Вирінювання, приховування недоліків',
            'Акція: -50грн на другу покупку'
        ],
        time: '2025-03-21T12:00:00', // дата закінчення
        discount:10,
        cost:200
    }
]

export default function App(){
    return(
        <>
            <div className="cart-conteiner">
                {testData.map((data, index)=>{
                    return(
                        <ItemCart 
                            key={`item-cart-${index}`} 
                            title={data.title} 
                            img={data.img} 
                            discription={data.discription} 
                            time={data.time}
                            discount={data.discount}
                            cost={data.cost}
                        />
                    )

                })}
            </div>
        </>
    )
}