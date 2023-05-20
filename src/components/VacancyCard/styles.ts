import styled from "styled-components";

import "@fontsource/poppins";

const Container = styled.div
`
margin-top: 16px;
padding: 24px;
background-color: #FFF;
border-radius: 8px;
border: 1px solid;
border-color: #CED4DA;
`

const Header = styled.div
`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Title = styled.h3
`
font-family: Inter;
font-size: 20px;
font-weight: 600;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
color: #5E96FC;
`

const Info = styled.div
`
display: flex;
flex-direction: row;
margin-top: 13px;
margin-bottom: 13px;
`
const Description = styled.p
`
margin-left: 12px;
font-size: 16px;
font-weight: 400;
line-height: 20px;
`

const Salary = styled.p
`
font-family: Inter;
font-size: 16px;
font-weight: 600;
line-height: 20px;
color: #232134;
`

const Dot = styled.p
`
margin-left: 12px;
font-family: Poppins;
font-size: 20px;
font-weight: 400;
line-height: 21px;
color: #7B7C88;
`

const Location = styled.div
`
display: flex;
flex-direction: row;
`

export {Container, Header, Title, Info, Description, Salary, Dot, Location };