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
  NotFoundContainer,
  FormSectionContainer__Utils,
  Form__ButtonContainer,
  ShowModal__Container,
  ModalPopup__Content,
  __ModalPopup,
  ModalPopup__Span,
  ModalPopup__SpanChild,
  ModalPopup__Utils,
} from "../../../styles/SigninStyle";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { Input, Label } from "../../../../../../constants/signin/SigninForm";
import { SigninQuery } from "../../../../../../query/signin/SigninFormQuery";
import { FormCreateAccountRoutes } from "../../../../../../map/signin/SigninFormMap";

export default function SigninForm({ setUser, setFirstPage, setLoading }) {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [emailOrPhoneError, setEmailOrPhoneError] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const EmailOrPhoneRef = useRef();
  const [showModal, setShowModal] = useState(false);
  const history = useHistory();
  const __i = 0;
  const __f = 1;

  const identification = () => {
    if (!emailOrPhone) {
      setEmailOrPhoneError(true);
      EmailOrPhoneRef.current.focus();
      setNotFound(false);
    } else {
      var x = emailOrPhone.replace("@gmail.com", "");
      setEmailOrPhoneError(false);
      setLoading(true);
      {
        SigninQuery({
          x,
          setLoading,
          setUser,
          setFirstPage,
          setNotFound,
          setEmailOrPhoneError,
        });
      }
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
              <FormSectionContainer__Utils>
                <div class="form__div">
                  <input
                    type="text"
                    className={
                      emailOrPhoneError || notFound
                        ? `${Input[__f - __f]}`
                        : `${Input[__f]}`
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
                        ? `${Label[__f - __f]}`
                        : `${Label[__f]}`
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
                  <NotFoundContainer>
                    <svg
                      aria-hidden="true"
                      fill="currentColor"
                      style={{ marginRight: "8px" }}
                      width="16px"
                      height="16px"
                      viewBox="0 0 24 24"
                      xmlns="https://www.w3.org/2000/svg"
                    >
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path>
                    </svg>
                    Couldn't find your Google Account
                  </NotFoundContainer>
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
                        <Form__ButtonContainer>
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
                        </Form__ButtonContainer>
                        <Form__ButtonContainer>
                          <div>
                            <FormContainer__createAccount
                              onClick={() => setShowModal(!showModal)}
                            >
                              Create account
                              {showModal && (
                                <>
                                  <ShowModal__Container
                                    onClick={() => {
                                      setShowModal(!showModal);
                                    }}
                                  ></ShowModal__Container>
                                  <motion.div
                                    class="modal__popup animation__motion"
                                    transition={{ duration: 0.3 }}
                                    initial={{ y: -10, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                  >
                                    <ModalPopup__Content className="modal__popup">
                                      <__ModalPopup className="modal__resp">
                                        {FormCreateAccountRoutes.map((item) => {
                                          const { routes, text } = item;
                                          return (
                                            <>
                                              <ModalPopup__Span
                                                className="hover"
                                                onClick={() => {
                                                  history.push(`${routes}`);
                                                }}
                                              >
                                                <ModalPopup__SpanChild>
                                                  <ModalPopup__Utils>
                                                    {text}
                                                  </ModalPopup__Utils>
                                                </ModalPopup__SpanChild>
                                              </ModalPopup__Span>
                                            </>
                                          );
                                        })}
                                      </__ModalPopup>
                                    </ModalPopup__Content>
                                  </motion.div>
                                </>
                              )}
                            </FormContainer__createAccount>
                          </div>
                        </Form__ButtonContainer>
                      </FormContainer__FooterButtons>
                    </FormContainer__Footer>
                  </span>
                </div>
              </FormSectionContainer__Utils>
            </FormSectionContent>
          </FormSection>
        </span>
      </form>
    </>
  );
}
