import React, { useState, useEffect } from "react";
import styled from "styled-components";

interface PostModalPropsType {
  primary?: boolean;
  onSubmit?: Function;
  postPhoto?: string;
}

const PostModalStyle = styled.form`
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
  margin: 10% auto;
  padding: 0;
  border: 1px solid #888;
  width: 60%;
  height: 67%;
`;

const PostModalClose = styled.div`
  cursor: pointer;
  text-align: center;
  position: fixed;
  right: 5%;
  top: 5%;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 2em;
  font-size: 2em;
`;

const HelloPost = styled.div<PostModalPropsType>`
  display: flex;
  width: 60%;
  height: 100em;
  background-image: url(${(props) =>
    props.postPhoto ? props.postPhoto : "black"});
  background-repeat: no-repeat;
`;

const ModalStyle = styled.div`
  display: flex;
`;

const PostModal: React.FC<PostModalPropsType> = (props) => {
  let [flag, setFlag] = useState<boolean>(props.primary ? props.primary : true);
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    props.onSubmit ? props.onSubmit(flag) : console.log(flag);
  };

  useEffect(() => {
    document.getElementById("close")?.addEventListener("click", (e: any) => {
      setFlag(false);
      onFormSubmit(e);
    });
  });
  return (
    <>
      <PostModalStyle onSubmit={onFormSubmit}>
        <PostModalContents>
          <PostModalClose id="close">
            <span role="img" aria-label="closeP">
              ✖
            </span>
          </PostModalClose>
          <ModalStyle>
            <HelloPost postPhoto={props.postPhoto}></HelloPost>
            <div>
              <h4>박보영</h4>
              <hr />
            </div>
          </ModalStyle>
        </PostModalContents>
      </PostModalStyle>
    </>
  );
};

export default PostModal;
