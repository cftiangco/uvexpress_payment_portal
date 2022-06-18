import React,{useRef,useEffect} from "react";

export const Paypal = ({amount}) => {

    const paypal = useRef();
    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data,actions,err) => {
                return actions.order.create({
                    intent:"CAPTURE",
                    purchase_units:[
                        {
                            description:"Cool Looking table",
                            amount: {
                                currency_code:"PHP",
                                value:amount,
                            }
                        }
                    ]
                })
            },
            onApprove: async (data,actions) => {
                const order = await actions.order.capture();
                console.log(`my order:`,order)
            },
            onError:(err) => {
                console.log(`error`,err);
            }
        }).render(paypal.current)
    },[amount]);

    return (
        <div className="flex justify-center w-full h-screen items-center">
            <div ref={paypal}></div>
        </div>
    )
}