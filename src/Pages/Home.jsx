import React from "react";
import { Header } from "../Components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <div className="flex items-center justify-center pt-12">
        <img className="w-1/3" src="login.svg" alt="" />
      </div>
      <div className="flex items-center justify-center pt-12">
        <p className="text-4xl">
          You are not signed in. Sign in or Register to continue
        </p>
      </div>
    </>
  );
};
export default Home;
