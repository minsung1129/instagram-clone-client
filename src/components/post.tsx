import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PostModal from "./postModal";

interface PostPropsType {
  primary?: number;
  photoURL?: string;
  clicked?: boolean;
}

const PostImg = styled.div<PostPropsType>`
  display: block;
  width: 17em;
  height: 17em;
  background-image: url(${(props) =>
    props.photoURL ? props.photoURL : props.photoURL});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  margin: 0.5em 1em 0.5em 1em;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const ThreePosts = styled.div`
  display: flex;
`;

const Post: React.FC<PostPropsType> = (props) => {
  const initPostNum = 0;
  const myPost = [
    "https://i.imgur.com/Iq2mqgQ.png",
    "https://i.imgur.com/PkPWFfB.png",
    "https://i.imgur.com/ezAC6fp.png",
    "https://i.imgur.com/Iq2mqgQ.png",
    "https://i.imgur.com/PkPWFfB.png",
    "https://i.imgur.com/ezAC6fp.png",
    "https://i.imgur.com/Iq2mqgQ.png",
    "https://i.imgur.com/PkPWFfB.png",
    "https://i.imgur.com/ezAC6fp.png",
    "https://i.imgur.com/Iq2mqgQ.png",
    "https://i.imgur.com/PkPWFfB.png",
  ];
  const [curPostNum, setCurPostNum] = useState(initPostNum);
  const [postClicked, setPostClicked] = useState(false);
  const [curClickedPost, setCurClickedPost] = useState(0);

  useEffect(() => {
    myPost.forEach((e, i) => {
      document.getElementById("id" + i)?.addEventListener("click", () => {
        setPostClicked(true);
        setCurClickedPost(i);
      });
    });
  });
  const onSearchSubmit = (flag: boolean) => {
    console.log(flag);
    setPostClicked(false);
  };

  return (
    <div>
      {postClicked ? (
        <PostModal
          primary={postClicked}
          postPhoto={myPost[curClickedPost]}
          onSubmit={onSearchSubmit}
        ></PostModal>
      ) : (
        <></>
      )}
      {myPost.map((e, i) => {
        if (i % 3 === 0) {
          return (
            <ThreePosts key={i}>
              <PostImg photoURL={myPost[i]} id={"id" + i}></PostImg>
              <PostImg photoURL={myPost[i + 1]} id={"id" + (i + 1)}></PostImg>
              <PostImg photoURL={myPost[i + 2]} id={"id" + (i + 2)}></PostImg>
            </ThreePosts>
          );
        }
        i += 2;
      })}
    </div>
  );
};

export default Post;
