import React, { useState } from 'react';
import { Select} from '@mantine/core';
import { Container } from './styles';
import SelectArrow from '../svg/SelectArrow';

const CategorySelector: React.FC = () => {
    const [rotate, setRotate] = useState<'up'|'down'>('down');

    const textStyles = {
        fontSize: '14px', 
        paddingLeft: '12px', 
        fontWeight: 400,
        cursor: 'pointer'
    }

    const toggleArrow = () => {
        setRotate((prev_rotate) => {
            return prev_rotate === 'up' ? 'down' : 'up';
        })
    }

    return (
        <Container>
        <Select
             data={[
                { value: 'react', label: 'React' },
                { value: 'ng', label: 'Angular' },
                { value: 'svelte', label: 'Svelte' },
                { value: 'vue', label: 'Vue' },
              ]}
            rightSection={<SelectArrow rotate={rotate}/>}
            onDropdownOpen={toggleArrow}
            onDropdownClose={toggleArrow}
            styles={{ rightSection: { pointerEvents: 'none' }, item: textStyles, input: textStyles }}
            placeholder={'Выберете отрасль'}
            searchable
            size={"xs"}
            />
        </Container>
      );
}

export default CategorySelector;