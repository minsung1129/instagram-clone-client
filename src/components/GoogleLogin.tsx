import React from 'react';
import styled from 'styled-components';
import qs from 'qs';
import Google from '../img/Logo.png';

const GoogleLogin = styled.span`
font-size: 15px;
font-weight: 600;
color: #385185;
`;
const Googlebtn = styled.button`
border:0;
background:transparent;
width : 250px;
height: 36px;
cursor:pointer;
outline:none;
display: flex;
align-items: center;
justify-content: center;
&:active {
  opacity: 0.4;
}
`;
const GLogo = styled.img`
display:block;
width : 30px;
height: 30px;
margin-right: 8px;
user-select:none;
user-drag: none;
`;

const CLIENT_ID = '135639937100-012vli61k8h64iu5154rlno2k3234vlv.apps.googleusercontent.com';
const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth?';
const queryStr = qs.stringify({
  client_id: CLIENT_ID,
  redirect_uri: 'http://localhost:3000',
  response_type: 'token',
  scope: 'https://www.googleapis.com/auth/userinfo.profile',
});
const loginUrl = AUTHORIZE_URI + queryStr;

const Login = () => {
  const log_in:React.MouseEventHandler<HTMLButtonElement> = () => {
    const { access_token } = qs.parse(window.location.hash.substr(1));
    if (!access_token) {
      window.location.assign(loginUrl);
      return null;
    }
  };
  return (
    <>
      <Googlebtn onClick={log_in}>
        <GLogo style={{ borderRadius: 10 }} src={Google} alt="" />
        <GoogleLogin>Google으로 로그인</GoogleLogin>
      </Googlebtn>
    </>
  );
};

export default Login;
