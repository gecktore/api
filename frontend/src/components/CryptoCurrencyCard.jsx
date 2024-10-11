import { Card } from 'antd';

function CryptoCurrencyCard(props) {
    const { currency } = props
    const price = Math.round(currency.quote.USD.price)
    const percent_change = currency.quote.USD.percent_change_24h

    const changeColor = percent_change > 0 ? 'green':'red'
    const currentCap = (currency.quote.USD.fully_diluted_market_cap/1000000000000).toFixed(2)

    console.log(currency)
    if (!currency) {
        return <div>Загрузка...</div>; // Или другой элемент для отображения, пока currency загружается
    }
    return (
      <>
        <div>
        <Card
            title={
                <div className='flex items-center gap-3'>
                    <img src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${currency.id}.png`} />
                    <span>{currency.name}</span>
                </div>
            }
            style={{
                width: 300,
            }}
            >
            <p>Текущая цена: {price}$</p>
            <p>Изменение цены за 24 часа: <span style={{color: changeColor}}>{percent_change}%</span></p>
            <p>Текущая капитализация: {currentCap}$</p>
        </Card>
      </div>
      </>
    )
  }
  
  export default CryptoCurrencyCard
  