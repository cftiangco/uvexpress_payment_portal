import React from 'react'

export const  MyButton = ({ label, onClick, value }) => {
    return (
        <button
            type="button"
            className={'shadow w-full py-3 bg-blue-400 rounded-md font-bold text-white'}
            onClick={onClick}
            value={value}
        >
            {label}
        </button>
    )
}
