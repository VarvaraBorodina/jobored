import React from 'react';

import Filter from '../../components/Filter';
import Search from '../../components/Search';
import { Container } from './styles';

const SearchVacancies: React.FC = () => {
    return (<>
        <Container>
            <Filter/>
            <Search/>
        </Container>
    </>)
}

export default SearchVacancies;