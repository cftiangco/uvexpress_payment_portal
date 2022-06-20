import React from "react";

export const CheckOutButton = ({ label, isActive, onClick }) => {
    return (
        <button type="button"
            className={`${isActive ? 'bg-blue-500 text-white' : 'bg-gray-400 text-gray-300'} w-80 mt-5  font-bold rounded-xl h-10 shadow-lg  flex justify-center items-center`}
            onClick={onClick}
        >
        {label}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
            </svg>
        </button>
    );
}