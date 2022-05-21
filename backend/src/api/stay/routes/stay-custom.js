module.exports = {
  routes: [
    {
      method: 'POST',
      path: '/stays/:id/checkin',
      handler: 'stay.checkin',
    },
    {
      method: 'POST',
      path: '/stays/:id/checkout',
      handler: 'stay.checkout',
    },
  ]
}
