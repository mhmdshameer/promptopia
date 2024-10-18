"use client";


import "/styles/global.css";
import Nav from "/components/Nav";
import Provider from "components/Provider";


const RootLayoutClient = ({ children }) => {
  return (
    <Provider>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
        <Nav/>
        {children}
      </main>
    </Provider>
  );
};

export default RootLayoutClient;
