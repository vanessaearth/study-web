module.exports = {
  devServer: {
    before (app) {
      app.get('/api/list', (req, res) => {
        res.json([
          { id: 1, name: 'tom', selected: true },
          { id: 2, name: 'jerry', selected: false }
        ])
      })
    }
  }
}
