import React, { useState } from "react";
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import UserManager from "../modules/UserManager";


const Main = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  const setAdminStatus = () => {
    //handle case with no current user to suppress errors
    UserManager.getCurrentUser()
    .then(result => {
      result.isAdmin? 
      setUserIsAdmin(result.isAdmin)
      : setUserIsAdmin(false)
        }
    )
}

  const [hasUser, setHasUser] = useState(isAuthenticated());
  const [userIsAdmin, setUserIsAdmin] = useState(setAdminStatus);

  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
    setAdminStatus()
  };

  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
    setAdminStatus()
  };

  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser} />
      <ApplicationViews hasUser={hasUser} setUser={setUser} setUserIsAdmin={setUserIsAdmin} userIsAdmin={userIsAdmin}/>
    </>
  );
};

export default Main;
