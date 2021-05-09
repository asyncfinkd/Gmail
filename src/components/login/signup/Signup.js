import React, { useState } from "react";
import SignupFirstPage from "./pages/first/SignupFirstPage";

export default function Signup() {
  const [firstPage, setFirstPage] = useState(true);
  return (
    <>
      {firstPage ? (
        <SignupFirstPage setFirstPage={setFirstPage} />
      ) : (
        <p>Hello</p>
      )}
    </>
  );
}
