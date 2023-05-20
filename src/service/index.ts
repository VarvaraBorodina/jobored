import axios from 'axios';

import { API } from '../constants/api';
import { Category } from '../types';
import { addToLocalStorage, getFromLocalStorage } from '../utils/localStorage';
import { AuthParams } from './types';

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

      const {data} = await axios.get<Category[]>(url, {        
        headers: {
          'x-secret-key': API.X_SECRET_KEY,
          'Authorization': `Bearer ${accessToken}`
        }})

      return data;
    }
}

export default Service;
