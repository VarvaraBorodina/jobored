import React from 'react';

import { Container, FiltersHeader, Header, ClearButton, ClearText, FilterSubTitle, ApplyButton } from './styles';
import CategorySelector from '../CategorySelector';
import NumberSelector from '../NumberSelector';
import CrossIcon from '../svg/CrossIcon';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/SearchSlice';


const Filter: React.FC = () => {
    
    const { clearFilters } = searchSlice.actions;
    const dispatch = useAppDispatch();

    const handleClear = () => {
        dispatch(clearFilters());
    }

    return (
        <Container>
            <FiltersHeader>
                <Header>Фильтры</Header>
                <ClearButton onClick={handleClear}>
                    <ClearText>Сбросить все</ClearText>
                    <CrossIcon/>
                </ClearButton>                
            </FiltersHeader>
            <FilterSubTitle>Отрасль</FilterSubTitle>
            <CategorySelector/>
            <FilterSubTitle>Оклад</FilterSubTitle>
            <NumberSelector type={'from'}/>
            <NumberSelector type={'to'}/>
            <ApplyButton>Применить</ApplyButton>
        </Container>
      );
}

export default Filter;