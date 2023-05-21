import styled from "styled-components";

import "@fontsource/poppins";

const Container = styled.div
`
display: block;
width: 773px;
margin-top: 16px;
padding: 24px;
background-color: #FFF;
border-radius: 12px;
border: 1px solid;
border-color: #CED4DA;
cursor: ${props => props.theme.main ? 'auto' : 'pointer'}
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
font-size: ${props => props.theme.main ? '28px' : '20px'};
font-weight: ${props => props.theme.main ? '700' : '600'};
line-height: ${props => props.theme.main ? '34px' : '24px'};
color: ${props => props.theme.main ? '#232134' : '#5E96FC'};
`

const Info = styled.div
`
display: flex;
flex-direction: row;
margin-top: ${props => props.theme.main ? '17px' : '13px'};
margin-bottom: ${props => props.theme.main ? '17px' : '13px'};
`

const Description = styled.p
`
margin-left: 12px;
font-size: ${props => props.theme.main ? '20px' : '16px'};;
font-weight: 400;
line-height: 20px;
color: #232134;
`

const LocationText = styled.p 
`
margin-left: 12px;
font-size: 16px;
font-weight: 400;
line-height: 20px;
color: #232134;
`

const Salary = styled.p
`
font-family: Inter;
font-size: ${props => props.theme.main ? '20px' : '16px'};
font-weight: ${props => props.theme.main ? '700' : '600'};
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

export {Container, Header, Title, Info, Description, Salary, Dot, Location, LocationText };