import Plogo from "../assets/logop.jpeg";
import { Link } from 'react-router-dom';





function Username() {
  return (
    <div>
      <p>USERNAME OR EMAIL</p> 
    </div>
  )
}

function Password() {
  return (
    <div>
      <p>PASSWORD</p> 
    </div>
  )
}

function Log() {
  return (
    <div>
      <p>LOGIN</p> 
    </div>
  )

}

function Signin() {
  return (
    <div>
      <p>SIGN UP</p> 
    </div>
  )

}

function Asked() {
  return (
    <div>
      <p>Don't have an Account? </p> 
    </div>
  )

}

function Asktosignin() {
  return (
    <div>
      <div>SIGN UP </div>
    </div>
  )

}

function Asktologin() {
  return (
    <div>
        <div>LOGIN </div>
    </div>
  )

}



function Asked2 (){
  return (
    <div>
      <p>Have an Account? </p>
    </div>

  )

}



function Logo() {
  return (
    <>
      <img src={Plogo} className="Logo" alt="logo" />
    </>
  );
}



export { Username, Password, Log, Signin, Asked, Asktosignin, Asktologin, Asked2,  Logo };


