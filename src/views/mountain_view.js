const PubSub = require('../helpers/pub_sub.js');

const MountainView = function (container) {
  this.container = container;
}


// MountainView.prototype.bindEvents = function () {
//   // PubSub.subscribe("Activity:mountain-ready", event => {
//   //   console.log(event.detail);
//   //   const mountain = event.detail
//   //   this.render(mountain)
//   // })
// };

MountainView.prototype.render = function(data) {
  // this.container.innerHTML = ""

  const mountainName = document.createElement("div")
  mountainName.classList.add("mountains")
  // mountainName.textContent = data.name
  this.container.appendChild(mountainName)

  const mountainHeader = this.createMountainHeading(data)
  this.container.appendChild(mountainHeader)

  const mountainList = this.populateList(data)
  this.container.appendChild(mountainList)
}



MountainView.prototype.createMountainHeading = function (mountain) {
  const name = document.createElement('h1');
  name.classList.add('mountain-name');
  name.textContent = mountain.name;
  return name;
  }

MountainView.prototype.populateList = function (mountain) {
  const mountainsList = document.createElement('ul');
  mountainsList.classList.add('mountains');
  this.createMountainLi(mountainsList, mountain);
  return mountainsList;
};

MountainView.prototype.createMountainLi = function (list, mountain) {
  Object.keys(mountain).forEach((property) => {
    const mountainListItem = document.createElement('li');
    mountainListItem.textContent = mountain[property];
    list.appendChild(mountainListItem);
  });
};


module.exports = MountainView;
