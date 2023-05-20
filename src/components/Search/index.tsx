import {Input} from '@mantine/core';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Service from '../../service';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { getFromLocalStorage } from '../../utils/localStorage';

import SearchIcon from '../svg/SearchIcon';
import VacancyCard from '../VacancyCard';
import {Container, Button} from './styles'

const Search: React.FC = ()=> {
    const { setSearchValue } = searchSlice.actions;
    const dispatch = useAppDispatch();
    const value = useAppSelector(state => state.searchReducer.search);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        dispatch(setSearchValue(e.target.value))
    }

    return (
        <Container>
             <Input
                value={value}
                onChange={handleOnChange}
                icon={<SearchIcon/>}
                placeholder="Введите название вакансии"
                styles={{input: {width: '773px', height: '48px'}}}
                rightSection={
                    <Button>Поиск</Button>
                }
                />
            <div>
                <VacancyCard/>
                <VacancyCard/>
                <VacancyCard/>
            </div>
        </Container>
    )
}

export default Search;