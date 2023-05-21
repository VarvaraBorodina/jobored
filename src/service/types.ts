import { AxiosHeaders, AxiosRequestConfig, HeadersDefaults, RawAxiosRequestConfig } from "axios"
import { Vacancy } from "../types"

export type AuthParams = {
    access_token: string,
    refresh_token: string,
    ttl: number,
    expires_in: number,
    token_type: string,
}

export type VacancyResponse = {
    objects: Vacancy[],
    total: number,
}


/*export interface IServer {
    getAccessToken: () => Promise<void>,
    getConfig: () => IConfig,
    refreshToken: () => Promise<void>,
    getCategories: () => Promise<Category[]|null>,
    getVacanciesByParams: (searchValues: SearchState, page: number) => Promise<{ vacancies: Vacancy[]; total: number; }>,
    getFavoritesVacancies: (ids: number[]) => Promise<Vacancy[]>,
    getVacancyById: (id: number) => Promise<Vacancy|null>,
  }*/
  
  export interface IHeaders{
    'x-secret-key': string,
    'X-Api-App-Id': string,
    'Authorization'?: string,
  }