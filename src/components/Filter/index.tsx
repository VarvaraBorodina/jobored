import React from 'react';

import { Container, FiltersHeader, Header, ClearButton, ClearText, FilterSubTitle, ApplyButton } from './styles';
import CategorySelector from '../CategorySelector';
import NumberSelector from '../NumberSelector';
import CrossIcon from '../svg/CrossIcon';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { VacancySlice } from '../../store/reducers/VacancySlice';
import Service from '../../service';


const Filter: React.FC = () => {
    const dispatch = useAppDispatch();

    const { clearFilters } = searchSlice.actions;
    const { setLoading, setVacancies } = VacancySlice.actions;
    
    const searchValue = useAppSelector(state => state.searchReducer);

    const fetchVacancies = async () => {
        const data = await Service.getVacanciesByParams(searchValue);
        dispatch(setVacancies(data));
        dispatch(setLoading(false));
    }

    const handleSubmit = () => {
        dispatch(setLoading(true));
        fetchVacancies();
    }

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
            <ApplyButton onClick={handleSubmit}>Применить</ApplyButton>
        </Container>
      );
}

export default Filter;