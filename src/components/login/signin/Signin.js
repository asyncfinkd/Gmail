import React, { useState } from "react";
import SigninFirstPage from "./pages/first/SigninFirstPage";
import SigninSecondPage from "./pages/second/SigninSecondPage";

export default function Signin() {
  const [firstPage, setFirstPage] = useState(true);
  const [user, setUser] = useState([]);

  return (
    <>
      {firstPage ? (
        <SigninFirstPage setFirstPage={setFirstPage} setUser={setUser} />
      ) : (
        <SigninSecondPage
          name={user.name}
          closeSecondPage={() => setFirstPage(true)}
          gmail={user.gmail}
        />
      )}
    </>
  );
}
