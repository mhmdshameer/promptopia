"use client";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/global.css";

const RootLayoutClient = ({ children }) => {
  return (
    <Provider>
      <div className="main">
        <div className="gradient" />
      </div>
      <main className="app">
        <Nav />
        {children}
      </main>
    </Provider>
  );
};

export default RootLayoutClient;
