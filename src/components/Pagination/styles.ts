import styled from "styled-components";
import { ButtonProps } from "./types";

export const Button = styled.button<ButtonProps>
`
width: 32px;
height: 32px;
margin: 8px;
border-radius: 4px;
color: ${props => props.active ? '#FFFFFF': '#232134'};
background-color: ${props => props.active ? '#5E96FC': '#FFFFFF'};
border: 1px solid;
border-color: ${props => props.active ? '#5E96FC': '#CED4DA'};
`

export const ButtonArrow = styled.button
`
width: 32px;
height: 32px;
margin: 8px;
border-radius: 4px;
font-size: 14px;
color: #7B7C88;
background-color: #FFFFFF;
border: 1px solid;
border-color: #CED4DA;
:disabled,
[disabled]{
  color: #D5D6DC;
  cursor: auto;
}
`

export const Container = styled.div
`
display: flex;
justify-content: center;
margin-top: 40px;
margin-bottom: 40px;
`