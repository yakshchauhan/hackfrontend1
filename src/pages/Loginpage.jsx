import "./Loginpage.css";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Username, Password, Log, Signin, Asked, Asktosignin, Asktologin, Asked2, Logo } from "./Loginpagecomp.jsx";

function Loginpage() {

  return (
    <>
      <div className='background'>

        <div className="Containerforinfo">
            
        </div>

        <div className='Username'>
          <Username />
        </div>

        <div className='Password'>
          <Password/>
        </div>

        <div className='Instruction'>
          Login To Your Account
        </div>

        <div className='Log'>
          <Log/>
        </div>

        <div className='Asked'>
          <Asked />
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
