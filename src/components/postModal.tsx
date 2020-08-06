import React, { useState, MouseEvent, useEffect } from "react";
import styled from "styled-components";

interface ButtonPropsType {
  primary: boolean;
  onSubmit: Function;
}

const PostModalStyle = styled.form<ButtonPropsType>`
    display : ${(props) => (props.primary ? "none" : "none")}
    position: fixed; 
    z-index: 10; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgba(0, 0, 0, 0.4); 
`;

const PostModalContents = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 70%;
`;

const PostModalClose = styled.div`
  cursor: pointer;
  background-color: #e70909fd;
  text-align: center;
  padding-bottom: 10px;
  padding-top: 10px;
`;

const PostModal: React.FC<ButtonPropsType> = (props) => {
  let [flag, setFlag] = useState<boolean>(props.primary);

  const onFormSubmit = (e: any) => {
    e.preventDefault();
    props.onSubmit(flag);
    console.log(flag);
  };

  useEffect(() => {
    document.getElementById("close")?.addEventListener("click", (e: any) => {
      setFlag(false);
      onFormSubmit(e);
    });
  });
  return (
    <>
      <PostModalStyle primary={flag} id="MODAL" onSubmit={onFormSubmit}>
        <PostModalContents>
          <PostModalClose id="close"></PostModalClose>
          <h2>TEST</h2>
          <hr />
        </PostModalContents>
      </PostModalStyle>
    </>
  );
};

export default PostModal;
