import React from "react";
import Header from"../Header/Main"
import { Outlet } from "react-router-dom";
import "./landing.css"
import MainLanding from "./MainLanding";
function Landing() {
  return (
    <div className="Landing-Layout">
        <Header/>
        <div  className="grids">
            <MainLanding/>
        </div>
    </div>
  )
}

export default Landing