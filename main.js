let table = document.getElementById('table')
let info = []
let tbody = document.getElementById('tbody')
let totalMarket = document.getElementById('totalMarket')
let activeCurrencies = document.getElementById('activeCurrencies')
let bitcoinPercent = document.getElementById('bitcoinPercent')

// setInterval(function() {
totalMarket.innerHTML = ''
activeCurrencies.innerHTML = ''
bitcoinPercent.innerHTML = ''
let promise1 = fetch('https://api.coinmarketcap.com/v1/global/').then(response => response.json()).then(data => {
  let total = document.createElement('p')
  total.textContent = `Total Market Cap: \$${data.total_market_cap_usd}`
  totalMarket.appendChild(total)

  let active = document.createElement('p')
  active.textContent = `Active Currencies: ${data.active_currencies}`
  activeCurrencies.appendChild(active)

  let bitcoin = document.createElement('p')
  bitcoin.textContent = `Bitcoin % of Market Cap: ${data.bitcoin_percentage_of_market_cap}%`
  bitcoinPercent.appendChild(bitcoin)
})
// }, 3500)

// setInterval(function() {
tbody.innerHTML = ''
let promise = fetch('https://api.coinmarketcap.com/v1/ticker/?limit=50').then(response => response.json()).then(data =>
  data.forEach(currency => {
    let listCoin = document.createElement('tr')

    let rank = document.createElement('td')
    rank.textContent = currency.rank
    rank.className = 'rank'
    listCoin.appendChild(rank)

    let name = document.createElement('td')
    name.textContent = currency.name
    name.className = 'name'
    listCoin.appendChild(name)

    let price = document.createElement('td')
    price.textContent = `\$${currency.price_usd}`
    price.className = 'price'
    listCoin.appendChild(price)

    let market = document.createElement('td')
    market.textContent = `\$${currency.market_cap_usd}`
    listCoin.appendChild(market)

    let supply = document.createElement('td')
    supply.textContent = currency.available_supply
    listCoin.appendChild(supply)

    let percentOne = document.createElement('td')
    percentOne.textContent = `${currency.percent_change_1h}%`
    if (percentOne.textContent.startsWith('-')) {
      percentOne.className = 'red'
    } else percentOne.className = 'green'
    listCoin.appendChild(percentOne)

    let percentDay = document.createElement('td')
    percentDay.textContent = `${currency.percent_change_24h}%`
    if (percentDay.textContent.startsWith('-')) {
      percentDay.className = 'red'
    } else percentDay.className = 'green'
    listCoin.appendChild(percentDay)

    let percentWeek = document.createElement('td')
    percentWeek.textContent = `${currency.percent_change_7d}%`
    if (percentWeek.textContent.startsWith('-')) {
      percentWeek.className = 'red'
    } else percentWeek.className = 'green'
    listCoin.appendChild(percentWeek)

    tbody.appendChild(listCoin)
  })
)
// }, 3500)
