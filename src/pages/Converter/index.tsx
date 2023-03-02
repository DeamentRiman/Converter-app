import React, { useEffect, useState } from 'react'
import ExchangeRateStore from '../../data/stores/useExchangeRate'
import './index.scss'

const Converter = () => {
    const { rates, usdValue } = ExchangeRateStore((state) => state)
    const ratesArray = Object.values(rates)
    const [fromCurrency, setFromCurrency] = React.useState('USD')
    const [toCurrency, setToCurrency] = React.useState('RUB')
    const [fromValue, setFromValue] = useState(1)
    const [toValue, setToValue] = useState(0)

    function toRubl() {
        const convertation = ratesArray.filter(
            (item) => item.CharCode == fromCurrency
        )
        const a = +(convertation[0].Value * fromValue).toFixed(3)
        setToValue(a)
    }

    const fromOtherCurr = () => {
        if (fromCurrency == 'RUB') {
            const convertation = ratesArray.filter(
                (item) => item.CharCode == toCurrency
            )
            const a = +(
                (fromValue * convertation[0].Nominal) /
                convertation[0].Value
            ).toFixed(3)
            setToValue(a)
        } else {
            const convertation = ratesArray.filter(
                (item) => item.CharCode == toCurrency
            )
            const a = +(
                (fromValue * usdValue * convertation[0].Nominal) /
                convertation[0].Value
            ).toFixed(3)
            setToValue(a)
        }
    }

    useEffect(() => {
        if (ratesArray.length >= 2) {
            toCurrency == 'RUB' ? toRubl() : fromOtherCurr()
        }
    }, [ratesArray])

    return (
        <main className="appMain">
            <section className="appMainContainer">
                <div className="appMainFrom">
                    <h4 className="appMainChooseTitle">From currency:</h4>
                    <div className="appMainFromCurr">
                        {ratesArray.map((rate) => {
                            return (
                                <input
                                    className={
                                        fromCurrency == rate.CharCode
                                            ? 'appMainChooseButtonActive'
                                            : 'appMainChooseButton'
                                    }
                                    type="button"
                                    key={rate.ID}
                                    value={rate.CharCode}
                                    onClick={(evt) => {
                                        evt.preventDefault()
                                        setFromCurrency(rate.CharCode)
                                    }}
                                />
                            )
                        })}
                    </div>

                    {
                        <input
                            className="appMainValue"
                            type="number"
                            value={fromValue}
                            onChange={(evt) => {
                                const evtValue = Number(evt.target.value)
                                setFromValue(evtValue)
                            }}
                        />
                    }
                </div>
                <div className="appMainTo">
                    <h4 className="appMainChooseTitle">To currency:</h4>
                    <div className="appMainToCurr">
                        {ratesArray.map((rate) => {
                            return (
                                <input
                                    className={
                                        toCurrency == rate.CharCode
                                            ? 'appMainChooseButtonActive'
                                            : 'appMainChooseButton'
                                    }
                                    type="button"
                                    key={rate.ID}
                                    value={rate.CharCode}
                                    onClick={(evt) => {
                                        setToCurrency(rate.CharCode)
                                    }}
                                />
                            )
                        })}
                    </div>

                    {
                        <input
                            className="appMainValue"
                            type="number"
                            value={toValue}
                            onChange={(evt) => console.log(1)}
                        />
                    }
                </div>
            </section>
        </main>
    )
}

export default Converter
