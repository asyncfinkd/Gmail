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
import db from "../../../../../../lib/firebase.prod";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";

export default function SigninForm({ setUser, setFirstPage }) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [emailOrPhoneError, setEmailOrPhoneError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const EmailOrPhoneRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();

  const identification = () => {
    if (!emailOrPhone) {
      setEmailOrPhoneError(true);
      EmailOrPhoneRef.current.focus();
      setNotFound(false);
    } else {
      var x = emailOrPhone.replace("@gmail.com", "");
      setEmailOrPhoneError(false);
      db.collection("users").onSnapshot((querySnapshot) => {
        querySnapshot.docs.map((user) => {
          if (user.data().gmail == `${x}@gmail.com`) {
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
                            <FormContainer__createAccount
                              onClick={() => setShowModal(!showModal)}
                            >
                              Create account
                              {showModal && (
                                <>
                                  <div
                                    style={{
                                      backgroundColor: "transparent",
                                      width: "100%",
                                      height: "100vh",
                                      position: "fixed",
                                      top: "0",
                                      left: "0",
                                      cursor: "auto",
                                    }}
                                    onClick={() => {
                                      setShowModal(!showModal);
                                    }}
                                  ></div>
                                  <motion.div
                                    class="modal__popup"
                                    style={{
                                      color: "#202124",
                                      background: "#fff",
                                      maxWidth: "256px",
                                      maxHeight: "112px",
                                      borderRadius: "2px",
                                      opacity: "1",
                                      outline: "1px solid transparent",
                                      zIndex: "2000",
                                      boxShadow:
                                        "0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%), 0 5px 5px -3px rgb(0 0 0 / 20%)",
                                      transition:
                                        "left .2s  cubic-bezier(0.0,0.0,0.2,1) ,max-width .2s  cubic-bezier(0.0,0.0,0.2,1) ,max-height .2s  cubic-bezier(0.0,0.0,0.2,1) ,opacity .05s linear,top .2s cubic-bezier(0.0,0.0,0.2,1)",
                                      position: "fixed",
                                      marginTop: "10px",
                                    }}
                                    transition={{ duration: 0.3 }}
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                  >
                                    <div
                                      className="modal__popup"
                                      style={{
                                        maxWidth: "256px",
                                        maxHeight: "112px",
                                        overflowX: "hidden",
                                        overflowY: "auto",
                                      }}
                                    >
                                      <div
                                        className="modal__resp"
                                        style={{
                                          width: "256px",
                                          height: "auto",
                                          minWidth: "256px",
                                          float: "left",
                                          padding: "16px 0",
                                        }}
                                      >
                                        <span
                                          className="hover"
                                          onClick={() => {
                                            history.push("/signup/v2");
                                          }}
                                          style={{
                                            color: "#222",
                                            cursor: "pointer",
                                            display: "block",
                                            outline: "none",
                                            overflow: "hidden",
                                            padding: "0 24px",
                                            position: "relative",
                                          }}
                                        >
                                          <div
                                            style={{
                                              color: "#202124",
                                              display: "flex",
                                              fontSize: "14px",
                                              fontWeight: "400",
                                              lineHeight: "40px",
                                              height: "40px",
                                              position: "relative",
                                              whiteSpace: "nowrap",
                                            }}
                                          >
                                            <div
                                              style={{
                                                minWidth: "0",
                                                flexGrow: "1",
                                              }}
                                            >
                                              For myself
                                            </div>
                                          </div>
                                        </span>
                                        <span
                                          className="hover"
                                          style={{
                                            color: "#222",
                                            cursor: "pointer",
                                            display: "block",
                                            outline: "none",
                                            overflow: "hidden",
                                            padding: "0 24px",
                                            position: "relative",
                                          }}
                                        >
                                          <div
                                            style={{
                                              color: "#202124",
                                              display: "flex",
                                              fontSize: "14px",
                                              fontWeight: "400",
                                              lineHeight: "40px",
                                              height: "40px",
                                              position: "relative",
                                              whiteSpace: "nowrap",
                                            }}
                                          >
                                            <div
                                              style={{
                                                minWidth: "0",
                                                flexGrow: "1",
                                              }}
                                            >
                                              To manage my business
                                            </div>
                                          </div>
                                        </span>
                                      </div>
                                    </div>
                                  </motion.div>
                                </>
                              )}
                            </FormContainer__createAccount>
                          </div>
                        </div>
                      </FormContainer__FooterButtons>
                    </FormContainer__Footer>
                  </span>
                </div>
              </div>
            </FormSectionContent>
          </FormSection>
        </span>
      </form>
    </>
  );
}
