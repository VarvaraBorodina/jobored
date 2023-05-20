import { SalaryInputType } from "../../components/NumberSelector/types";

export interface SearchState {
    from: number | null,
    to: number | null,
    category: number | null,
    search: string,
}

export interface SetValuePayload {
    type: SalaryInputType,
    value: number | null,
}