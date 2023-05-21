import { Vacancy } from "../../types";

export interface VacancyCardProps {
    updateFavorites: Function,
    isFavorite: boolean,
    vacancy: Vacancy,
    main: boolean,
}
