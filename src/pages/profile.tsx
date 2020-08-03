import React, { useState, MouseEvent, useEffect } from "react";
import styled from "styled-components";
import testImg from "../img/park.png";
import Post from "../components/post";

// username
// user photo
// 게시물 수
// follower
// following
// 게시물
// 자기소개

interface ButtonPropsType {
  photoURL?: string;
  isFollowed?: boolean;
}

const FollowBtn = styled.button<ButtonPropsType>`
  border: none;
  background-color: #0579ff;
  color: white;
  cursor: pointer;
  padding: 5px 0px;
  width: 80px;
  height: 30px;
  text-align: center;
  border-radius: 5px;
  border: rgba(0, 0, 0, 0.2);
  font-weight: 800;
  font-size: 12px;
  &:focus {
    outline: none;
  }
`;

const ProfileImg = styled.div<ButtonPropsType>`
  display: flex;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  background-image: url(${testImg});
  ${(props) => (props.photoURL ? props.photoURL : testImg)};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  margin-right: 6em;
`;

const MyProfile = styled.div`
  display: flex;
  margin: 2em 5em 2em 5em;
`;

const Profile: React.FC<ButtonPropsType> = (props) => {
  let [myPhotoURL, setMyPhotoURL] = useState<string>(testImg);
  let [userName, setUserName] = useState<string>("Anonymous");
  let [post, setPost] = useState<number>(111);
  let [follower, setFollower] = useState<number>(222);
  let [following, setFollowing] = useState<number>(333);

  useEffect(() => {
    document.getElementById("hi")?.addEventListener("click", () => {
      console.log("bye");
    });
  }, []);

  return (
    <div>
      <MyProfile>
        <ProfileImg photoURL={myPhotoURL}></ProfileImg>
        <div id="hi">
          <h3>
            {userName} &nbsp;&nbsp;
            <FollowBtn>팔로우</FollowBtn>
          </h3>
          <h3>
            게시물 {post} &nbsp; 팔로워 {follower} &nbsp; 팔로잉 {following}
          </h3>
        </div>
      </MyProfile>
      <hr />
      <Post primary={3}></Post>
    </div>
  );
};

export default Profile;
