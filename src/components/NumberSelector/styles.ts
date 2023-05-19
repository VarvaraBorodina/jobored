import styled from 'styled-components'

const Container = styled.div
`
display: flex;
justify-content: space-between;
height: 42px;
width: 275px;
margin-top: 8px;

background-color: #fff;
border-radius: 8px;
border: 2px solid;
border-color: #D5D6DC;

&:hover{
  border-color: #5E96FC;
}

`

const Input = styled.input
`
width: 90%;
::-webkit-outer-spin-button,
::-webkit-inner-spin-button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0;
}
border: none;
outline:none;
margin-left: 12px;

font-family: Inter;
font-size: 14px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0px;
text-align: left;

`

const Buttons = styled.div
`
display:flex;
flex-direction: column;
justify-content: space-between;
margin: 10px 12px;


cursor: pointer;
`

const Button = styled.button
`
display: flex;
align-items: center;
background-color: transparent;
border: none;
cursor: pointer;
`

export {Container, Input, Buttons, Button}