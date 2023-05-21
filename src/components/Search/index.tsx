import {Input} from '@mantine/core';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Service from '../../service';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { VacancySlice } from '../../store/reducers/VacancySlice';

import SearchIcon from '../svg/SearchIcon';
import VacanciesBlock from '../VacanciesBlock';
import {Container, Button} from './styles'

const Search: React.FC = ()=> {
    const dispatch = useAppDispatch();

    const { setSearchValue } = searchSlice.actions;
    const searchValue = useAppSelector(state => state.searchReducer);

    const { setLoading, setVacancies } = VacancySlice.actions;
    const isLoading = useAppSelector(state => state.loadingReducer.loading);
    const vacancies = useAppSelector(state => state.loadingReducer.vacancies);

    const fetchVacancies = async () => {
        const data = await Service.getVacanciesByParams(searchValue);
        dispatch(setVacancies(data));
        dispatch(setLoading(false));
    }

    useEffect(() => {
        fetchVacancies();
    }, [])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(setSearchValue(e.target.value))
    }

    const handleSubmit = () => {
        dispatch(setLoading(true));
        fetchVacancies();
    }

    return (
        <Container>
             <Input
                value={searchValue.search}
                onChange={handleOnChange}
                icon={<SearchIcon/>}
                placeholder="Введите название вакансии"
                styles={{input: {width: '773px', height: '48px', fontSize: '16px', weight: '500', lineHeight: '20px', borderRadius: '8px'}}}
                rightSection={
                    <Button onClick={handleSubmit}>Поиск</Button>
                }
                />
                <VacanciesBlock isLoading={isLoading} vacancies={vacancies}/>
        </Container>
    )
}

export default Search;