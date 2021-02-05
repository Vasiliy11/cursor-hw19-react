import styled from 'styled-components'

export const ButtonStyled = styled.button`
border: none;
  background: transparent;
  text-decoration: underline;
  color: #215f9d;
  font-size: 10px;
  cursor: pointer;
  outline: transparent;
  &:last-child {
    margin-left: auto;
  }
  &:hover {
    color: #3485d6;
  }
`
export const DivModal = styled.div`
width: 400px;
  margin: 100px auto;
  padding: 30px;
  background-color: #000;
  color: #fff;
`

export const FormButton = styled.input`
background: #90caf9;
width: 100%;
margin-top: 30px;
height: 32px;
&:hover {
  background: #199db1;
}
`

export const DivImg = styled.div`
width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #f48fb2;
  margin: 30px auto 0;
  position: relative;
`

export const Img = styled.img`
width: 24px;
    height: 24px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`