import React from 'react'
import { NavLink } from 'react-router-dom'
import { Headeritems } from './HeaderItems'
import "./Header.css"
function Header() {
  return (
    <div className="Header-Main">
       <div className="Header-Inner">
        <div className="Header-Container-1">
            <div style={{textAlign:"center"}}>
                Code Dynamos
            </div>
        </div>
        <div className="Header-Container-2">
            {Headeritems.map((item,index)=>(<NavLink to={item.link} className="Nav-Link">    <div style={{textAlign:"center"}}>{item.item}</div></NavLink>))}
            <button className="Header-Button">Sign Up</button>
        </div>
       </div>
    </div>
  )
}

export default Header