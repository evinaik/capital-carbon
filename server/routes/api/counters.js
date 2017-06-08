var request = require('request');
var googleFinance = require('google-finance');
var _ = require('lodash');
var util = require('util');
const Finance = require('../../models/Finance');
const mongoose = require('mongoose');


module.exports = (app) => {
  app.get('/api/counters', (req, res, next) => {
    Counter.find()
      .exec()
      .then((counter) => res.json(counter))
      .catch((err) => next(err));
  });

  app.get('/api/info/:symbol/:year/:month/:day', (req, res, next) => {
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

        var symbols = [
          'AAPL',
          'GOOGL',
          'AMZN',
          'FB',
          'AMD',
          'COF',
          'TSLA',
          'TWTR',
        ]

        // Finance.collection.drop();

        // var nsymbols = symbols.map(function (x) {
        //   return 'NASDAQ:' + x;
        // });

        var from = req.params.year + '-' + (req.params.month - 1) + '-' + req.params.day;
        var to = req.params.year + '-' + req.params.month + '-' + req.params.day;

        var fin;

        googleFinance.historical({
          symbol: 'NASDAQ:' + req.params.symbol,
          from: from,
          to: to,
        }, function (err, quotes) {
          if (err) { throw err; }
          // var temp = nsymbols.indexOf(req.params.symbol);
          var kys = Object.keys(n);
          // console.log(kys);
          // console.log(n);
          fin = new Finance({
            company: req.params.symbol,
            volume: n[kys[symbols.indexOf(req.params.symbol.toUpperCase())]],
            open: quotes[0] ? quotes[0].open : 0,
            close: quotes[0] ? quotes[0].close : 0,
            high: quotes[0] ? quotes[0].high : 0,
            low: quotes[0] ? quotes[0].low : 0,
            sales: quotes[0] ? quotes[0].volume : 0,
            hopen: quotes[quotes.length - 1] ? quotes[quotes.length - 1].open : 0,
            hclose: quotes[quotes.length - 1] ? quotes[quotes.length - 1].close : 0,
            hhigh: quotes[quotes.length - 1] ? quotes[quotes.length - 1].high : 0,
            hlow: quotes[quotes.length - 1] ? quotes[quotes.length - 1].low : 0,
            hsales: quotes[quotes.length - 1] ? quotes[quotes.length - 1].volume : 0,
          });
          googleFinance.companyNews({
            symbol: 'NASDAQ:' + req.params.symbol,
          }, function (err2, news) {
            if (err2) { throw err2; }
            fin.news = news[0].title || '';
            // console.log(fin);
            fin.save()
              .then()
              .catch((err) => next(err));
          })

          res.end(JSON.stringify(fin));
        })
      }
    });
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
