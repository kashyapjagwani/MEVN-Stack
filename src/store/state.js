const state = {
  itemsToShow: [
    {
      id: 1,
      name: 'Cake',
      price: 100,
      description: 'Hello I am cake',
    },
    {
      id: 2,
      name: 'Cake',
      price: 100,
      description: 'Hello I am cake',
    }
  ],
  cart: [],
  orders: [
    {
      id: 1,
      items: [
        {
          id: 2,
          name: 'Cake',
          price: 100,
          description: 'Hello I am cake',
          count: 5
        },
        {
          id: 1,
          name: 'Cake',
          price: 100,
          description: 'Hello I am cake',
          count: 2
        }
      ],
      customer_name: 'Mohan Ram',
      customer_phone: 992312323,
      customer_message: 'Extra candles',
      total_amount: 700,
      status: 'Completed'
    }
  ]
}

export default state