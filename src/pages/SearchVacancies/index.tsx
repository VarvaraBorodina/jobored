import React from 'react';

import Filter from '../../components/Filter';
import { Container } from './styles';

const SearchVacancies: React.FC = () => {
    return (<>
        <Container>
            <Filter/>
        </Container>
    </>)
}

export default SearchVacancies;