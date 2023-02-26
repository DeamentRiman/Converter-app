export interface Rate {
    Date: string;
    Valute: IRateData;
}

export interface IRateData {
    id: string;
    NumCode: number;
    name: string;
    value: number;
}

export interface ExchangeRateTemp {
    rates: object;
    date: string;
    usdValue: number;
    getRates: (url:string) => void;
}