import React, { useState } from "react";
import { BodyLeft__ImageComponent } from "../styles/SignupSecondPageStyles";

export default function SignupSecondPageMap({ item, click, closeModal }) {
  return (
    <>
      <div
        onClick={() => {
          click(item.position);
          closeModal(false);
        }}
        className="ho"
        style={{
          paddingLeft: "8px",
          paddingRight: "8px",
          userSelect: "none",
          paddingTop: "5px",
          paddingBottom: "5px",
          borderColor: "transparent",
          color: "#222",
          listStyle: "none",
          outline: "none",
          overflow: "hidden",
          position: "relative",
          textAlign: "left",
          whiteSpace: "nowrap",
          display: "flex",
          alignItems: "center",
          borderBottom: `${item.borderBottom}`,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "24px",
            height: "24px",
          }}
        >
          <BodyLeft__ImageComponent
            style={{
              backgroundPosition: `${item.position}`,
            }}
          ></BodyLeft__ImageComponent>
        </div>
        <span
          style={{
            height: "36px",
            paddingTop: "0",
            position: "relative",
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
          }}
        >
          {item.language}{" "}
          <span
            style={{
              color: "rgba(0,0,0,0.54)",
              paddingLeft: "8px",
            }}
          >
            {item.num}
          </span>
        </span>
      </div>
    </>
  );
}
