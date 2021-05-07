import React, { useState, useRef } from "react";
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
import db from "../../../../../lib/firebase.prod";

export default function SigninForm({ setUser, setFirstPage }) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [emailOrPhoneError, setEmailOrPhoneError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const EmailOrPhoneRef = useRef();

  const identification = () => {
    if (!emailOrPhone) {
      setEmailOrPhoneError(true);
      EmailOrPhoneRef.current.focus();
      setNotFound(false);
    } else {
      setEmailOrPhoneError(false);
      db.collection("users").onSnapshot((querySnapshot) => {
        querySnapshot.docs.map((user) => {
          if (user.data().gmail == emailOrPhone) {
            setUser(user.data());
            setFirstPage(false);
            setNotFound(false);
          } else {
            setNotFound(true);
            setEmailOrPhoneError(false);
          }
        });
      });
    }
  };

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
                    className={
                      emailOrPhoneError || notFound
                        ? "form__input error__input"
                        : "form__input"
                    }
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    ref={EmailOrPhoneRef}
                    placeholder=" "
                    autoFocus
                  />
                  <label
                    for=""
                    className={
                      emailOrPhoneError || notFound
                        ? "form__label error__label"
                        : "form__label"
                    }
                  >
                    Email or phone
                  </label>
                </div>
                {emailOrPhoneError && (
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
                    Enter an email or phone number
                  </div>
                )}

                {notFound && (
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
                )}
                <div
                  className={
                    emailOrPhoneError || notFound
                      ? "padding-error-render"
                      : "padding-none-render"
                  }
                >
                  <FormContent__Button type="button">
                    Forgot email?
                  </FormContent__Button>
                  <span>
                    <LearnMoreContainer>
                      <div
                        style={{
                          paddingTop: "9px",
                          paddingBottom: "3px",
                        }}
                      >
                        Not your computer? Use Guest mode to sign in privately.{" "}
                        <LearnMoreContainer__Link href="https://support.google.com/chrome/answer/6130773?hl=en-GB">
                          Learn more
                        </LearnMoreContainer__Link>
                      </div>
                    </LearnMoreContainer>
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
                              <FormContainer__NextButton
                                type="submit"
                                onClick={() => identification()}
                              >
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
                            <FormContainer__createAccount>
                              Create account
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
