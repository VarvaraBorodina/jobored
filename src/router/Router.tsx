import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTE_NAMES } from '../constants/routesNames';
import Empty from '../pages/Empty';
import Favorites from '../pages/Favorites';
import SearchVacancies from '../pages/SearchVacancies';
import Vacancy from '../pages/Vacancy';

export const Router: React.FC = () => (
    <Routes>
      <Route
        path={ROUTE_NAMES.SEARCH_VACANCIES}
        element={<SearchVacancies />}
      />
      <Route
        path={ROUTE_NAMES.VACANCY}
        element={<Vacancy />}
      />
      <Route
        path={ROUTE_NAMES.FAVORITES}
        element={<Favorites />}
      />
      <Route 
        path={ROUTE_NAMES.EMPTY} 
        element={<Empty />} />
    </Routes>
  );
