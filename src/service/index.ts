import axios from 'axios';

import { API } from '../constants/api';
import { Category, SearchState } from '../types';
import { addToLocalStorage, getFromLocalStorage } from '../utils/localStorage';
import queryCreater from '../utils/queryCreater';
import { AuthParams, VacancyResponse } from './types';

const Service = {
  
    getAccessToken: async () => {
        try {
            const url = `${API.URL}${API.AUTH_URL}?login=${API.LOGIN}&password=${API.PASSWORD}&client_id=${API.CLIENT_ID}&client_secret=${API.CLIENT_SECRET}&hr=${API.HR}`;
            const {data} = await axios.get<AuthParams>(url, { 
              headers: {
                'x-secret-key': API.X_SECRET_KEY
              }});     

            addToLocalStorage('access_token', data.access_token) 
          } catch (error) {
            if (axios.isAxiosError(error)) {
              console.log('error message: ', error.message);
            } else {
              console.log('unexpected error: ', error);
            }
          }
    },

    getCategories: async () => {
      const accessToken = getFromLocalStorage('access_token');
      const url = `${API.URL}${API.GET_CATEGORIES_URL}`;
      console.log(url);

      const {data} = await axios.get<Category[]>(url, {        
        headers: {
          'x-secret-key': API.X_SECRET_KEY,
          'X-Api-App-Id': API.CLIENT_SECRET,
          'Authorization': `Bearer ${accessToken}`
        }})

      return data;
    },

    getVacanciesByParams: async (searchValues: SearchState) => {
      try {
          const accessToken = getFromLocalStorage('access_token');
          let url = `${API.URL}${API.GET_VACANCIES_URL}?${queryCreater(searchValues)}`;
          
          const {data} = await axios.get<VacancyResponse>(url, {        
            headers: {
              'x-secret-key': API.X_SECRET_KEY,
              'X-Api-App-Id': API.CLIENT_SECRET,
              'Authorization': `Bearer ${accessToken}`
            }})

          return data.objects;

       } catch (error) {
          if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
          } else {
            console.log('unexpected error: ', error);
          }
          return [];
      }
    },

    getFavoritesVacancies: async (ids: number[]) => {
      try {
        if(!ids.length) {
          return [];
        }
        const accessToken = getFromLocalStorage('access_token');

        let url = `${API.URL}${API.GET_VACANCIES_URL}?`;  
        url = ids.reduce((prev_url, id, i) => {
         return (i === ids.length - 1) ? prev_url + `ids[${i}]=${id}`:prev_url + `ids[${i}]=${id}&`;
        }, url)

        const {data} = await axios.get<VacancyResponse>(url, {        
          headers: {
            'x-secret-key': API.X_SECRET_KEY,
            'X-Api-App-Id': API.CLIENT_SECRET,
            'Authorization': `Bearer ${accessToken}`
          }})
        return data.objects;

     } catch (error) {
        if (axios.isAxiosError(error)) {
          console.log('error message: ', error.message);
        } else {
          console.log('unexpected error: ', error);
        }
        return [];
    }
    }
}

export default Service;
