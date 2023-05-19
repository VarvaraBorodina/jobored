import React from 'react';

import { Container, FiltersHeader, Header, ClearButton, ClearText, FilterSubTitle, ApplyButton } from './styles';
import CategorySelector from '../CategorySelector';
import NumberSelector from '../NumberSelector';
import Cross from '../svg/Cross';


const Filter: React.FC = () => {
    return (
        <Container>
            <FiltersHeader>
                <Header>Фильтры</Header>
                <ClearButton>
                    <ClearText>Сбросить все</ClearText>
                    <Cross/>
                </ClearButton>                
            </FiltersHeader>
            <FilterSubTitle>Отрасль</FilterSubTitle>
            <CategorySelector/>

            <FilterSubTitle>Оклад</FilterSubTitle>
            <NumberSelector placeholder='От'/>
            <NumberSelector placeholder='До'/>

            <ApplyButton>Применить</ApplyButton>
        </Container>
      );
}

export default Filter;