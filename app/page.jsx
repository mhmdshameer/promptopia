import Feed from "/components/Feed";
import React from "react";

const Home = () => {
  return (
    <section className="w-full text-center">
      <h1 className=" head_text text-center">
        discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered prompts</span>
      </h1>
      <p className="mt-5 text-lg text-gray-600 sm:text-xl  text-center ">
        promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
      </p>
      <Feed/>
    </section>
  );
};

export default Home;
