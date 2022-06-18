import React,{useState} from "react";
import { Login } from './screens/Login'
import { Pricing } from './screens/Pricing'
import {Loading } from './components/Loading'

function App() {

  const [login, setLogin] = useState();
  const [activeIndex, setActiveIndex] = useState(0);
  const [loader, setLoader] = useState(false);

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
    setTimeout(() => {
      setLogin(true);
      setLoader(false);
    }, 2000)
  }

  const handleOnClickPrice = (index) => {
    const price = priceList[index - 1];
    setActiveIndex(index);
    console.log(price);
  }

  const handleOnClickTopup = () => {

    if (activeIndex > 0) {
      const price = priceList[activeIndex - 1];
      console.log(price);
      setLoader(true);
    }

  }

  return (
    <div className="container">

      <div className="absolute -top-36 -left-40 w-72 h-72 bg-blue-200 rounded-full overflow-hidden z-0"></div>

      {loader ? <Loading label="Please wait..." /> : null}

      {login ?
        <Pricing
          priceList={priceList}
          onClick={handleOnClickPrice}
          activeIndex={activeIndex}
          onClickTopup={handleOnClickTopup}
        /> :
        <Login
          onLogin={handleLogin}
        />
      }

    </div>
  );
}

export default App;
