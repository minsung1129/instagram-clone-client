import React, { useState } from "react";
// import styled from "styled-components";
import styled from "styled-components";

interface ButtonPropsType {
  primary: boolean;
}

/*
background: ${(props) => (props.primary ? "lightgray" : "white")};
color: ${(props) => (props.primary ? "white" : "lightgray")};
*/
const InstaInput = styled.input`
  padding: 0.25em 1em;
  border: none;
  justify-content: center;
  align-items: center;
  width: 15em;
  height: 2em;
  ::placeholder,
  ::-webkit-input-placeholder {
    align-items: center;
    justify-content: center;
  }
`;
const SearchSpan = styled.span`
  background: white;
  color: lightgray;
  border: 2px solid lightgray;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const Search: React.FC<ButtonPropsType> = (props) => {
  let [flag, setFlag] = useState<boolean>(props.primary);
  const openX = () => {
    setFlag(true);
    console.log(props.primary);
  };
  const closeX = () => {
    setFlag(false);
  };
  document.addEventListener("onClick", () => {
    setFlag(false);
    console.log(props.primary);
  });
  return (
    <SearchSpan>
      <InstaInput
        placeholder="🔍 검색"
        onClick={openX}
        id="searchInput"
      ></InstaInput>
      <SearchButton primary={flag} onClick={closeX}>
        x
      </SearchButton>
    </SearchSpan>
  );
};

const SearchButton = styled.button<ButtonPropsType>`
  display: ${(props) => (props.primary ? "block" : "none")};
`;

export default Search;
