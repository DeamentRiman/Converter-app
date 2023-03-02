import React, { useEffect, useState } from 'react'
import ExchangeRateStore from '../../data/stores/useExchangeRate'
import Loader from '../../components/Loader/index'
import './index.scss'

const Exchange: React.FC = () => {
    const { rates, date } = ExchangeRateStore((state) => state)
    const [loading, setLoading] = useState(true)
    const [activeCurrencies, setActiveCurrencies] = useState('RUB')
    const ratesArray = Object.values(rates)

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => {
            clearTimeout(timer)
        }
    }, [activeCurrencies])

    return (
        <main className="appMain">
            <h1 className="appMainTitle">Exchange rate</h1>
            <p className="appMainDate">Date of rate: {date}</p>
            <div className="appMainChoose">
                <h4 className="appMainChooseTitle">Choose a currency</h4>
                <div className="appMainChooseCurr">
                    {ratesArray.map((rate) => {
                        return (
                            <input
                                className={
                                    activeCurrencies == rate.CharCode
                                        ? 'appMainChooseButtonActive'
                                        : 'appMainChooseButton'
                                }
                                type="button"
                                key={rate.ID}
                                value={rate.CharCode}
                                onClick={(evt) => {
                                    setActiveCurrencies(rate.CharCode)
                                }}
                            />
                        )
                    })}
                </div>
            </div>
            <div className="appMainRates">
                {loading ? (
                    <Loader />
                ) : (
                    <div className="appMainChoose">
                        <p className="appMainRatesActiveCurr">
                            Active currencies: {activeCurrencies}
                        </p>
                        <div className="appMainRatesCurr">
                            {activeCurrencies == 'RUB'
                                ? ratesArray.map((item) => {
                                      if (item.CharCode == 'RUB') {
                                          return
                                      } else
                                          return (
                                              <div
                                                  className="appMainRatesValute"
                                                  key={item.ID}
                                              >
                                                  <span>
                                                      {item.Name},{' '}
                                                      {item.CharCode}
                                                  </span>
                                                  <span className="appMainRatesValuteValue">
                                                      {item.Value.toFixed(3)}{' '}
                                                      {activeCurrencies}
                                                  </span>
                                              </div>
                                          )
                                  })
                                : ratesArray.map((item) => {
                                      if (item.CharCode == activeCurrencies) {
                                          return
                                      } else {
                                          if (item.CharCode == 'RUB') {
                                              return (
                                                  <div
                                                      className="appMainRatesValute"
                                                      key={item.ID}
                                                  >
                                                      <span>
                                                          {item.Name},{' '}
                                                          {item.CharCode}
                                                      </span>
                                                      <span className="appMainRatesValuteValue">
                                                          {(
                                                              rates[
                                                                  activeCurrencies
                                                              ].Nominal /
                                                              rates[
                                                                  activeCurrencies
                                                              ].Value
                                                          ).toFixed(3)}{' '}
                                                          {activeCurrencies}
                                                      </span>
                                                  </div>
                                              )
                                          } else {
                                              return (
                                                  <div
                                                      className="appMainRatesValute"
                                                      key={item.ID}
                                                  >
                                                      <span>
                                                          {item.Name},{' '}
                                                          {item.CharCode}
                                                      </span>
                                                      <span className="appMainRatesValuteValue">
                                                          {(
                                                              (item.Value *
                                                                  rates[
                                                                      activeCurrencies
                                                                  ].Nominal) /
                                                              (item.Nominal *
                                                                  rates[
                                                                      activeCurrencies
                                                                  ].Value)
                                                          ).toFixed(3)}{' '}
                                                          {activeCurrencies}
                                                      </span>
                                                  </div>
                                              )
                                          }
                                      }
                                  })}
                        </div>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Exchange
