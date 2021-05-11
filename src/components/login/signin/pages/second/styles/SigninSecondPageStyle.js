import styled from "styled-components";

export const User__Container = styled.div`
  padding-left: 5px;
  padding-right: 7px;
  color: #3c4043;
  border-radius: 16px;
  display: inline-flex;
  align-items: center;
  background: #fff;
  border: 1px solid #dadce0;
  cursor: pointer;
  font-family: "Google Sans";
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.25px;
  max-width: 100%;
  position: relative;

  &:after {
    bottom: -1px;
    border: 1px solid transparent;
    content: "";
    left: -1px;
    position: absolute;
    right: -1px;
    top: -1px;
    border-radius: 16px;
  }

  &:hover:after {
    border-color: #dadce0;
    background: rgba(60, 64, 67, 0.039);
  }

  &:focus:after {
    border-color: #dadce0;
    background: rgba(60, 64, 67, 0.122);
  }
`;

export const UserContainer__ImageContainer = styled.div`
  border-radius: 10px;
  height: 20px;
  margin-right: 8px;
`;

export const UserContainer__ImageContent = styled.div`
  border-radius: 50%;
  color: #5f6368;
  overflow: hidden;
`;

export const UserContainer__Image = styled.img`
  border-radius: 50%;
  display: block;
  height: 20px;
  width: 20px;
`;

export const ProfileIdentifier = styled.div`
  line-height: 30px;
  direction: ltr;
  color: #3c4043;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Container__rowDown = styled.div`
  flex-shrink: 0;
  height: 18px;
  margin-left: 4px;
  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  width: 18px;
`;

export const NotSigned__MessageContainer = styled.div`
  color: #202124;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.1px;
  font-weight: 400;
  padding-bottom: 0;
  padding-top: 8px;
`;

export const NotSigned__MessageButton = styled.button`
  position: absolute;
  top: 50%;
  right: 42px;
  height: 48px;
  transform: translateY(-50%);
  color: #fff;
  background-color: #1a73e8;
  border: none;
  font-family: "Google Sans";
  padding: 0 24px 0 24px;
  font-size: 0.875rem;
  letter-spacing: 0.0107142857em;
  text-transform: none;
  font-weight: 500;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: none;
  height: 36px;
  border-radius: 4px;
  cursor: pointer;
`;
