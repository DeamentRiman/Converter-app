export interface Rate {
    Date: string
    Valute: IRateData
}

export interface IRateData {
    ID: string
    NumCode: number
    Name: string
    Value: number
}

export interface ratesObj {
    [key: string]: any
}

export interface ExchangeRateTemp {
    rates: ratesObj
    date: string
    usdValue: number
    getRates: (url: string) => void
}
