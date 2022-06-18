import React from "react";

export const PriceCard = ({ data, onClick, activeIndex }) => {
    return (
        <div
            className={`p-5 shadow-lg w-40 bg-blue-300 rounded-tl-xl text-white text-center ${data.id === activeIndex ? 'border-4 border-green-300 bg-blue-500 animate-bounce' : null}`}
            onClick={() => onClick(data.id)}
        >{data.description}</div>
    )
}