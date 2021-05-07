import styled from "styled-components";

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
  }
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
  @media (min-width: 601px) {
    height: auto;
    min-height: 500px;
    transition: 0.2s;
    overflow-y: auto;
    padding: 24px 24px 36px;
  }
  @media (min-width: 450px) {
    padding: 48px 40px 36px;
  }
`;

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
  font-weight: 550;
  letter-spacing: -0.25px;
  outline: none;
  position: relative;
  background-color: transparent;
  cursor: pointer;
  font-size: inherit;
  padding: 0;
  text-align: left;
  border: 0;
`;
