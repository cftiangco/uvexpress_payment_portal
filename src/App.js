import React, { useState, useEffect } from "react";
import { Login } from './screens/Login'
import { Pricing } from './screens/Pricing'
import { Paypal } from './components/Paypal'
import { Loading } from './components/Loading'
import axios from 'axios';
import { Greeting } from "./components/Greeting";

function App() {

  const [activeIndex, setActiveIndex] = useState(0);
  const [loader, setLoader] = useState(false);
  const [page, setPage] = useState("Login");
  const [amount, setAmount] = useState(0);
  const [token, setToken] = useState("");
  const [passenger, setPassenger] = useState({});
  const [balance,setBalance] = useState(0);
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
    setLoader(true);

    axios.post(`${API_URL}login`, {
      username: username,
      password: password,
    })
      .then(function (response) {
        console.log(response.data)
        const passenger = response.data;
        localStorage.setItem("passenger", JSON.stringify(passenger.data));
        localStorage.setItem("isLogin", true);
        localStorage.setItem("token", response.data.token);
        setToken(passenger.token);
        setPassenger(passenger.data);
        setPage("Pricing");
        setLoader(false);
      })
      .catch(function (error) {
        console.log(error.response.data);
        setLoader(false);
        alert("Incorrect Username or Password");
      });

  }

  const handleOnClickPrice = (index) => {
    setActiveIndex(index);
  }

  const handleOnClickTopup = () => {

    if (activeIndex > 0) {
      const result = priceList[activeIndex - 1];
      setAmount(result.price);
      setPage("Checkout");
    }

  }

  const handleOnClickBack = () => {
    setPage('Pricing');
  }

  const handleOnLogoutClick = () => {
    setLoader(true);
    axios.post(`${API_URL}logout`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }).then(function (response) {
      console.log(response);
      localStorage.clear();
      setToken('')
      setPassenger({});
      setPage('Login');
      setLoader(false);
    })
      .catch(function (error) {
        console.log(error.response.data);
        setLoader(false);
      });
  }

  const getBalance = () => {
    if(localStorage.getItem('isLogin')) {
      axios.get(`${API_URL}balance/${passenger.id }`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        setBalance(response.data.data);
      }).catch(error => {
        console.log(error);
      });
    }
  }

  const handleOnSuccess = () => {
    setPage('Pricing');
    setActiveIndex(0);
    alert("You have successfully Top-up")
  }

  useEffect(() => {
      getBalance();
  })

  useEffect(() => {
    if (Boolean(localStorage.getItem('isLogin'))) {
      setPassenger(JSON.parse(localStorage.getItem('passenger')));
      setToken(localStorage.getItem('token'));
      setPage('Pricing');
    }
  }, [])

  return (
    <div className="container-xl">

      {token !== "" ? (<Greeting passengerName={passenger.first_name} onLogoutClick={handleOnLogoutClick} />) : null}

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
          balance={balance}
        />
      )}

      {page === "Checkout" && (
        <Paypal
          amount={amount}
          passengerId={passenger.id}
          token={token}
          onClickBack={handleOnClickBack}
          onSuccess={handleOnSuccess}
        />
      )}

    </div>
  );
}

export default App;
