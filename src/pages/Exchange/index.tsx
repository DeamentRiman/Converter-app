import React, { useEffect, useState } from 'react'
import ExchangeRateStore from '../../data/stores/useExchangeRate';
import { getDate } from '../../utils/getData';
import Loader from '../../components/Loader/index';

// import Currencies from '../../components/Currencies/index';
import './index.scss'

const Exchange: React.FC = () => {
    const { rates, date, usdValue } = ExchangeRateStore((state => state));
    const [loading, setLoading] = useState(true);
    const todaysDate = getDate(date);
    const [activeCurrencies, setActiveCurrencies] = useState('RUB');
    const ratesArray = Object.values(rates);
    // console.log(ratesArray);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [activeCurrencies]);

    return (
        <main className="appMain">
            <h1 className="appMainTitle">Exchange rate</h1>
            <p className="appMainDate">Date of rate: {todaysDate}</p>
            <div className="appMainChoose">
                <h4 className="appMainChooseTitle">Choose a currency</h4>
                <div className="appMainChooseCurr">
                    {/* {currencies.map((curr, index) => {
                        // return <Currencies key={index} value={curr} onClick={(evt) => {
                        //     evt.preventDefault();
                        //     console.log(evt.target.value)
                        // }}/>
                        return <input 
                                className="appMainChooseButton"
                                type="button" 
                                // data-tooltip={curr.Name}
                                key={index} 
                                value={curr}
                                // onMouseOver={(evt)=> {evt.target.value}}
                                onClick={(evt) => {
                                    setActiveCurrencies(curr);
                                }}
                         />
                    })} */}
                    {ratesArray.map((rate) => {
                        // return <Currencies key={index} value={curr} onClick={(evt) => {
                        //     evt.preventDefault();
                        //     console.log(evt.target.value)
                        // }}/>
                        return <input
                            className="appMainChooseButton"
                            type="button"
                            // data-tooltip={rate.Name}
                            key={rate.ID}
                            value={rate.CharCode}
                            // onMouseEnter={(evt) => console.log(1)}
                            onClick={(evt) => {
                                setActiveCurrencies(rate.CharCode);
                            }}
                        />
                    })}
                </div>
            </div>
            <div className="appMainRates">
                {loading ? <Loader /> : (
                    <div className="appMainChoose">
                        <p className="appMainRatesActiveCurr">Active currencies: {activeCurrencies}</p>
                        <div className='appMainRatesCurr'>
                            {(activeCurrencies == 'RUB') ? (ratesArray.map((item) => {
                                if (item.CharCode == 'RUB') {
                                    return;
                                } else
                                    return <div className="appMainRatesValute" key={item.ID}>
                                        <span>{item.Name}, {item.CharCode}</span>
                                        <span className="appMainRatesValuteValue">{(item.Value / item.Nominal).toFixed(3)} {activeCurrencies}</span>
                                    </div>
                            })) : (
                                ratesArray.map((item) => {
                                    if (item.CharCode == activeCurrencies) {
                                        return;
                                    } else
                                        return <div className="appMainRatesValute" key={item.ID}>
                                            <span>{item.Name} {item.CharCode}</span>
                                            <span>{(usdValue / (item.Value / item.Nominal)).toFixed(3)} {activeCurrencies}</span>
                                        </div>
                                })
                            )}
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Exchange
