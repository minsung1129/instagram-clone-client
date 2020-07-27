import React from "react";
import styled from "styled-components";

interface ButtonPropsType {
  primary?: boolean;
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
`;

const SearchButton = styled.button<ButtonPropsType>`
  display: ${(props) => (props.primary ? "block" : "block")};
`;

type SearchProps = {};

const Search: React.FC<SearchProps> = () => (
  <SearchSpan>
    <InstaInput placeholder="🔍 검색"></InstaInput>
    <SearchButton>x</SearchButton>
  </SearchSpan>
);

export default Search;
