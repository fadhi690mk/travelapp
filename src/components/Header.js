import React from 'react'
import logo_img from "./assets/images/logo.svg"
import { Link } from 'react-router-dom'
import styled from "styled-components"
import user from './assets/images/user.svg'


const Header = () => {
  return (
    <>
        <Headery>
          <Logobox href="/" >
            <Logoimg src={logo_img} alt='logo'/>
          </Logobox>
          <Navy>
            <Loginbtn>
              <Loginbtnuser src={user}/>Login
            </Loginbtn>
          </Navy>
        </Headery>
    </>
  )
}

export default Header

const Headery=styled.header`
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  height: 16vh;
  width: 100%;
  padding: 5vh 5%;
`;
const Logobox=styled.a`
  width: 10%;
  height: 6vh;`;
const Logoimg=styled.img`
  width: 100%;
  margin: auto;`;
const Navy=styled.nav`
  width: 10%;
  height: 6vh;`;            
const Loginbtn=styled.button`
  width: 100%;
  height: 6vh;
  font-size: 1em;
  background-color: rgb(0, 88, 204);
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  `;
const Loginbtnuser=styled.img`
  height:1em;
  width:1em;
  margin: auto 0.5em;`;