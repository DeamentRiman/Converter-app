import React from "react";
import { create } from 'zustand';
import axios from 'axios';
import { ExchangeRateTemp } from '../../types/getTypes';

const ExchangeRateStore = create<ExchangeRateTemp>((set, get) => ({
    rates: {
            RUB: {
                ID: "M00000",
                NumCode: "643",
                CharCode: "RUB",
                Nominal: 1,
                Name: "Российский рубль",
                Value: 1,
                Previous: 1
            }
        },
    date: '',
    usdValue: 1,
    getRates: async (url:string) => {
        const response = await axios.get(url).then((response) => {
            const { rates } = get();
            set({ 
                rates: Object.assign(rates, response.data.Valute),
                date: response.data.Timestamp,
                usdValue: response.data.Valute.USD.Value,
            })
        }
        ).catch((error) => {
            throw new Error('Ошибка получения данных')
        })
    }
}))

export default ExchangeRateStore;