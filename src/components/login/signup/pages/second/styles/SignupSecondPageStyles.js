import styled from "styled-components";

export const Body = styled.div`
  @media (min-width: 601px) {
    display: flex;
    min-height: 100vh;
    position: relative;
    flex-direction: column;

    &:before {
      min-height: 30px;
    }

    &:before,
    &:after {
      content: "";
      display: block;
      flex-grow: 1;
      height: 24px;
    }

    &.LZgQXe:after {
      min-height: 63.9996px;
    }
  }
`;

export const BodyContainer = styled.div`
  @media all and (min-width: 601px) {
    -webkit-border-radius: 8px;
    border-radius: 8px;
    border: 1px solid #dadce0;
    display: block;
    -webkit-flex-shrink: 0;
    flex-shrink: 0;
    margin: 0 auto;
    min-height: 0;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    width: 450px;
  }

  @media (min-width: 901px) {
    width: 750px;
  }

  background: #fff;
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  max-width: 100%;
  position: relative;
  z-index: 2;
`;

export const Percent = styled.div`
  @media (min-width: 601px) {
    position: absolute;
    height: 4px;
    left: 0;
    overflow: hidden;
    top: 0;
    width: 100%;
  }
`;

export const PercentContent = styled.div`
  border-radius: 8px 8px 0 0;
  opacity: 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  transition: opacity 250ms linear;
  transform: translateZ(0);
`;

export const BodyContent = styled.div`
  overflow: hidden;
  padding: 24px 24px 36px;
  flex-grow: 1;

  @media (min-width: 901px) {
    display: flex;
  }
  @media (min-width: 601px) {
    height: auto;
    min-height: 500px;
    overflow-y: auto;
    transition: 0.2s;
  }
  @media (min-width: 450px) {
    padding: 48px 40px 36px;
  }
`;

export const BodyLeft__Container = styled.div`
  @media (min-width: 901px) {
    flex-basis: 450px;
    margin: 0 -48px;
    overflow: hidden;
    padding: 0 48px;
  }
`;

export const BodyLeft__LogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  height: 24px;
`;

export const BodyLeft__Logo = styled.div`
  height: 24px;
  margin: 0 0;
  width: 75px;
  overflow: visible;
  position: relative;
`;

export const BodyLeft__Header = styled.div`
  overflow: hidden;
  padding-left: 24px;
  padding-right: 24px;
  margin: auto -24px;

  @media (min-width: 450px) {
    padding-left: 40px;
    padding-right: 40px;
    margin: auto -40px;
  }
`;

export const BodyLeft__HeaderTitle = styled.h1`
  color: #202124;
  padding-bottom: 0;
  padding-top: 16px;
  font-family: "Google Sans";
  font-size: 24px;
  font-weight: 400;
  line-height: 1.3333;
  margin-top: 0;
  margin-bottom: 0;
`;

export const BodyLeft__CenterContainer = styled.div`
  font-size: 0.1px;
  white-space: nowrap;
  margin: auto -24px;

  @media (min-width: 450px) {
    margin: auto -40px;
  }
`;

export const BodyLeft__CenterContent = styled.div`
  display: inline-block;
  font-size: 14px;
  padding: 24px 0 0;
  vertical-align: top;
  white-space: normal;
  width: 100%;
  border: 0px solid transparent;
  border-width: 0 24px;

  @media (min-width: 450px) {
    border-left-width: 40px;
    border-right-width: 40px;
  }
`;

export const BodyLeft__CenterHeader = styled.div`
  @media (min-width: 901px) {
    flex-basis: 450px;
    margin: 0 -48px;
    overflow: hidden;
    padding: 0 48px;
  }
`;

export const BodyLeft__Section = styled.section`
  margin: 16px 0;
  outline: none;

  &:last-child {
    margin-bottom: 0;
  }

  &:first-child {
    margin-top: 0;
  }
`;

export const BodyLeft__ContentSection = styled.div`
  @media (min-width: 450px) {
    margin: auto -40px;
    padding-left: 40px;
    padding-right: 40px;
    margin-bottom: 16px;
    margin-top: 0;
  }
`;

export const BodyLeft__ContentSectionDescription = styled.div`
  padding-bottom: 3px;
  padding-top: 0;
  margin-top: 0;
