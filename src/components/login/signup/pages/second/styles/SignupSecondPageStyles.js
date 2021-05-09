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

export const BodyLeft__Section = styled.div`
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
