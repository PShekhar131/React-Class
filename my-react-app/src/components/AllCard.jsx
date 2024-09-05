import React, {useState} from "react";
import DisplayCard from "./DispayCard";
const CardAllImg = () =>{
    const [cardData , setCardData] = useState([
        {
            imgsrc : 'https://www.trancehomelinen.in/cdn/shop/files/cotton-cushion-covers-for-sofa-and-diwan-pillow-covers-damask-dori-red-and-set-of-5-trance-home-linen-4.jpg?v=1707329159&width=1080' ,
            alttext : 'Cushion Cover',
            imgtext : 'Cushion Cover'
        }
    ]
    )
    
    return(
        <>
        {/* {
            cardData.map((item)=>{
                return(
                    <DisplayCard  image={item.imgsrc} alttext={item.alttext} imgtext={item.imgtext}/>
                )
            })
        } */}
        <DisplayCard image={cardData.imgsrc}/>
        </>
        
        
    )
}

export default CardAllImg;

