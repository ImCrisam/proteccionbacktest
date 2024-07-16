const status = require('../src/fibo/routes');

module.exports = (app) => {
  app.use('/fibo', status);
  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};
