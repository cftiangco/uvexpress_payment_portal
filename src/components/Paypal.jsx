import React, { useRef, useEffect } from "react";
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const Paypal = ({ amount, passengerId, token,onClickBack,onSuccess}) => {
    const paypal = useRef();

    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: "Cool Looking table",
                            amount: {
                                currency_code: "PHP",
                                value: amount,
                            }
                        }
                    ]
                })
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                axios.post(`${API_URL}topup`, {
                    passenger_id: passengerId,
                    amount: amount,
                },
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    }).then(function (response) {
                        onSuccess();
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error.response.data);
                    });
                    console.log(`my order:`, order)
            },
            onError: (err) => {
                console.log(`error`, err);
            }
        }).render(paypal.current)
    }, [amount, token, passengerId,onSuccess]);

    return (
        <div className="flex justify-center flex-col text-center h-screen align-items-center">
            <div ref={paypal} className="w-screen block"></div>

            <button 
                className={'text-blue-500 font-bold'}
                onClick={onClickBack}
            >Go Back</button>
        </div>
    )
}