import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoadingType } from "./types";
import { Vacancy } from "../../types";

const initialState: LoadingType = {
    loading: true,
    vacancies: [],
}

export const VacancySlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setVacancies: (state, action: PayloadAction<Vacancy[]>) => {
            state.vacancies = action.payload;
        }
    }
})

export default VacancySlice.reducer;