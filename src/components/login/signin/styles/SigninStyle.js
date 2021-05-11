import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  @media all and (min-width: 601px) {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    position: relative;

    &:before,
    &:after {
      content: "";
      display: block;
      box-flex: 1;
      flex-grow: 1;
      height: 24px;
    }
    &:before {
      min-height: 30px;
    }
    &:after {
      min-height: 24px;
    }
    &:after {
      min-height: 63.9996px;
    }
  }
`;

export const Content = styled.div`
  @media (min-width: 601px) {
    width: 450px;
    border-radius: 8px;
    border: 1px solid #dadce0;
    display: block;
    flex-shrink: 0;
    margin: 0 auto;
    transition: 0.2;
    min-height: 0;
    position: relative;
    max-width: 100%;
  }
`;

const bar1 = keyframes`
  0% {
    left: -35%;
    right: 100%;
  }
  60%,100% {
    left: 100%;
    right: -90%;
  }
`

const bar2 = keyframes`
  0% {
    left: -200%;
    right: 100%;
  }
  60%,100% {
    left: 107%;
    right: -8%;
  }
`

export const Percent = styled.div`
  @media (min-width: 601px) {
  width: 100%;
  height: 6px;
  background-color: #e0e0e0;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  }
`;

export const PercentContent = styled.span`
&::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #1a73e8;
  animation: ${bar1} 2.1s cubic-bezier(0.65, 0.81, 0.73, 0.4) infinite;
}
&::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: #1a73e8;
  animation: ${bar2} 2.1s cubic-bezier(0.16,0.84,0.44,1) infinite;
  animation-delay: 1.15s;
}
`;

export const Hero = styled.div`
  @media (min-width: 601px) {
    height: auto;
    min-height: 500px;
    transition: 0.2s;
    overflow-y: auto;
  }

  padding: 24px 36px;
  overflow: hidden;
  flex-grow: 1;
  min-height: 95vh;
  box-flex: 1;

  @media (min-width: 450px) {
    padding: 48px 40px 36px;
  }
`;

export const OpacityPercent = styled.div`
  @media (min-width: 601px) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: red;
  }
`

export const HeroContent = styled.div`
  /* Nothing */
`;

export const HeroImage = styled.div`
  height: 24px;
  display: flex;
  justify-content: center;
`;

export const HeroImageContent = styled.div`
  height: 24px;
  margin: 0 0;
  overflow: visible
  position: relative;
  width: 75px;
`;

export const ViewContainer = styled.div`
  /* none */
`;

export const ViewContainerContent = styled.div`
  /* none */
`;

export const ViewContainerPresentation = styled.div`
  overflow: hidden;
  margin: auto -24px;
  padding-left: 24px;
  padding-right: 24px;
  @media (min-width: 450px) {
    padding-left: 40px;
    padding-right: 40px;
    margin: auto -40px;
  }
`;

export const ViewContainerPresentation__Header = styled.div`
  text-align: center;

  & h1 {
    color: #202124;
    padding-bottom: 0;
    padding-top: 16px;
    font-size: 24px;
    font-weight: 400;
    line-height: 1.3333;
    margin-top: 0;
    margin-bottom: 0;
    font-family: "Google Sans";
  }
`;

export const ViewContainerPresentation__HeaderContent = styled.div`
  color: #202124;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.5;
  padding-bottom: 0;
  padding-top: 8px;
`;

export const FormContainer = styled.div`
  font-size: 0.1px;
  white-space: nowrap;
  margin: auto -24px;

  @media (min-width: 450px) {
    margin: auto -40px;
  }
`;

export const FormContent = styled.div`
  display: inline-block;
  font-size: 14px;
  padding: 24px 0 0;
  vertical-align: top;
  white-space: normal;
  width: 100%;

  @media (min-width: 450px) {
    border-left-width: 40px;
    border-right-width: 40px;
  }
