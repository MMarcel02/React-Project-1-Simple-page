import React from "react";
import Logo from "../assets/logo.png"

export default function NavBar () {
    return (
        <nav className="nav-bar">
            <img src={Logo} ></img>
            <h3>ReactFacts</h3>
            <h4>React Course - Project 1</h4>
        </nav>
    )
}