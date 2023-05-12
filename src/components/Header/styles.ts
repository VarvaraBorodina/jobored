import styled from 'styled-components'
import {Link} from "react-router-dom";


import "@fontsource/poppins";

const Container = styled.div
`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
height: 84px;
`

const Logo = styled.div
`
display: flex;
flex-direction: row;
position: absolute;
left: 204px;
`

const LogoText = styled.p
`
margin-left: 5.78px;
font-family: Poppins;
font-size: 24px;
font-weight: 600;
line-height: 36px;
letter-spacing: -0.02em;
`

const Navigator = styled.div
`
display: flex;
flex-direction: row;
align-items: center;
`

const NavbarLink = styled(Link)
`

font-size: 16px;
font-weight: 500;
line-height: 20px;
color: black

`

export { Container, Logo, LogoText, Navigator, NavbarLink }