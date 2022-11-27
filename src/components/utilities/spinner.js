import React from "react";
import { SpinnerContainer } from "./styled";

const Spinner = () => {
  return (
    <SpinnerContainer>
      <svg viewBox="0 0 50 50">
        <circle cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
    </SpinnerContainer>
  )
}

export default Spinner;