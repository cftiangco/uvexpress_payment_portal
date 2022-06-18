import React from "react";

export const CheckOutButton = ({ label, isActive, onClick }) => {
    return (
        <button type="button"
            className={`${isActive ? 'bg-blue-500 text-white' : 'bg-gray-400 text-gray-300'} w-80 mt-5  font-bold rounded-xl h-10 shadow-lg `}
            onClick={onClick}
        >{label}</button>
    );
}