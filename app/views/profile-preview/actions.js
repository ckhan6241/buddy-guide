export default {

  global: {
    onChangePriceRange: (priceRange) => ({ type: 'SELECT', key: 'SELECT_PRICE_RANGE', value: priceRange }),

    onChangeAge: (age) => ({ type: 'SELECT', key: 'SELECT_AGE', value: age }),

    onChangeTransport: (required) => ({ type: 'SELECT', key: 'SELECT_TRANSPORT', value: required })
  }
}