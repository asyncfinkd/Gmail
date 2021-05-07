import React from "react";
import {
  FormSection,
  FormSectionContent,
  FormContent__Button,
  LearnMoreContainer,
  LearnMoreContainer__Link,
  FormContainer__Footer,
  FormContainer__FooterButtons,
  FormContainer__NextButton,
  FormContainer__createAccount,
} from "../../../styles/SigninStyle";

export default function SigninSecondForm() {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <span>
          <FormSection>
            <FormSectionContent>
              <div
                style={{
                  width: "370px",
                  margin: "0 auto",
                  maxWidth: "100%",
                }}
              >
                <div class="form__div">
                  <input
                    type="text"
                    className="form__input"
                    placeholder=" "
                    autoFocus
                  />
                  <label for="" className="form__label">
                    Enter your password
                  </label>
                </div>
                {/* {emailOrPhoneError && ( */}
                {/* <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#d93025",
                      fontSize: "13px",
                      textAlign: "center",
                      marginTop: "12px",
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      fill="currentColor"
                      focusable="false"
                      style={{ marginRight: "8px" }}
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                    </svg>
                    Enter an email or phone number
                  </div>
                )} */}

                {/* {notFound && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#d93025",
                      fontSize: "13px",
                      textAlign: "center",
                      marginTop: "12px",
                    }}
                  >
                    <svg
                      aria-hidden="true"
                      fill="currentColor"
                      focusable="false"
                      style={{ marginRight: "8px" }}
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                    </svg>
                    Couldn't find your Google Account
                  </div>
                )} */}
                <div className="padding-none-render">
                  {/* show password is here */}
                  <span>
                    <FormContainer__Footer>
                      <FormContainer__FooterButtons>
                        <div
                          style={{
                            textAlign: "right",
                            flexGrow: "1",
                          }}
                        >
                          <div>
                            <div>
                              <FormContainer__NextButton type="submit">
                                Next
                              </FormContainer__NextButton>
                            </div>
                          </div>
                        </div>
                        <div
                          style={{
                            textAlign: "right",
                            flexGrow: "1",
                          }}
                        >
                          <div>
                            <FormContainer__createAccount
                              style={{ fontWeight: "600" }}
                            >
                              Forgot password?
                            </FormContainer__createAccount>
                          </div>
                        </div>
                      </FormContainer__FooterButtons>
                    </FormContainer__Footer>
                  </span>
                </div>
              </div>
              {/* chance */}
            </FormSectionContent>
          </FormSection>
        </span>
      </form>
    </>
  );
}
