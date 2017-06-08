var request = require('request');
const Counter = require('../../models/Counter');

module.exports = (app) => {
  app.get('/api/counters', (req, res, next) => {
    Counter.find()
      .exec()
      .then((counter) => res.json(counter))
      .catch((err) => next(err));
  });

  app.get('/api/purchases', (req, res, next) => {
    request('http://api.reimaginebanking.com/accounts/59381913a73e4942cdafd797/purchases?key=d313680b12769feb817a469882c676a4', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var j = JSON.parse(body);
        var n = j.reduce(function (pv, cv) {
          if (pv[cv.merchant_id]) {
            pv[cv.merchant_id] += cv.amount;
          } else {
            pv[cv.merchant_id] = cv.amount;
          }

          return pv;
        }, {});
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(n));
      }
    })
  });

  app.post('/api/counters', function (req, res, next) {
    const counter = new Counter();

    counter.save()
      .then(() => res.json(counter))
      .catch((err) => next(err));
  });

  app.delete('/api/counters/:id', function (req, res, next) {
    Counter.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((counter) => res.json())
      .catch((err) => next(err));
  });

  app.put('/api/counters/:id/increment', (req, res, next) => {
    Counter.findById(req.params.id)
      .exec()
      .then((counter) => {
        counter.count++;

        counter.save()
          .then(() => res.json(counter))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });

  app.put('/api/counters/:id/decrement', (req, res, next) => {
    Counter.findById(req.params.id)
      .exec()
      .then((counter) => {
        counter.count--;

        counter.save()
          .then(() => res.json(counter))
          .catch((err) => next(err));
      })
      .catch((err) => next(err));
  });
};
