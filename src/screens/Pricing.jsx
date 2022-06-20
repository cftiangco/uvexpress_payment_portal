import React from "react";
import { BalanceView } from "../components/BalanceView";
import { PriceCard } from "../components/PriceCard";
import { CheckOutButton } from "../components/CheckOutButton";

export const Pricing = ({ priceList, onClick, activeIndex, onClickTopup,balance }) => {
    return (
        <div className="flex flex-col h-screen items-center justify-center mx-3">
            <BalanceView balance={balance} />
            <div className="grid grid-cols-2 gap-2">
                {priceList.map((price, index) =>
                    <PriceCard
                        key={index}
                        data={price}
                        onClick={onClick}
                        activeIndex={activeIndex}
                    />
                )}

            </div>

            <CheckOutButton
                label={"TOP UP"}
                isActive={activeIndex > 0 ? true : false}
                onClick={onClickTopup}
            />

        </div>
    );
}