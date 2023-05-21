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
import Pagination from "../Pagination";

const FavoriteVacanciesBlock: React.FC = () => {

    const [isLoading, setLoading] = useState(true);
    const [favoriteVacancies, setFavoriteVacancies] = useState<Vacancy[]>([]);
    const [currentPage, setCurrentPage] = useState(0);

    const VACANCIES_PER_PAGE = 4;
    const isVacancyOnPage = (index: number) => {
        return (index >= VACANCIES_PER_PAGE*currentPage && index < VACANCIES_PER_PAGE*(currentPage+1));
    }

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
         <>
         {
            favoriteVacancies.filter((vacancy, index) => isVacancyOnPage(index)).map((vacancy) => 
            <VacancyCard 
                isFavorite={true} 
                updateFavorites={updateFavorites} 
                vacancy={vacancy} 
                key={vacancy.id}
                main={false}
                />
            )
         }
         <Pagination total={favoriteVacancies.length} currentPage={currentPage} setCurrentPage={setCurrentPage}></Pagination>
         </> :
         <> 
            <Empty message='Упс, здесь еще ничего нет!'/>
            <Button to={ROUTE_NAMES.SEARCH_VACANCIES}>Поиск Вакансий</Button>
         </>
         }  
        </>           
    )
}

export default FavoriteVacanciesBlock;