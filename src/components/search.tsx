import React, { useState, MouseEvent } from "react";
import styled from "styled-components";

interface ButtonPropsType {
  primary: boolean;
}

/*
background: ${(props) => (props.primary ? "lightgray" : "white")};
color: ${(props) => (props.primary ? "white" : "lightgray")};
*/

const Search: React.FC<ButtonPropsType> = (props) => {
  const [flag, setFlag] = useState<boolean>(props.primary);
  const openX = () => {
    setFlag(true);
  };
  const closeX = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setFlag(false);
  };
  document.addEventListener("onClick", () => {
    setFlag(false);
  });
  document.getElementById("searchInput")?.focus();
  return (
    <SearchSpan onClick={openX}>
      <span role="img" aria-label="home">
        &nbsp;🔍 {flag ? "" : " 검색"}
      </span>
      <InstaInput
        primary={flag}
        placeholder="검색"
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
  border-radius: 50%;
  border: none;
  background: lightgray;
  color: white;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
`;
const InstaInput = styled.input<ButtonPropsType>`
  &:focus {
    outline: none;
  }
  display: ${(props) => (props.primary ? "block" : "none")};
  padding: 0.25em 1em;
  border: none;
  justify-content: center;
  align-items: center;
  width: 15em;
  height: 1em;
  ::placeholder,
  ::-webkit-input-placeholder {
    align-items: center;
    justify-content: center;
  }
`;
const SearchSpan = styled.span`
  height: 2em;
  width: 15em;
  background: white;
  color: lightgray;
  border: 2px solid lightgray;
  justify-content: center;
  align-items: center;
  display: flex;
  pointer: cusor;
`;

export default Search;
