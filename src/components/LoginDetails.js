import React, { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
const LoginDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setAuthUser(authUser);
        console.log(authUser, "--------------------");
      } else {
        setAuthUser(null);
        console.log("user not logged in");
      }
    });
  }, []);

  return <div>{authUser ? "user logged in" : "user logged out"}</div>;
};

export default LoginDetails;
