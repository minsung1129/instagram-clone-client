import React from 'react';
import styled from 'styled-components';

type IsExist = {
  Exist?:boolean;
};
const Container = styled.input<IsExist>`
border:0;
background: transparent;
cursor: text;
font-size: ${(props) => (props.Exist ? 12 : 16)}px;
text-color: ${(props) => props.theme.darkGreyColor};
padding: ${(props) => (props.Exist ? 14 : 9)}px 0 ${(props) => (props.Exist ? 2 : 8)}px 8px;
margin : 0;
overflow: hidden;
text-overflow: ellipsis;
flex: 1 0 auto;
`;
const Wrapper = styled.div`
`;
const InputContainer = styled.div`
border:${(props) => props.theme.boxBorder};
border-radius : ${(props) => props.theme.borderRadius};
background-color:${(props) => props.theme.bgColor};
width : 250px;
height: 36px;
left: 8px;
cursor: text;
font-size : 12px;
text-color: ${(props) => props.theme.darkGreyColor};
margin : 0 0 8px 50px;
overflow: hidden;
text-overflow: ellipsis;
flex: 1 0 auto;
`;
const Label = styled.label`
height: 36px;
display: flex;
padding: 0;
flex: 1 0 0;
position: relative;
margin: 0;
min-width: 0;
`;
const Holder = styled.span<IsExist>`
color:${(props) => props.theme.darkGreyColor};
left: 8px;
font-size: 12px;
font-weight:600;
color: #8e8e8e;
position: absolute;
line-height: 36px;
pointer-events: none;
user-select: none;
white-space: nowrap;
transition:${(props) => (props.Exist ? 0.2 : 0)}s;
transform-origin: left;
transform: scale(${(props) => (props.Exist ? 0.85 : 1)}) translateY(${(props) => (props.Exist ? -10 : 0)}px);
`;
type GetInput = {
  Exist?:boolean,
  id?:string,
  placeholder?:string,
  value:string,
  onChange:React.ChangeEventHandler<HTMLInputElement>,
  type?:string,
  className?:string,
  Message?:string
};
const Input = ({
  Exist = false,
  id,
  placeholder,
  value,
  onChange,
  type = 'text',
  className,
  Message,
}:GetInput) => (
  <>
    <Wrapper>
      <InputContainer>
        <Label>
          <Holder Exist={Exist}>{Message}</Holder>
          <Container
            Exist={Exist}
            id={id}
            className={className}
            placeholder={placeholder}
            required
            value={value}
            onChange={onChange}
            type={type}
          />
        </Label>
      </InputContainer>
    </Wrapper>
  </>

);

export default Input;
