import React, { useState, useEffect,useContext } from 'react';
import { Route, Link } from 'react-router-dom';
import PrivateRoute from "./Components/SecretData/PrivateRoute"

import Login from './Components/Login/Login'

import Home from './Components/LandingPage/Home'
import { TokenContext } from './Components/Context/Contexts';
import SignUp from './Components/SignUp/SignUp';
import styled from 'styled-components';
import Swal from 'sweetalert2'
const NavbarContainer = styled.div`
  width: 100%;
  height: 65px;
  background: #232323;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0.5rem 2.4rem;
`;

const NavLogo = styled.div`
  font-size: 3rem;
  color: #f3e367;
  margin-right: auto;
  font-family: "Ubuntu", sans-serif;
`;

const NavItems = styled.div`
  width: 45%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Varela Round", sans-serif;
`;

const NavItem = styled(Link)`
  color: #c9c9c9;
  text-transform: uppercase;
  transition: color 200ms ease-out;
  padding: 0.5rem;
  font-size: 1.6rem;
  text-decoration: none;
  :hover {
    color: white;
    cursor: pointer;
  }
`;

const NavCta = styled(NavItem)`
  color: #f3e367;
  font-style: italic;
  :hover {
    color: #f7eb95;
    cursor: pointer;
  }
`;
const Logout =styled.button`
width:75px;
height:50px;
background-color:#f7eb95;
:hover {
  cursor: pointer;
  background-color: #f3e367;
}
`
function App() {
  const [token, setToken] = useState(false)

  useEffect(() => {
    setToken(localStorage.getItem('token'))
    console.log('test')
  }, [token]);

  // console.log('Token u there brother?: ', token);

  return (
    <div >
      <header >
      
        <NavbarContainer>
          <NavItems>
        <NavItem  to='/'>
         Home   
        </NavItem>
        <NavItem  to="/Contact">
        Contact
        </NavItem>
        <NavItem to="/Services">
        Services
        </NavItem>
        <NavItem to="/SignUp">
            Sign Up   
          </NavItem>
        {token === null ? (
          <NavItem to='/login'>
            Login   
          </NavItem>

        ) : (
          <NavCta to='/login'>
            <Logout className="btn" type="submit" onClick={() => {
              localStorage.removeItem('token')
              setToken()}} >
              Logout
            </Logout>
          </NavCta>
          
        )}
        </NavItems>
</NavbarContainer>

      </header>
      <div>
      {/* export const TokenContext = createContext(); */}
        <TokenContext.Provider value={{token,setToken}}>
        <PrivateRoute exact path='/' component={Home}
        //  token ={token} 
         />
         <Route exact path="/Contact" />
         <Route exact path="/Services"/>
        <Route exact path='/login' render={(props) => <Login {...props} setToken={setToken} />} />
        <Route exact path='/signup' component={SignUp}/>
      
        </TokenContext.Provider>
      </div>
    </div>
  );
  // const handleSubmit =() =>{
  //   Swal.fire({
  //     position: 'center',
  //     type: 'success',
  //     title: 'Logging out!',
  //     showConfirmButton: false,
  //     timer: 2500
  //   })
  // }
}

export default App;

