export interface Rate {
    Date: string;
    Valute: IRateData;
}

export interface IRateData {
    ID: string;
    NumCode: number;
    Name: string;
    Value: number;
}

export interface ExchangeRateTemp {
    rates: object;
    date: string;
    usdValue: number;
    getRates: (url:string) => void;
}