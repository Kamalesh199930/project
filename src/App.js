import React from "react";
import StateHooks from "./hooks/StateHooks";
import EffectHooks from "./hooks/EffectHooks";
import header from "./Display";
import "./App.css";
import Header from "./Header";
import Person1 from "./components/Person1";
import Person2 from "./components/Person2";
import Person from "./components/Person";
import { useState } from "react";
import Form from "./components/Form";
import ContextHooks from "./hooks/ContextHooks";
import RefHooks from "./hooks/RefHooks";
import ReducerHooks from "./hooks/ReducerHooks";
import MemoHooks from "./hooks/MemoHooks";
import AddDeleteList from "./components/AddDelete";
import CallBackHooks from "./hooks/CallBackHooks";
import CustomHooks from "./hooks/CustomHooks";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Error from "./Pages/Error";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import NavBar from "./navbarResponse/navbar/NavBar";
import Contact from "./navbarResponse/Contact";
import SignUp from "./navbarResponse/SignUp";
import MainPage from "./navbarResponse/MainPage";
import ProductsHave from "./navbarResponse/ProductsHave";
import AboutUs from "./navbarResponse/AboutUs";

function App() {
  const A = true;
  const B = 10;
  const list = (
    <div className="color">
      <h1>JSX</h1>
    </div>
  );

  const getState = (n) => {
    console.log(n);
  };
  const [multiplier, setMultiplier] = useState(0);
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<ProductsHave />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {header}
      <StateHooks />
      <hr />
      <EffectHooks />
      <hr />
      <ContextHooks />
      <hr />
      <RefHooks />
      <hr />
      <ReducerHooks />
      <hr />
      <input
        type="number"
        value={multiplier}
        onChange={(e) => setMultiplier(Number(e.target.value))}
      />
      <MemoHooks multiplier={multiplier} />
      <hr />
      <CallBackHooks />
      <hr />
      <CustomHooks />
      <hr />
      <AddDeleteList />
      <Person
        name="kamal"
        age={24}
        email="kamal@gmail"
        clildren={["xx", "yy"]}
      />

      <Person
        name="megan"
        age={24}
        email="mega@gmail"
        clildren={["xx", "yy"]}
      />
      <Person
        name="tamil"
        age={26}
        email="tamil@gmail.com"
        children={["hh", "gg"]}
      />
      <hr />
      <Header />
      {A && "true"}
      {A ? "true" : "false"}
      {B > 11 && "true"}

      {list}
      <Form getState={getState} />
      <hr />
      <h1>Higher Order Component</h1>
      <Person1 />
      <Person2 />
      <br />
      <br />
      <hr />
      <h1>Routing using useNavigate, useParams, Routes, Redirecting</h1>
      <BrowserRouter>
        <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/products">Products</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/about">About</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/*">Error</Link>&nbsp;&nbsp;&nbsp;
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <hr />
    </div>
  );
}
export default App;
