import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SendMoneyScreen from "./components/SendMoneyScreen";
import MyAccountScreen from "./components/MyAccountScreen";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <div className="app-body">
          <div className="row">
            <SendMoneyScreen />
            <MyAccountScreen />
          </div>
        </div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
