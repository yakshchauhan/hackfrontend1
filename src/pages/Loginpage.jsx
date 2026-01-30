import "./Loginpage.css";
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Username, Password, Log, Signin, Asked, Asktosignin, Asktologin, Asked2, Hodora, Logo } from "./Loginpagecomp.jsx";

function Loginpage() {

  return (
    <>
      <div className='background'>

        <div className='Username'>
          <Username />
        </div>

        <div className='Password'>
          <Password/>
        </div>

        <button className="Log" >
          <Log />
        </button>

        <div className='Asked'>
          <Asked />
        </div>

        <div className='LogoText'>
          <Melofi />
        </div>

        <div className='Logo'>
          <Logo />
        </div>

          <div className='Asktosignin'>
            <Asktosignin />
          </div>
        

      </div>
    </>
  );
}

export default Loginpage;
