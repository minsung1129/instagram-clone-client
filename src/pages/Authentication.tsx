/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import useInput from '../Hooks/UseInput';

const Wrapper = styled.article`
  min-height: 80vh;
  display : flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper2 = styled.div`
`;
const IDBOX = styled.div`
  ${(props) => props.theme.whiteBox}
  border-radius : 1px;
  height : 480px;
  width : 350px;
  margin : 0 0 10px;
  text-align : center;
  padding: 20px 0px
`;
const Logo = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
font-family: 'Lobster', cursive;
font-size : 50px;
margin : 0 0 20px;
padding: 20px 0px
`;
const Box = styled.div`
 ${(props) => props.theme.whiteBox}
  border-radius : 1px;
  width : 350px;
  text-align : center;
  padding: 20px 0px
`;
const State = styled.span`
  color: ${(props) => props.theme.blueColor};
  font-weight : 630;
  cursor : pointer;
`;
const LogIn = styled.div`
margin : 0 0 20px;
padding: 20px 0px
`;

const Button = styled.button`
border:${(props) => props.theme.boxBorder};
border-radius : ${(props) => props.theme.borderRadius};
background-color:${(props) => props.theme.blueColor};
width : 250px;
height: 36px;
color: #FFFFFF;
font-weight : 800;
`;

const DisButton = styled(Button)`
  opacity: 0.4;
`;

export default () => {
  const [action, setAction] = useState('LogIn');
  const username = useInput('');
  const Name = useInput('');
  const secret = useInput('');
  const ID = useInput('');
  const clearInput = () => {
    ID.setValue('');
    secret.setValue('');
    username.setValue('');
    Name.setValue('');
  };
  return (
    <Wrapper>
      <Wrapper2>
        <IDBOX>
          <Logo>Instagram</Logo>
          <LogIn>
            {action === 'LogIn' ? (
              <form>
                {ID.value === '' ? (
                  <Input {...ID} Message="전화번호, 사용자 이름 또는 이메일" />
                ) : (
                  <Input Exist {...ID} Message="전화번호, 사용자 이름 또는 이메일" />
                )}

                {secret.value === '' ? (
                  <Input {...secret} Message="비밀번호" />
                ) : (
                  <Input Exist {...secret} Message="비밀번호" />
                )}
                {ID.value.length >= 8 && secret.value.length >= 8 ? (
                  <Button>로그인</Button>
                ) : (
                  <DisButton disabled>로그인</DisButton>
                )}
              </form>
            ) : (
              <form>
                {ID.value === '' ? (
                  <Input {...ID} Message="휴대폰 번호 또는 이메일 주소" />
                ) : (
                  <Input Exist {...ID} Message="휴대폰 번호 또는 이메일 주소" />
                )}

                {Name.value === '' ? (
                  <Input {...Name} Message="성명" />
                ) : (
                  <Input Exist {...Name} Message="성명" />
                )}

                {username.value === '' ? (
                  <Input {...username} Message="사용자 이름" />
                ) : (
                  <Input Exist {...username} Message="사용자 이름" />
                )}

                {secret.value === '' ? (
                  <Input {...secret} Message="비밀번호" />
                ) : (
                  <Input Exist {...secret} Message="비밀번호" />
                )}

                {ID.value.length >= 8 && secret.value.length >= 8 && username.value.length >= 2 && Name.value.length >= 2 ? (
                  <Button>가입하기</Button>
                ) : (
                  <DisButton disabled>가입하기</DisButton>
                )}
              </form>
            )}
          </LogIn>
        </IDBOX>
        <Box>
          {action === 'LogIn' ? (
            <>
              계정이 없으신가요?
              {' '}
              <State onClick={() => { clearInput(); setAction('SignUp'); }}>가입하기</State>
            </>
          ) : (
            <>
              계정이 있으신가요?
              {' '}
              <State onClick={() => { clearInput(); setAction('LogIn'); }}>로그인</State>
            </>
          )}
        </Box>
      </Wrapper2>
    </Wrapper>
  );
};
