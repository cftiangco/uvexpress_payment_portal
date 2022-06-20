import React from "react";
import { LogoutButton } from "./LogoutButton";

export const Greeting = ({passengerName,onLogoutClick}) => {
    return (
      <div className="flex justify-end m-3 relative z-5 text-gray-600 font-semibold">
        <h3>Hi {passengerName}!</h3>
        <LogoutButton onLogoutClick={onLogoutClick}/>
      </div>
    )
}