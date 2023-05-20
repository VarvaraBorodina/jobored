import styled from 'styled-components'

import "@fontsource/inter";

const Container = styled.div
`
width: 315px;
height: 365px;
margin-left: 28px;
background-color: #FFFFFF;
border-radius: 12px;
padding: 20px;
border: solid 1px;
border-color: #CED4DA;
`
const FiltersHeader = styled.div
`
display: flex;
justify-content: space-between;
margin-bottom: 32px;
`

const Header = styled.h3
`
font-weight: 700;
font-size: 20px;
line-height: 20px;
`

const ClearButton = styled.button
`
display: flex;
align-items: center;
background-color: transparent;
border: none;
cursor: pointer;
`

const ClearText = styled.p
`
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 20px;
color: #ACADB9;
`

const FilterSubTitle = styled.h6
`
margin-top: 20px;
margin-bottom: 8px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #232134;
`

const ApplyButton = styled.button
` 
height: 40px;
width: 275px;
margin-top: 20px;
border-radius: 8px;
background-color: #5E96FC;
color: #FFF;
font-family: Inter;
font-size: 14px;
font-weight: 500;
line-height: 21px;
text-align: center;
`

export { Container, FiltersHeader, Header, ClearButton, ClearText, FilterSubTitle, ApplyButton}
