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
      <p>LOG IN</p> 
    </div>
  )

}

function Signin() {
  return (
    <div>
      <p>SIGN IN</p> 
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
      <div>SIGN IN </div>
    </div>
  )

}

function Asktologin() {
  return (
    <div>
        <div>LOG IN </div>
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

function Hodora (){
  return (
    <div>
      <p>Melofi</p>
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

function Sideimage() {
  return (
    <>
      <img src={sideimage} className="Sideimage" alt="Sideimage" />
    </>
  );
}



export { Username, Password, Log, Signin, Asked, Asktosignin, Asktologin, Asked2, Hodora, Logo, Sideimage };


