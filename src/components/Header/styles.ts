import styled from 'styled-components'
import {Link} from "react-router-dom";
import "@fontsource/poppins";
import "@fontsource/inter";

import { NavbarLinkProps } from './types';

const Container = styled.div
`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-bottom: 40px;
height: 84px;
background-color: #FFFFFF
`

const Logo = styled.div
`
display: flex;
flex-direction: row;
position: absolute;
left: 204px;
`

const LogoText = styled.h1
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
justify-content: space-between;
width: 275px;
`

const NavbarLink = styled(Link)<NavbarLinkProps>
`
font-family: Inter;
font-size: 16px;
font-weight: ${props => props.$active ? '500' :  '400'};
line-height: 20px;
color: ${props => props.$active ? '#5E96FC' :  '#232134'};
`



export { Container, Logo, LogoText, Navigator, NavbarLink}