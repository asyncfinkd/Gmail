import React from "react";
import { Condition__Error } from "../../components/login/signup/styles/SignupStyles";

export default function SignupError({ condition, text, renderProps, childProps }) {
    return(
        <>
            {condition && (
                <Condition__Error style={childProps}>
               <svg
                  aria-hidden="true"
                  fill="currentColor"
                  focusable="false"
                  style={renderProps}
                  width="16px"
                  height="16px"
                  viewBox="0 0 24 24"
                  xmlns="https://www.w3.org/2000/svg"
               >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
              </svg>
                {text}
              </Condition__Error>
            )}
        </>
    )
}