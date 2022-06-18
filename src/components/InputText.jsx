import React from "react";


export const InputText = ({ placeholder, onChange, type }) => {
    return (
        <input type={type}
            className="border border-blue-400 w-full h-10 rounded p-3"
            placeholder={placeholder}
            onChange={onChange}
        />
    )
}