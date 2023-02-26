import React, { useEffect } from 'react'
import Header from '../Header/index'
import Footer from '../Footer'
import ExchangeRateStore from '../../data/stores/useExchangeRate'
// import reactLogo from '../../assets/react.svg'
// import './index.scss'

const App = () => {
  const URL = 'https://www.cbr-xml-daily.ru/daily_json.js';
  const { getRates } = ExchangeRateStore((state => state));

  useEffect(() => {
    getRates(URL);
  }, []);

  return (
    <div className="App">
      <Header />
      <Footer/>
    </div>
  )
}

export default App
