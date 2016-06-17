var iap = require('../index.js');
var data = require('./test-apple.json');

iap.verifyPayment(data.platform, data.payment, function (error, result) {
  console.log(error, result);
});
