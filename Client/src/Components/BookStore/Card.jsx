import React, { useState } from "react";
import DetailCard from "../BookStore/DetailCard";

const Card = ({ book }) => {
    // State to manage whether the detail card is shown
    const [show, setShow] = useState(false);
    // State to store the book item for the detail card
    const [bookItem, setItem] = useState();

    return (
        <>
            {/* Map through the 'book' array to render book cards */}
            {book.map((item, index) => {
                // Check if 'item' has a thumbnail image link and price amount
                let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                let amount = item.saleInfo.listPrice && item.saleInfo.listPrice.amount;

                if (thumbnail != undefined && amount != undefined) {
                    return (
                        <div key={index}>
                            <div
                                key={index}
                                className="bg-gray-200 p-2 m-1 duration-[0.5s] hover:shadow-sm hover:drop-shadow-sm hover:scale-90 rounded-xl"
                                onClick={() => { setShow(true); setItem(item) }}
                            >
                                {/* Thumbnail image */}
                                <img className="w-full h-56 rounded-xl" src={thumbnail} alt="" />
                                {/* Book title */}
                                <h3 className="m-2 text-xl font-semibold">{item.volumeInfo.title}</h3>
                                {/* Book price */}
                                <p className="m-2">&#8377;{amount}</p>
                                {/* Button to check details */}
                                <button className="mx-2 bg-[#d946ef] hover:bg-[#e879f9] rounded-xl text-white w-11/12 text-center py-3">Check Details</button>
                            </div>
                            {/* Render the detail card when 'show' is true */}
                            <DetailCard show={show} item={bookItem} onClose={() => setShow(false)} />
                        </div>
                    );
                }
            })}
        </>
    );
};

export default Card;