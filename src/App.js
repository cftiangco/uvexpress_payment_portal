import React, { useState } from "react";
import { Login } from './screens/Login'
import { Pricing } from './screens/Pricing'
import { Paypal } from './components/Paypal'
import { Loading } from './components/Loading'
import axios from 'axios';

function App() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState("Login");
  const [price, setPrice] = useState(0);

  const API_URL = process.env.REACT_APP_API_URL;

  const priceList = [
    { id: 1, description: 'P50.00', price: 50 },
    { id: 2, description: 'P100.00', price: 100 },
    { id: 3, description: 'P200.00', price: 200 },
    { id: 4, description: 'P300.00', price: 300 },
    { id: 5, description: 'P400.00', price: 400 },
    { id: 6, description: 'P500.00', price: 500 },
    { id: 7, description: 'P1,000.00', price: 1000 },
    { id: 8, description: 'P2,000.00', price: 2000 },
  ];

  const handleLogin = (username, password) => {
    console.log(username, password);
    setLoader(true);

      axios.post(`${API_URL}login`, {
        username: username,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        setPage("Pricing");
        setLoader(false);
      })
      .catch(function (error) {
        console.log(error.response.data);
        setLoader(false);
      });
  
  }

  const handleOnClickPrice = (index) => {
    const price = priceList[index - 1];
    setActiveIndex(index);
    console.log(price);
  }

  const handleOnClickTopup = () => {

    if (activeIndex > 0) {
      const result = priceList[activeIndex - 1];
      setPrice(result.price);
      setPage("Checkout");
    }

  }

  return (
    <div className="container">

      <div className="absolute -top-36 -left-40 w-72 h-72 bg-blue-200 rounded-full overflow-hidden z-0"></div>

      {loader ? <Loading label="Please wait..." /> : null}

      {page === "Login" && (
        <Login
          onLogin={handleLogin}
        />
      )}

      {page === "Pricing" && (
        <Pricing
          priceList={priceList}
          onClick={handleOnClickPrice}
          activeIndex={activeIndex}
          onClickTopup={handleOnClickTopup}
        />
      )}

      {page === "Checkout" && (
        <Paypal amount={price} />
      )}

    </div>
  );
}

export default App;
