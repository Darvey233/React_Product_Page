import React, { Component } from 'react'
import Menu from './svg/bars-solid.svg'
import Close from './svg/times-solid.svg'
import CartIcon from './svg/shopping-cart-solid.svg'
import { Link } from 'react-router-dom'
import './css/Header.css'

export class Header extends Component {
  render(){
    
    return (
      <header>
        <div className="menu">
          <img src={Menu} alt="" width="20"/>
        </div>
        <div className="logo">
          <h1><Link to="/">Audi</Link></h1>
        </div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Vehicle</Link></li>
            <li><Link to="/">Contact</Link></li>
            <li><Link to="/">About</Link></li>
            <li className="close">
              <img src={Close} alt="" width="20"/>
            </li>
          </ul>
          <div className="nac-cart">
            <span>0</span>
            <Link to="/cart">
              <img src={CartIcon} alt="" width="20"/>
            </Link>
            
          </div>
        </nav>
      </header>
    )
  }
}

export default Header