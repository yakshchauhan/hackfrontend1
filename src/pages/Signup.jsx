import "./Signup.css";

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Username, Password, Log, Signin, Asked, Asktosignin, Asktologin, Asked2, Logo } from "./Loginpagecomp.jsx";

function Signup() {

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
          Get Started Now
        </div>

        <div className='Signin'>
          <Signin/>
        </div>

        <div className='Asked2'>
          <Asked2 />
        </div>

        <div className='Logo'>
          <Logo />
        </div>

        <Link to={"/Loginpage"}>
        <div className='Asktologin'>
          <Asktologin />
        </div>
        </Link>
        

      </div>
    </>
  );
}

export default Signup;