`;

export const BodyLeft__ValidationContainer = styled.div`
  display: inline-flex;
  align-items: flex-start;
  width: 100%;
`;

export const BodyLeft__ValidationFirstContent = styled.div`
  margin-top: 9px;
  display: flex;
  align-items: flex-end;
  padding-right: 12px;
  line-height: 16px;
  width: 64px;
`;

export const BodyLeft__ValidationFirstContentContainer = styled.div`
  width: 64px;
  transition: background 0.3s;
  border: 0;
  border-radius: 3px;
  color: #444;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  position: relative;
  outline: none;
  text-align: center;
`;

export const BodyLeft__ValidationFirstContentSelect = styled.div`
  min-width: 340px;
  max-height: 944px;
  top: 32px;
  background: #fff;
  transition: opacity: .1s linear;
  border: 0;
  box-shadow: 0 8px 10px 1px rgb(0 0 0 / 14%), 0 3px 14px 2px rgb(0 0 0 / 12%), 0 5px 5px -3px rgb(0 0 0 / 20%);
  outline: 1px solid transparent;
  overflow: hidden;
  overflow-y: auto;
  position: fixed;
  z-index: 2000;
`;

export const BodyLeft__ValidationSelect = styled.div`
  height: auto;
  padding-bottom: 8px;
  padding-top: 8px;
  border-color: transparent;
  color: #222;
  list-style: none;
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: left;
  white-space: nowrap;
`;

export const BodyLeft__ImageComponent = styled.div`
  background: url("https://ssl.gstatic.com/i18n/flags/48x32/nobevel/66bdb7a1bbbdbf86a67de382fac49ecc/flags.png")
    no-repeat 0 0;
  background-size: 24px 3876px;
  width: 24px;
  height: 16px;
  overflow: hidden;
`;

export const BodyLeft__Buttons = styled.div`
  display: flex;
  align-items: flex-start;
  flex-grow: 0;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-left: -8px;
  margin-top: 26px;
  min-height: 48px;
  padding-bottom: 20px;
`;

export const BodyLeft__Flex = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  width: 100%;
`;

export const BodyLeft__NextButton = styled.div`
  flex-grow: 1;
`;

export const Button__Next = styled.button`
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
  border-radius: 4px;
  margin-bottom: 6px;
  display: inline-flex;
  align-items: center;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  vertical-align: middle;
  cursor: pointer;
  oveflow: visible;
  appearance: none;
`;

export const Button__Back = styled.button`
  color: #1a73e8;
  background-color: transparent;
  height: 36px;
  font-weight: 500;
  text-transform: none;
  font-family: "Google Sans";
  letter-spacing: 0.0107142857em;
  padding: 0 8px 0 8px;
  border-radius: 4px;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  outline: none;
  overflow: visible;
  vertical-align: middle;
  appearance: none;
`;

export const BodyRight__Container = styled.div`
  display: none;
  @media (min-width: 901px) {
    display: flex;
    flex-shrink: 0;
    padding-left: 48px;
    width: 300px;
  }
`;

export const BodyRight__Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export const BodyRight__Figure = styled.figure`
  margin: 72px 4px 0;
  text-align: center;
`;

export const BodyRight__Image = styled.img`
  max-width: 100%;
  width: 244px;
  height: 244px;
  aspect-ratio: auto 244 / 244;
`;

export const BodyRight__Figcaption = styled.figcaption`
  font-size: 16px;
  font-weight: 300;
`;

export const BodyLeft__ValidationContent = styled.div`
  height: 24px;
  opacity: 1;
  width: 24px;
  background-repeat: no-repeat;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  right: auto;
  top: 50%;
  vertical-align: middle
`

export const BodyLeft__ValidationContentChild = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
`

export const Container__Children = styled.div`
  top: 5px;
  border-top-color: rgba(0,0,0,0.38);
  border-color: rgba(68,68,68,0.4) transparent;
  border-style: solid;
  border-width: 6px 6px 0 6px;
  height: 0;
  width: 0;
  position: absolute;
  right: -7px;
`

export const ShowPopup__RenderComponent = styled.div`
  background-color: transparent;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  cursor: auto;
`