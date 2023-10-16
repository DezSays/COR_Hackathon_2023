import React from 'react'
import '../../styles/Header.css'
import CORLOGO from '../../assets/Asset+1.png'

const Header = () => {
  return (
    <>
      <navbar className="Navbar">
          <img src={CORLOGO} id="Nav-Brand" alt="" />
      </navbar>
    </>
  )
}

export default Header