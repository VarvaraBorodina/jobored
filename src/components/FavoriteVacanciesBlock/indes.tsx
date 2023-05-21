import { useEffect, useState } from "react";
import Service from "../../service";
import { Vacancy } from "../../types";
import { deleteFromFavorites, getFavorites } from "../../utils/localStorage";
import Empty from "../Empty";
import Loader from "../Loader";
import VacancyCard from "../VacancyCard";
import { Button } from "./styles";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../constants/routesNames";

const FavoriteVacanciesBlock: React.FC = () => {

    const [isLoading, setLoading] = useState(true);
    const [favoriteVacancies, setFavoriteVacancies] = useState<Vacancy[]>([]);

    const fetchVacancies = async () => {
        const favoritesFromLocalStorage = getFavorites();       
        const data = await Service.getFavoritesVacancies(favoritesFromLocalStorage);
        setFavoriteVacancies(data);
        setLoading(false);
    }
    
    useEffect(() => {
        fetchVacancies();
    }, [])

    const updateFavorites = (key: number) => {
        deleteFromFavorites(key);
        setFavoriteVacancies(favoriteVacancies.filter((vacancy) => vacancy.id !== key))  
    }

    return (
        <>
         {isLoading ? <Loader/> :
         favoriteVacancies.length ?
         favoriteVacancies.map((vacancy) => 
             <VacancyCard 
                 isFavorite={true} 
                 updateFavorites={updateFavorites} 
                 vacancy={vacancy} 
                 key={vacancy.id}
                 main={false}
                 />
         ) :
         <> 
            <Empty message='Упс, здесь еще ничего нет!'/>
            <Button to={ROUTE_NAMES.SEARCH_VACANCIES}>Поиск Вакансий</Button>
         </>
         }  
        </>           
    )
}

export default FavoriteVacanciesBlock;