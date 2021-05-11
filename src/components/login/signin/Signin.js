import React, { useState } from "react";
import SigninFirstPage from "./pages/first/SigninFirstPage";
import SigninSecondPage from "./pages/second/SigninSecondPage";

export default function Signin() {
  const [firstPage, setFirstPage] = useState(true);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <>
      {firstPage ? (
        <SigninFirstPage setFirstPage={setFirstPage} setLoading={setLoading} loading={loading} setUser={setUser} />
      ) : (
        <SigninSecondPage
          name={user.name}
          closeSecondPage={() => setFirstPage(true)}
          gmail={user.gmail}
          userPassword={user.password}
        />
      )}
    </>
  );
}