`;

export const FormSection = styled.section`
  &:last-child {
    margin-bottom: 0;
  }
  &:first-child {
    margin-top: 0;
  }
  margin: 16px 0;
  outline: none;
`;

export const FormSectionContent = styled.div`
  @media (min-width: 450px) {
    margin: auto -40px;
    padding-left: 40px;
    padding-right: 40px;
    margin-top: 10px;
    margin-bottom: 16px;
  }

  margin: auto -24px;
  padding-left: 24px;
  padding-right: 24px;
  margin-top: 10px;
  margin-bottom: 16px;

  &:empty {
    margin-top: 0;
  }
`;

export const FormContent__Button = styled.button`
  border-radius: 4px;
  color: #1a73e8;
  display: inline-block;
  font-weight: 600;
  letter-spacing: 0.25px;
  font-family: "Roboto";
  outline: none;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
  text-align: left;
  border: 0;

  &:focus::after {
    background-color: rgba(26, 115, 232, 0.149);
    border-radius: 2px;
    bottom: -2px;
    content: "";
    left: -3px;
    position: absolute;
    right: -3px;
    top: -2px;
    z-index: -1;
  }
`;

export const LearnMoreContainer = styled.div`
  color: #5f6368;
  font-size: 14px;
  line-height: 1.4286;
  margin: 32px auto 0 auto;
`;

export const LearnMoreContainer__Link = styled.a`
  color: #1a73eb;
  border-radius: 4px;
  letter-spacing: 0.25px;
  outline: 0;
  position: relative;
  font-weight: 600;
  text-decoration: none;

  &:focus::after {
    background-color: rgba(26, 115, 232, 0.149);
    border-radius: 2px;
    bottom: -2px;
    content: "";
    left: -3px;
    position: absolute;
    right: -3px;
    top: -2px;
    z-index: -1;
  }
`;

export const FormContainer__Footer = styled.div`
  display: flex;
  flex-grow: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 33px;
  min-height: 48px;
  padding-bottom: 20px;
  align-items: center;
`;

export const FormContainer__FooterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row-reverse;
`;

export const FormContainer__NextButton = styled.button`
  color: #fff;
  background-color: #1a73e8;
  padding: 0 24px 0 24px;
  font-family: "Google Sans";
  font-size: 0.875rem;
  letter-spacing: 0.0107142857em;
  font-weight: 500;
  text-transform: none;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: none;
  height: 36px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 1px 3px 1px rgb(60 64 67 / 15%);
  }

  &:active {
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%),
      0 2px 6px 2px rgb(60 64 67 / 15%);
  }
`;

export const FormContainer__createAccount = styled.div`
  text-align: left;
  margin-top: 6px;
  border-radius: 4px;
  font-family: "Google Sans";
  font-size: inherit;
  letter-spacing: 0.25px;
  color: #1a73e8;
  outline: none;
  cursor: pointer;
  text-transform: none;
  position: relative;
`;

export const FooterContainer__footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-size: 12px;
  line-height: 1.4;
  padding: 0 24px 14px;

  @media (max-width: 600px) {
    margin-top: -0.5rem;
  }

  @media (max-width: 360px) {
    margin-top: -4rem;
  }

  @media (min-width: 450px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 601px) {
    height: 16.8px;
    padding: 24px 0 0;
    position: absolute;
    width: 100%;
  }
`;

export const FooterContainer__footerContent = styled.div`
  height: 16.8px;
  margin: 8px 0;

  @media (min-width: 601px) {
    margin: 0;
  }
`;

export const FooterContainer__footerContentUL = styled.ul`
  list-style: none;
  padding: 0;
  margin: 8px -16px;

  @media (min-width: 601px) {
    margin: -2px -16px;
  }

  & li {
    display: inline-block;
    margin: 0;
  }

  & li a {
    border-radius: 2px;
    color: #757575;
    display: inline-block;
    margin-top: -6px;
    padding: 6px 16px;
    font-weight: 600;
    transition: background 0.2s;
    text-decoration: none;
  }
`;
