import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Empty from '../../components/Empty';
import Loader from '../../components/Loader';
import VacancyCard from '../../components/VacancyCard';
import VacancyDescription from '../../components/VacancyDescription';
import Service from '../../service';
import { FullVacancy } from '../../types';
import { addToFavorites, deleteFromFavorites, getFavorites } from '../../utils/localStorage';
import { Container } from './styles';

const Vacancy: React.FC = () => {

    const {id} = useParams();
    const [vacancy, setVacancy] = useState<FullVacancy|null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isFavorite, setIsFavorite] = useState(false);

    const fetchVacancy = async () => {
        const data = await Service.getVacancyById(Number(id));
        setVacancy(data);
        if(getFavorites().includes(Number(id))) {
            setIsFavorite(true);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        fetchVacancy();
    }, []);

    const updateFavorites = (key: number) => {
        if(isFavorite) {
            deleteFromFavorites(key);
        } else {
            addToFavorites(key);
        }
        setIsFavorite(!isFavorite);
    }

    return (
        <Container>
            { isLoading ? <Loader/> : vacancy ? 
                <VacancyCard
                    isFavorite={isFavorite} 
                    updateFavorites={updateFavorites} 
                    vacancy={vacancy} 
                    main={true}
                /> : <Empty message='Упс! Такая вакансия не найдена'/>
            }
            {vacancy && <VacancyDescription vacancyRichText={vacancy.vacancyRichText}/>}
        </Container>
    )
}

export default Vacancy;
