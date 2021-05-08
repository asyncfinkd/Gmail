import styled from "styled-components";

export const Container = styled.div`
  @media all and (min-width: 601px) {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
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
    &.LZgQXe:after {
      min-height: 63.9996px;
    }
  }
`;

export const Content = styled.div`
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

export const Hero = styled.div`
  @media (min-width: 901px) {
    display: flex;
  }

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

export const Validation__Container = styled.div`
  @media (min-width: 901px) {
    flex-basis: 450px;
    margin: 0 -48px;
    overflow: hidden;
    padding: 0 48px;
  }
`;

export const Validation__ChildContainer = styled.div`
  height: 24px;
  display: flex;
  justify-content: flex-start;
`;

export const Validation__ContainerComponent = styled.div`
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

export const Validation__ContainerHeader = styled.div`
  text-align: left;
`;

export const Validation__HeaderTitle = styled.h1`
  text-indent: -1px;
  color: #202124;
  padding-top: 16px;
  padding-bottom: 0;
  font-family: "Google Sans";
  font-size: 24px;
  font-weight: 400;
  line-height: 1.3333;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Validation__HeaderSubText = styled.div`
  color: #202124;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.1px;
  line-height: 1.5;
  padding-top: 8px;
  padding-bottom: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

export const Form__Container = styled.div`
  font-size: 0.1px;
  white-space: nowrap;
`;

export const Form__Content = styled.div`
  display: inline-block;
  font-size: 14px;
  padding: 24px 0 0;
  vertical-align: top;
  white-space: normal;
  width: 100%;
  border: 0 solid transpranet;
  border-width: 0 24px;

  @media (min-width: 450px) {
    border-left-width: 40px;
    border-right-width: 40px;
  }
`;
