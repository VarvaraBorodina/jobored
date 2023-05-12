import React from 'react';
import { useLocation } from 'react-router-dom';
import { ROUTE_NAMES } from '../../constants/routesNames';

import { Container, LogoText, Logo, Navigator, NavbarLink } from './styles'


const Header: React.FC = () => {
    const location = useLocation();

    const isSearchVacancies: boolean = location.pathname === ROUTE_NAMES.SEARCH_VACANCIES;
    const isFavorites: boolean = location.pathname === ROUTE_NAMES.FAVORITES;

    return (
        <Container>
            <Logo>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.039 4.81473C9.08945 0.423546 3.45945 -1.27661 1.13587 1.02923C-1.18771 3.33507 0.469263 8.97794 4.81473 14.961C0.423547 20.9105 -1.27661 26.5405 1.02923 28.8641C3.33507 31.1877 8.97793 29.5307 14.9609 25.1852C20.9105 29.5764 26.5405 31.2766 28.8641 28.9708C31.1877 26.6649 29.5307 21.022 25.1852 15.039C29.5764 9.08944 31.2766 3.45942 28.9708 1.13584C26.6649 -1.18775 21.022 0.469237 15.039 4.81473Z" fill="#5E96FC"/>
                </svg>

                <LogoText>Jobored</LogoText>
            </Logo>
            <Navigator>
                <NavbarLink to={ROUTE_NAMES.SEARCH_VACANCIES} style={{color: isSearchVacancies? '#5E96FC': '#000'}} >Поиск Вакансий</NavbarLink>
                <NavbarLink to={ROUTE_NAMES.FAVORITES} style={{color: isFavorites? '#5E96FC': '#000', marginLeft: '60px'}}>Избранное</NavbarLink>
            </Navigator>
        </Container>
      );
}

export default Header;