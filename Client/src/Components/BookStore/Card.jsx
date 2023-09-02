import React from "react";
import { useState } from "react";
import DetailCard from "../BookStore/DetailCard";

const Card = ({ book }) => {

    const [show, setShow] = useState(false);
    const [bookItem, setItem] = useState();
    console.log(book)
    return (
        <>
            {book.map((item) => {
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                if (thumbnail != undefined && amount != undefined) {
                    return (
                        <>
                        <div className="bg-gray-200 p-2 m-1 duration-[0.5s] hover:shadow-sm hover:drop-shadow-sm hover:scale-90 rounded-xl" onClick={() => { setShow(true); setItem(item) }}>
                            <img className="w-full h-56 rounded-xl " src={thumbnail} alt="" />
                            <h3 className="m-2 text-xl font-semibold">{item.volumeInfo.title}</h3>
                            <p className="m-2">&#8377;{amount}</p>
                            <button className="mx-2 bg-[#d946ef] hover:bg-[#e879f9] rounded-xl text-white w-11/12 text-center py-3">Check Details</button>
                        </div>
                         <DetailCard show={show} item={bookItem} onClose={()=>setShow(false)}/>
                         </>
                    )
                }
            })}

        </>
    )
}
export default Card;