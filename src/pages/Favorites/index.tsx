import { Container } from './styles';
import React from 'react';
import FavoriteVacanciesBlock from '../../components/FavoriteVacanciesBlock/indes';

const Favorites: React.FC = () => {
    return (
        <Container>
            <FavoriteVacanciesBlock/>
        </Container>
    )
}

export default Favorites;