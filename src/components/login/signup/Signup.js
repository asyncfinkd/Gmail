import React, { useState } from "react";
import SignupFirstPage from "./pages/first/SignupFirstPage";
import SignupSecondPage from "./pages/second/SignupSecondPage";

export default function Signup() {
  const [firstPage, setFirstPage] = useState(true);
  return (
    <>
      {firstPage ? (
        <SignupFirstPage setFirstPage={setFirstPage} />
      ) : (
        <SignupSecondPage back={() => setFirstPage(true)} />
      )}
    </>
  );
}
