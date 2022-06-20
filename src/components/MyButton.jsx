import React from 'react'
export const  MyButton = ({ label, onClick, value }) => {
    return (
        <button
            type="button"
            className={'shadow w-full py-3 bg-blue-400 rounded-md font-bold text-white flex justify-center items-center md:w-1/3'}
            onClick={onClick}
            value={value}
        >
        {label}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
        </button>
    )
}
