import React, { useRef, useState } from "react";
import {
  Container,
  Content,
  Percent,
  PercentContent,
  Hero,
  Validation__Container,
  Validation__ChildContainer,
  Validation__ContainerComponent,
  Validation__ContainerHeader,
  Validation__HeaderTitle,
  Validation__HeaderSubText,
  Form__Container,
  Form__Content,
  SpanSubtitle,
  SecondChild__Container,
  SecondChild__Content,
  SecondChild__Figure,
  SecondChild__Image,
  SecondChild__FigCaption,
} from "./../../styles/SignupStyles";
import {
  FormContainer__Footer,
  FormContainer__FooterButtons,
  FormContainer__NextButton,
  FormContainer__createAccount,
  FooterContainer__footer,
  FooterContainer__footerContent,
  FooterContainer__footerContentUL,
} from "../../../../login/signin/styles/SigninStyle";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import db from "../../../../../lib/firebase.prod";

export default function SignupFirstPage({ setFirstPage }) {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const firstNameRef = useRef();
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const lastNameRef = useRef();
  const [gmail, setGmail] = useState("");
  const gmailRef = useRef();
  const [gmailError, setGmailError] = useState(false);
  const [gmailSecondError, setGmailSecondError] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const [passwordError, setPasswordError] = useState(false);
  const [passwordLengthError, setPasswordLengthError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const confirmPasswordRef = useRef();
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [
    coupleFirstNameLastNameError,
    setCoupleFirstNameLastNameError,
  ] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [gmailThirdError, setGmailThirdError] = useState(false);

  const identification = () => {
    if (!firstName) {
      setFirstNameError(true);
      setPasswordError(false);
      setGmailSecondError(false);
      setCoupleFirstNameLastNameError(false);
      setLastNameError(false);
      setPasswordLengthError(false);
      setConfirmPasswordError(false);
      setGmailThirdError(false);
      setGmailError(false);
      firstNameRef.current.focus();
    } else if (!lastName) {
      setLastNameError(true);
      setGmailSecondError(false);
      setCoupleFirstNameLastNameError(false);
      setPasswordLengthError(false);
      setFirstNameError(false);
      setPasswordError(false);
      setGmailThirdError(false);
      setConfirmPasswordError(false);
      setGmailError(false);
      lastNameRef.current.focus();
    } else if (!gmail) {
      setLastNameError(false);
      setConfirmPasswordError(false);
      setFirstNameError(false);
      setCoupleFirstNameLastNameError(false);
      setPasswordLengthError(false);
      setGmailThirdError(false);
      setGmailError(true);
      setGmailSecondError(false);
      setPasswordError(false);
      gmailRef.current.focus();
    } else if (gmail.length < 6) {
      setGmailSecondError(true);
      setPasswordLengthError(false);
      setGmailError(false);
      setConfirmPasswordError(false);
      setCoupleFirstNameLastNameError(false);
      setGmailThirdError(false);
      setFirstNameError(false);
      gmailRef.current.focus();
      setPasswordError(false);
      setLastNameError(false);
    } else if (!password) {
      setLastNameError(false);
      setFirstNameError(false);
      setCoupleFirstNameLastNameError(false);
      setGmailThirdError(false);
      setGmailSecondError(false);
      setPasswordLengthError(false);
      setConfirmPasswordError(false);
      setGmailError(false);
      setPasswordError(true);
      passwordRef.current.focus();
    } else if (password.length < 8) {
      setGmailThirdError(false);
      setPasswordLengthError(true);
      setGmailSecondError(false);
      setGmailError(false);
      setCoupleFirstNameLastNameError(false);
      setFirstNameError(false);
      setPasswordError(false);
      setConfirmPasswordError(false);
      setLastNameError(false);
      passwordRef.current.focus();
    } else if (!confirmPassword) {
      setConfirmPasswordError(true);
      setPasswordLengthError(false);
      setGmailSecondError(false);
      setGmailError(false);
      setGmailThirdError(false);
      setCoupleFirstNameLastNameError(false);
      setFirstNameError(false);
      setPasswordError(false);
      setLastNameError(false);
      confirmPasswordRef.current.focus();
    } else if (password != confirmPassword) {
      setCoupleFirstNameLastNameError(true);
      setGmailSecondError(false);
      setGmailError(false);
      setGmailThirdError(false);
      setFirstNameError(false);
      setPasswordError(false);
      setPasswordLengthError(false);
      setConfirmPasswordError(false);
      setLastNameError(false);
    } else {
      setGmailSecondError(false);
      setGmailError(false);
      setFirstNameError(false);
      setPasswordError(false);
      setPasswordLengthError(false);
      setConfirmPasswordError(false);
      setCoupleFirstNameLastNameError(false);
      setGmailThirdError(false);
      setLastNameError(false);
      var x = gmail.replace("@gmail.com", "");

      db.collection("users").onSnapshot((querySnapshot) => {
        querySnapshot.docs.map((item) => {
          if (item.data().gmail == `${x}@gmail.com`) {
            setGmailThirdError(true);
            gmailRef.current.focus();
          } else {
            setGmailThirdError(false);
            setFirstPage(false);
          }
        });
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Create your Google Account</title>
      </Helmet>
      <Container className="LZgQXe">
        <Content>
          <Percent>
            <PercentContent></PercentContent>
          </Percent>
          <Hero>
            <Validation__Container>
              <Validation__ChildContainer>
                <div>
                  <div
                    style={{
                      height: "24px",
                      margin: "0 0",
                      overflow: "visible",
                      position: "relative",
                      width: "75px",
                    }}
                  >
                    <div>
                      <svg
                        viewBox="0 0 75 24"
                        width="75"
                        height="24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        class="l5Lhkf"
                      >
                        <g id="qaEJec">
                          <path
                            fill="#ea4335"
                            d="M67.954 16.303c-1.33 0-2.278-.608-2.886-1.804l7.967-3.3-.27-.68c-.495-1.33-2.008-3.79-5.102-3.79-3.068 0-5.622 2.41-5.622 5.96 0 3.34 2.53 5.96 5.92 5.96 2.73 0 4.31-1.67 4.97-2.64l-2.03-1.35c-.673.98-1.6 1.64-2.93 1.64zm-.203-7.27c1.04 0 1.92.52 2.21 1.264l-5.32 2.21c-.06-2.3 1.79-3.474 3.12-3.474z"
                          ></path>
                        </g>
                        <g id="YGlOvc">
                          <path
                            fill="#34a853"
                            d="M58.193.67h2.564v17.44h-2.564z"
                          ></path>
                        </g>
                        <g id="BWfIk">
                          <path
                            fill="#4285f4"
                            d="M54.152 8.066h-.088c-.588-.697-1.716-1.33-3.136-1.33-2.98 0-5.71 2.614-5.71 5.98 0 3.338 2.73 5.933 5.71 5.933 1.42 0 2.548-.64 3.136-1.36h.088v.86c0 2.28-1.217 3.5-3.183 3.5-1.61 0-2.6-1.15-3-2.12l-2.28.94c.65 1.58 2.39 3.52 5.28 3.52 3.06 0 5.66-1.807 5.66-6.206V7.21h-2.48v.858zm-3.006 8.237c-1.804 0-3.318-1.513-3.318-3.588 0-2.1 1.514-3.635 3.318-3.635 1.784 0 3.183 1.534 3.183 3.635 0 2.075-1.4 3.588-3.19 3.588z"
                          ></path>
                        </g>
                        <g id="e6m3fd">
                          <path
                            fill="#fbbc05"
                            d="M38.17 6.735c-3.28 0-5.953 2.506-5.953 5.96 0 3.432 2.673 5.96 5.954 5.96 3.29 0 5.96-2.528 5.96-5.96 0-3.46-2.67-5.96-5.95-5.96zm0 9.568c-1.798 0-3.348-1.487-3.348-3.61 0-2.14 1.55-3.608 3.35-3.608s3.348 1.467 3.348 3.61c0 2.116-1.55 3.608-3.35 3.608z"
                          ></path>
                        </g>
                        <g id="vbkDmc">
                          <path
                            fill="#ea4335"
                            d="M25.17 6.71c-3.28 0-5.954 2.505-5.954 5.958 0 3.433 2.673 5.96 5.954 5.96 3.282 0 5.955-2.527 5.955-5.96 0-3.453-2.673-5.96-5.955-5.96zm0 9.567c-1.8 0-3.35-1.487-3.35-3.61 0-2.14 1.55-3.608 3.35-3.608s3.35 1.46 3.35 3.6c0 2.12-1.55 3.61-3.35 3.61z"
                          ></path>
                        </g>
                        <g id="idEJde">
                          <path
                            fill="#4285f4"
                            d="M14.11 14.182c.722-.723 1.205-1.78 1.387-3.334H9.423V8.373h8.518c.09.452.16 1.07.16 1.664 0 1.903-.52 4.26-2.19 5.934-1.63 1.7-3.71 2.61-6.48 2.61-5.12 0-9.42-4.17-9.42-9.29C0 4.17 4.31 0 9.43 0c2.83 0 4.843 1.108 6.362 2.56L14 4.347c-1.087-1.02-2.56-1.81-4.577-1.81-3.74 0-6.662 3.01-6.662 6.75s2.93 6.75 6.67 6.75c2.43 0 3.81-.972 4.69-1.856z"
                          ></path>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </Validation__ChildContainer>
              <div>
                <div>
                  <Validation__ContainerComponent>
                    <div>
                      <Validation__ContainerHeader>
                        <Validation__HeaderTitle>
                          <span>Create your Google Account</span>
                        </Validation__HeaderTitle>
                        <Validation__HeaderSubText>
                          <span>Continue to Gmail</span>
                        </Validation__HeaderSubText>
                      </Validation__ContainerHeader>
                    </div>
                  </Validation__ContainerComponent>
                </div>
              </div>
              <Form__Container>
                <Form__Content>
                  <div>
                    <div>
                      <form
                        onSubmit={(e) => {
                          e.preventDefault();
                        }}
                      >
                        <div className="identify flex">
                          <div
                            class="form__div width:50"
                            style={{ marginRight: "10px" }}
                          >
                            <input
                              type="text"
                              className={
                                firstNameError
                                  ? "form__input input__small input:width:full error__input"
                                  : "form__input input__small input:width:full"
                              }
                              placeholder=" "
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              ref={firstNameRef}
                              autoFocus
                            />
                            <label
                              for=""
                              className={
                                firstNameError
                                  ? "form__label input__label error__label"
                                  : "form__label input__label"
                              }
                            >
                              First name
                            </label>
                          </div>
                          <div class="form__div width:50">
                            <input
                              type="text"
                              className={
                                lastNameError
                                  ? "form__input input__small input:width:full error__input"
                                  : "form__input input__small input:width:full"
                              }
                              placeholder=" "
                              value={lastName}
                              ref={lastNameRef}
                              onChange={(e) => setLastName(e.target.value)}
                            />
                            <label
                              for=""
                              className={
                                lastNameError
                                  ? "form__label input__label error__label"
                                  : "form__label input__label"
                              }
                            >
                              Last name
                            </label>
                          </div>
                        </div>
                        {firstNameError && (
                          <div
                            style={{
                              display: "flex",
                              color: "#d93025",
                              fontSize: "13px",
                              textAlign: "center",
                              marginTop: "-7px",
                              height: "30px",
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
                            Enter first name
                          </div>
                        )}
                        {lastNameError && (
                          <div
                            style={{
                              display: "flex",
                              color: "#d93025",
                              fontSize: "13px",
                              textAlign: "center",
                              marginTop: "-7px",
                              height: "30px",
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
                            Enter last name
                          </div>
                        )}
                        <div class="form__div mt-3">
                          <input
                            type="text"
                            className={
                              gmailError || gmailSecondError || gmailThirdError
                                ? "form__input input__small w-full email__auth input:width:full error__input"
                                : "form__input input__small w-full email__auth input:width:full"
                            }
                            placeholder=" "
                            value={gmail}
                            onChange={(e) => setGmail(e.target.value)}
                            ref={gmailRef}
                          />
                          <label
                            for=""
                            className={
                              gmailError || gmailSecondError || gmailThirdError
                                ? "form__label input__label error__label"
                                : "form__label input__label"
                            }
                          >
                            Username
                          </label>
                          <span className="input__span">@gmail.com</span>
                        </div>

                        {gmailThirdError && (
                          <div
                            style={{
                              display: "flex",
                              color: "#d93025",
                              fontSize: "13px",
                              textAlign: "center",
                              marginTop: "-7px",
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
                            That username is taken. Try another.
                          </div>
                        )}

                        {gmailError != true && (
                          <>
                            {gmailSecondError != true && (
                              <>
                                {gmailThirdError != true && (
                                  <SpanSubtitle>
                                    You can use letters, numbers & periods
                                  </SpanSubtitle>
                                )}
                              </>
                            )}
                          </>
                        )}
                        {gmailError && (
                          <div
                            style={{
                              display: "flex",
                              color: "#d93025",
                              fontSize: "13px",
                              textAlign: "center",
                              marginTop: "-7px",
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
                            Choose a Gmail address
                          </div>
                        )}
                        {gmailSecondError && (
                          <div
                            style={{
                              display: "flex",
                              alignItems: "flex-start",
                              color: "#d93025",
                              fontSize: "13px",
                              marginTop: "-7px",
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
                            Sorry, your username must be between 6 and 30
                            characters long.
                          </div>
                        )}
                        <div
                          className="identify flex"
                          style={{ paddingTop: "14px" }}
                        >
                          <div
                            class="form__div width:50"
                            style={{ marginRight: "10px" }}
                          >
                            <input
                              type={showPassword ? "text" : "password"}
                              className={
                                passwordError ||
                                passwordLengthError ||
                                coupleFirstNameLastNameError
                                  ? "form__input input__small input:width:full error__input"
                                  : "form__input input__small input:width:full"
                              }
                              placeholder=" "
                              value={password}
                              ref={passwordRef}
                              onChange={(e) => setPassword(e.target.value)}
                            />
                            <label
                              for=""
                              className={
                                passwordError ||
                                coupleFirstNameLastNameError ||
                                passwordLengthError
                                  ? "form__label input__label error__label"
                                  : "form__label input__label"
                              }
                            >
                              Password
                            </label>
                          </div>
                          <div class="form__div width:50">
                            <input
                              type={showPassword ? "text" : "password"}
                              className={
                                confirmPasswordError ||
                                coupleFirstNameLastNameError
                                  ? "form__input input__small input:width:full error__input"
                                  : "form__input input__small input:width:full"
                              }
                              placeholder=" "
                              value={confirmPassword}
                              ref={confirmPasswordRef}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                            />
                            <label
                              for=""
                              className={
                                confirmPasswordError ||
                                coupleFirstNameLastNameError
                                  ? "form__label input__label error__label"
                                  : "form__label input__label"
                              }
                            >
                              Confirm
                            </label>
                          </div>
                        </div>
                        {coupleFirstNameLastNameError && (
                          <div
                            style={{
                              display: "flex",
                              color: "#d93025",
                              fontSize: "13px",
                              textAlign: "center",
                              marginTop: "-7px",
                              height: "35px",
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
                            Those passwords didn't match. Try again.
                          </div>
                        )}
                        {confirmPasswordError && (
                          <div
                            style={{
                              display: "flex",
                              color: "#d93025",
                              fontSize: "13px",
                              textAlign: "center",
                              marginTop: "-7px",
                              height: "35px",
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
                            Enter a confirm password
                          </div>
                        )}
                        {passwordError != true && (
                          <>
                            {passwordLengthError != true && (
                              <>
                                {confirmPasswordError != true && (
                                  <>
                                    {coupleFirstNameLastNameError != true && (
                                      <SpanSubtitle>
                                        Use 8 or more characters with a mix of
                                        letters, numbers & symbols
                                      </SpanSubtitle>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                        {passwordError && (
                          <div
                            style={{
                              display: "flex",
                              color: "#d93025",
                              fontSize: "13px",
                              textAlign: "center",
                              marginTop: "-7px",
                              height: "35px",
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
                            Enter a password
                          </div>
                        )}
                        {passwordLengthError && (
                          <div
                            style={{
                              display: "flex",
                              color: "#d93025",
                              fontSize: "13px",
                              textAlign: "center",
                              marginTop: "-7px",
                              height: "35px",
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
                            Use 8 characters or more for you password
                          </div>
                        )}
                        <div style={{ marginTop: "-10px" }}>
                          <div>
                            <div>
                              <div>
                                <div
                                  style={{
                                    padding: "8px 0 0",
                                    borderColor: "#5f6368",
                                    display: "inline-flex",
                                  }}
                                >
                                  <div
                                    style={{
                                      height: "24px",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      flex: "none",
                                      position: "relative",
                                      width: "24px",
                                    }}
                                    onClick={() =>
                                      setShowPassword(!showPassword)
                                    }
                                  >
                                    <div
                                      style={{
                                        willChange: "unset",
                                        display: "inline-flex",
                                        position: "relative",
                                        flex: "0 0 18px",
                                        width: "18px",
                                        height: "18px",
                                        whiteSpace: "nowrap",
                                        cursor: "pointer",
                                        verticalAlign: "bottom",
                                        padding: "calc((40px - 18px)/2)",
                                      }}
                                    >
                                      <input
                                        type="checkbox"
                                        id="input"
                                        style={{
                                          position: "absolute",
                                          padding: "0",
                                          margin: "0",
                                          cursor: "inherit",
                                          width: "18px",
                                          height: "18px",
                                          border: "2px solid #5f6368",
                                          borderRadius: "2px",
                                          top: "0",
                                          left: "0",
                                        }}
                                      />
                                    </div>
                                  </div>
                                  <div
                                    style={{
                                      padding: "0",
                                      display: "flex",
                                      flex: "0 1 auto",
                                      flexDirection: "column",
                                      justifyContent: "center",
                                      marginLeft: "16px",
                                      alignItems: "flex-start",
                                      width: "100%",
                                    }}
                                  >
                                    <div
                                      style={{
                                        maxWidth: "100%",
                                        paddingTop: "0",
                                        paddingBottom: "0",
                                      }}
                                    >
                                      <label htmlFor="input">
                                        <div style={{ cursor: "pointer" }}>
                                          Show password
                                        </div>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <FormContainer__Footer style={{ marginTop: "50px" }}>
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
                                <FormContainer__createAccount
                                  onClick={() => {
                                    history.push("/");
                                  }}
                                >
                                  Sign in instead
                                </FormContainer__createAccount>
                              </div>
                            </div>
                          </FormContainer__FooterButtons>
                        </FormContainer__Footer>
                      </form>
                    </div>
                  </div>
                </Form__Content>
              </Form__Container>
            </Validation__Container>
            <SecondChild__Container>
              <SecondChild__Content>
                <SecondChild__Figure>
                  <SecondChild__Image src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" />
                  <SecondChild__FigCaption>
                    One account. All of Google working for you.
                  </SecondChild__FigCaption>
                </SecondChild__Figure>
              </SecondChild__Content>
            </SecondChild__Container>
          </Hero>
          <FooterContainer__footer className="form__responsive__component">
            <FooterContainer__footerContent>
              English (United Kingdom)
            </FooterContainer__footerContent>
            <FooterContainer__footerContentUL>
              <li>
                <a
                  href="https://support.google.com/accounts?hl=en-GB"
                  target="_blank"
                >
                  Help
                </a>
              </li>
              <li>
                <a
                  href="https://accounts.google.com/TOS?loc=GE&amp;hl=en-GB&amp;privacy=true"
                  target="_blank"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="https://accounts.google.com/TOS?loc=GE&amp;hl=en-GB"
                  target="_blank"
                >
                  Terms
                </a>
              </li>
            </FooterContainer__footerContentUL>
          </FooterContainer__footer>
        </Content>
      </Container>
    </>
  );
}
