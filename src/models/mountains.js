const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');


const Mountains = function () {
  this.mountain = null;
};

// Mountains.prototype.bindEvents = function () {
//   PubSub.subscribe('Activity:all-mountains-ready', (event) => {
//     const mountainType = event.detail;
//     this.get(mountainType);
//   });
// };

Mountains.prototype.get = function (data) {
  const url = 'https://munroapi.herokuapp.com/munros';
  const request = new RequestHelper(url);

  request.get(data)
    .then( (mountains) => {
      this.mountain = mountains;
      console.log(mountains);
      PubSub.publish('Activity:mountain-ready', this.mountain);
    })
    // .catch( (err) => {
    //   PubSub.publish('Activity:error', err);
    // })
};

module.exports = Mountains;
