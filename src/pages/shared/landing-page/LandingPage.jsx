import React, { useEffect } from "react";

const LandingPage = () => {
  useEffect(()=>{
    console.log("LandingPage mounted");
    return ()=>{console.log("LandingPage unmounted")}
  },[])
  return <h2 className="home-page-title">Welcome to the Student Manager</h2>;
};

export default LandingPage;
