import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PostModal from "./postModal";

interface PostPropsType {
  personPhotoURL?: string;
  username?: string;
}

const PostImg = styled.span<PostPropsType>`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-image: url(${(props) =>
    props.personPhotoURL
      ? props.personPhotoURL
      : "data:image/png;base64,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"});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  border: 1px solid;
  border-color: rgba(0, 0, 0, 0.25);
`;

const PersonStyle = styled.div`
  display: flex;
  margin: 1em;
  text-align: center;
`;

const Person: React.FC<PostPropsType> = (props) => {
  return (
    <PersonStyle>
      <PostImg></PostImg>&emsp;
      <b>{props.username}</b>
    </PersonStyle>
  );
};

export default Person;
