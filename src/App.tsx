import { Fragment, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FormSubmit from "./components/FormLogin/FormSubmit";
import UserDetails from "./components/UserDetails";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const aboutTxt = "About Us";
  const company = "Tammam";
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    address: "",
    password: "",
    phone: "",
  });
  return (
    <Fragment>
      <Navbar
        company={company}
        aboutTxt={aboutTxt}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
      {!isLoggedIn ? (
        <FormSubmit
          setIsLoggedIn={setIsLoggedIn}
          setUserData={setUserData}
          userData={userData}
        />
      ) : (
        <UserDetails setUserData={setUserData} user={userData} />
      )}
    </Fragment>
  );
}

export default App;
