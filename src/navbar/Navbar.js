import React, {useState, useEffect, useRef}  from "react";
import './navbar.css';
 import logo from '../images/logo.jpg';
 import { useAuth0 } from "@auth0/auth0-react";
 import { Button } from "react-bootstrap";
//  import Login from './Login';




const Navbar = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  // const { logout } = useAuth0();

  const [className, setClassName] = useState('');


  const headerRef = useRef(null);
  

    const headerFunc = () => {
        if(document.body.scrollTop > 70 || document.documentElement.scrollTop > 70 ){
            headerRef.current.classList.add('sticky__header')
        }else{
            headerRef.current.classList.remove('sticky__header')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', headerFunc);
        return ()=> window.removeEventListener('scroll', headerFunc);
    }, []);
    const remvoe_class = e=>{
     
      setClassName('');
    }
    const handleClick = e=>{
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 70,
        })
        setClassName('d-none');

    };

   


    return (
      <div>
    <header className="header"  ref={headerRef}>
     <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="menu__left">
        <div className="navbar-brand">
            <img src={logo} alt="logo"/>
            <span class="primary-color">Amrutha Sree Varshini <p class="mb-0 text-center">School Of M.A.D.</p></span>
        </div>
        </div>

        

        <button  onClick={remvoe_class} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div  className={'collapse navbar-collapse ' + className}    id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a onClick={handleClick} className='nav-link' aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item">
              <a onClick={handleClick} className="nav-link" href="#About">About Us</a>
            </li>
           
           
            <li className="nav-item">
              <a  onClick={handleClick} className="nav-link" href="#gallery">Gallery</a>
            </li>
            <li className="nav-item">
              <a onClick={handleClick} className="nav-link" href="#contact">Contact Us</a>
            </li>
           {/* {isAuthenticated && (
           <li>
            <p> Welcome to dance school{user.name}</p>
            </li>
    )} */}
            {isAuthenticated ? (
             
          
            <li className="nav-item">
            <a><Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button></a>
    </li>
              )  : (
            
            <li className="nav-item">
           <a> <Button onClick={() => loginWithRedirect()}>Log In</Button></a>
            </li>
              )}
          </ul>
        </div>
      </div>
    </nav>
    {/* <div className="school">
 {isAuthenticated && (
           <li>
            <p> Welcome to dance school {user.name}</p>
            </li>
    )}
    </div> */}
    </header>
   
    </div>
    )
};

export default Navbar;