import React, { useEffect, useState } from 'react'
import ExchangeRateStore from '../../data/stores/useExchangeRate';
// import './index.scss'

const Converter= () => {
    const { rates, date, usdValue } = ExchangeRateStore((state => state));
    const [fromCurrency, setFromCurrency] = useState('RUB');
    const [toCurrency, setToCurrency] = useState('USD');

    const [fromValue, setFromValue] = useState(1);
    const [toValue, setToValue] = useState(0);

    const ratesArray = Object.values(rates);
    console.log(rates);
    console.log(toCurrency)

    // useEffect(() => {
    //     fromCurrency=="RUB" ? ({(fromValue * rates[toCurrency].Value)}) : (console.log(1));
    // });
    
    return (
        <main className="appMain">
            <div>
                {ratesArray.map((rate) => {
                    return (
                        <input type="button"
                            key={rate.ID}
                            value={rate.CharCode}
                            onClick={(evt) => {
                                setFromCurrency(rate.CharCode);
                            }}/>
                    )
                })}
                {
                    <input type="number" onChange={(evt) => {
                        setFromValue(Number((evt.target.value))); 
                    }}/>
                }
            </div>
            <div>
                {ratesArray.map((rate) => {
                    return (
                        <input type="button"
                            key={rate.ID}
                            value={rate.CharCode}
                            onClick={(evt) => {
                                setToCurrency(rate.CharCode);
                            }}/>
                    )
                })}
                {
                    <input type="number" value={toValue}/>
                }
            </div>
            
        </main >
    )
}

export default Converter
