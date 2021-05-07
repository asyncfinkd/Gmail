import styled from "styled-components/macro";

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
