import React from "react";


export const InputText = ({ placeholder, onChange, type,error }) => {
    return (
        <input type={type}
            className={`bg-gray-200 w-full h-10 rounded p-5 h-12 focus:bg-skyblue-100`}
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}