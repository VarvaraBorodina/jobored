import React, { useState } from 'react';
import { Container, Input, Buttons, Button } from './styles';
import SmallDownArrowSvg from '../svg/SmallDownArrowSvg';
import SmallUpArrowSvg from '../svg/SmallUpArrowSvg';
import NumberSelectorProps from './types';

const NumberSelector: React.FC<NumberSelectorProps> = ({placeholder}) => {
    const [value, setValue] = useState<number|null>(null);
    const STEP: number = 10;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        
        if(e.target.value === '' || +e.target.value < 0){
            setValue(null)
        } else {
            setValue(+e.target.value)
        }
    }

    const onIncrement = (): void => {
        setValue((prev_value) => {
            if(prev_value) {
                return prev_value + STEP;
            }
            else {
                return STEP;
            }
        })
    }

    const onDecrement = (): void => {
        setValue((prev_value) => {
            if(prev_value) {
                const new_value: number = prev_value - STEP;
                return new_value < 0 ? 0 : new_value;
            }
            else {
                return 0;
            }
        })
    }

    return (
        <Container>
            <Input 
            value={value || value === 0? value : ''}
            type="number" 
            placeholder={placeholder} 
            onChange={(e) => handleOnChange(e)}/>
            <Buttons>
                <Button onClick={onIncrement}>
                    <SmallUpArrowSvg/>
                </Button>
                <Button onClick={onDecrement}>
                    <SmallDownArrowSvg/>
                </Button>
            </Buttons>
        </Container>
      );
}

export default NumberSelector;