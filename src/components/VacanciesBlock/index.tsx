import { useEffect, useState } from "react";
import { addToFavorites, deleteFromFavorites, getFavorites } from "../../utils/localStorage";
import Empty from "../Empty";
import Loader from "../Loader";
import VacancyCard from "../VacancyCard";
import { VacanciesBlockProps } from "./types"

const VacanciesBlock: React.FC<VacanciesBlockProps> = ({isLoading, vacancies}) => {
    const [favorites, setFavorites] = useState<number[]>([]);
    
    useEffect(() => {
        const favoritesFromLocalStorage = getFavorites();
        setFavorites(favoritesFromLocalStorage);
    }, [])

    const updateFavorites = (key: number) => {
        if(favorites.includes(key)){
            setFavorites(deleteFromFavorites(key));
        } else {
            setFavorites(addToFavorites(key));
        }
    }

    return (
        <>
         {isLoading ? <Loader/> :
         vacancies.length ?
         vacancies.map((vacancy) => 
             <VacancyCard 
                 isFavorite={favorites.includes(vacancy.id)} 
                 updateFavorites={updateFavorites} 
                 vacancy={vacancy} 
                 key={vacancy.id}
                 main={false}
                 />
         ) : <Empty message={'Упс, ничего не найдено!'}/>
         }  
        </>           
    )
}

export default VacanciesBlock;