import { atom } from "jotai";

export const selectCityAtom = atom('Нальчик')
export const nowWeatherAtom = atom({ data: null, loading: true, error: null });