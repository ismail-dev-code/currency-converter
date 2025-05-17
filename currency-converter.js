class currencyConverter {
  async setBaseCurrency(currency) {
    const apiUrl = `https://api.exchangerate-api.com/v4/latest/${currency.toUpperCase()}`;
    const response = fetch(apiUrl);
    const data = (await response).json();
  }
  async convertTo(currency, amount = 1) {}
}
