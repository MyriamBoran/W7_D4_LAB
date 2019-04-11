const PubSub = require('../helpers/pub_sub.js');
const MountainView = require('./mountain_view.js');

const MountainViewResult = function (container) {
  this.container = container;
}

MountainViewResult.prototype.bindEvents = function () {
  PubSub.subscribe('Activity:mountain-ready', (evt) => {
    const mountains = evt.detail;
    this.render(mountains);
  });
};

MountainViewResult.prototype.render = function (mountains) {
  mountains.forEach(mountain => {
    // console.log(mountain);
    const mountainView = new MountainView(this.container);
    mountainView.render(mountain);
  });
};



module.exports = MountainViewResult;
