import { createContext ,useState, useEffect } from "react";

const AuthContext = createContext({ isLoggedIn: false , onLogout: () => {

}
, onLogin: (email, password) => {
  console.log("onLogin")
  
}

});

export const AuthContextProvider = (props) => {
const [isLoggedIn, setIsLoggedIn] = useState(false);


useEffect(() => {
  const userInfo = localStorage.getItem("isLoggedIn");

  if (userInfo === "1") {
    setIsLoggedIn(true);
  }
}, []);

const loginHandler = (email, password) => {
  localStorage.setItem("isLoggedIn", "1");
  setIsLoggedIn(true);
};

const logoutHandler = () => {
  localStorage.removeItem("isLoggedIn");
  setIsLoggedIn(false);
};

return ( 
<AuthContext.Provider  
value={{ 
  isLoggedIn: isLoggedIn, 
  onLogout: logoutHandler,  
  onLogin: loginHandler
}} >
  {props.childred}
  </AuthContext.Provider>
  );
};

export default AuthContext;
