import React, { useRef, useState } from "react";
import {
  FormSection,
  FormSectionContent,
  FormContainer__Footer,
  FormContainer__FooterButtons,
  FormContainer__NextButton,
  FormContainer__createAccount,
} from "../../../styles/SigninStyle";

export default function SigninSecondForm({ userPassword }) {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordWrong, setPasswordWrong] = useState(false);
  const PasswordRef = useRef();

  const identification = () => {
    if (!password) {
      setPasswordError(true);
      setPasswordWrong(false);
      PasswordRef.current.focus();
    } else if (userPassword != password) {
      setPasswordError(false);
      setPasswordWrong(true);
    } else {
      setPasswordError(false);
      setPasswordWrong(false);
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
          <FormSection style={{ marginTop: "25px" }}>
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
                    type={showPassword ? "text" : "password"}
                    ref={PasswordRef}
                    className={
                      passwordError || passwordWrong
                        ? "form__input error__input"
                        : "form__input"
                    }
                    placeholder=" "
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoFocus
                  />
                  <label
                    for=""
                    className={
                      passwordError || passwordWrong
                        ? "form__label error__label"
                        : "form__label"
                    }
                  >
                    Enter your password
                  </label>
                </div>
                {passwordError && (
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
                    Enter a password
                  </div>
                )}

                {passwordWrong && (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "#d93025",
                      fontSize: "12px",
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
                    Wrong password. Try again or click 'Forgot password' to
                    reset it.
                  </div>
                )}

                <div className="padding-none-render">
                  <div style={{ marginTop: "-5px" }}>
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
                                  onClick={() => setShowPassword(!showPassword)}
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
            </FormSectionContent>
          </FormSection>
        </span>
      </form>
    </>
  );
}
