import React from "react";


export const BalanceView = ({ balance }) => {
    console.log(`your balance: ${balance}`)
    return (
        <div className={'text-center mb-5'}>
            <h4 className={'text-blue-500 mb-5 font-bold text-xl'}>Current Balance: {balance}</h4>
            <small className="">Please select amount of load</small>
        </div>
    )
}
