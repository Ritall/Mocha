![Alt text](https://img.shields.io/shippable/5630e9941895ca4474218fe2.svg)
Express API Testing
==============
An example on how to test your server API using [Superagent](https://github.com/visionmedia/superagent).
Reference for Integration Testing lab for FSE Fall 2015 at CMU-SV.

Install
==============
1. Install needed tools using: `npm install -g grunt-cli mocha istanbul` (optional)
2. Install needed dependencies using: `npm install`

Tests results (local)
==============
* `grunt test`

### How to initialize server for testing
On `test/users-api.js` start the server by including the following:
```javascript
var debug = require('debug')('Node-API-Testing');
var app = require('../app');

app.set('port', PORT);
app.set('testing', true);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
```

Shippable integration - CI
==============
![Alt text](https://img.shields.io/shippable/5630e9941895ca4474218fe2.svg)

* Link your account with shippable by following [Step 3: Enable CI/CD for repos](http://docs.shippable.com/#step-3-enable-cicd-for-repos).

* After the account is linked, when you push changes to the repo shippable will run your tests and code coverage.

* You can see the results under `Tests`.

* Note that code coverage will not work for this case. This happens because the app is being tested from the outside using `superagent`. `istanbul` sees the app as a black box.

### Test Results
![Alt text](/coverage/testresult.jpg)

### Code Coverage
![Alt text](/coverage/coverageresult.jpg)
