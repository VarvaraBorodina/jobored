import React, { useState } from 'react';
import { Container, Input, Buttons, Button } from './styles';
import SmallDownArrowSvg from '../svg/SmallDownArrowSvg';
import SmallUpArrowSvg from '../svg/SmallUpArrowSvg';
import { NumberSelectorProps } from './types';
import { searchSlice } from '../../store/reducers/SearchSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const NumberSelector: React.FC<NumberSelectorProps> = ({type}) => {

    const { increment, decrement, setValue } = searchSlice.actions;
    const dispatch = useAppDispatch();
    const value = useAppSelector(state => state.searchReducer[type])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        let stringValue = e.target.value;
        const value = parseInt(stringValue);
        dispatch(setValue({value, type}))
    }

    const onIncreament = ():void => {
        dispatch(increment(type))
    }

    const onDecreament = ():void => {
        dispatch(decrement(type))
    }


    return (
        <Container>
            <Input
            data-elem={type==='from'? 'salary-from-input' : 'salary-to-input'} 
            value={value || value === 0? value : ''}
            type="number" 
            placeholder={type==='from'? 'От' : 'До'} 
            onChange={handleOnChange}/>
            <Buttons>
                <Button onClick={onIncreament}>
                    <SmallUpArrowSvg/>
                </Button>
                <Button onClick={onDecreament}>
                    <SmallDownArrowSvg/>
                </Button>
            </Buttons>
        </Container>
      );
}

export default NumberSelector;