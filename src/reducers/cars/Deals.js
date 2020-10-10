//Car Deals Reducer

const DealsReducerDefaultState = [
    {
        id: 1,
        name: 'abc',
        price: 499.99,
        currency: 'INR',
        dealername: 'abc'
      },
      {
        id: 2,
        name: 'xyz',
        price: 499.99,
        currency: 'INR',
        dealername: 'xyz'
      }
];

export default (state = DealsReducerDefaultState,action) => {
        return state;
};