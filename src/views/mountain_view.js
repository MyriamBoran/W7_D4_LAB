const PubSub = require('../helpers/pub_sub.js');

const MountainView = function (container, mountain) {
  this.container = container;
  this.mountain = mountain
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
  mountainName.textContent = data.name
  this.container.appendChild(mountainName)

  const mountainHeader = this.createMountainHeading()
  this.container.appendChild(mountainHeader)

  const mountainList = document.createMountainLi()
  this.container.appendChild(mountainList)
}



MountainView.prototype.createMountainHeading = function () {
  const name = document.createElement('h3');
  name.classList.add('mountain-name');
  name.textContent = mountains.name;
  return name;
  }

MountainView.prototype.createMountainLi = function () {
  const mountainsList = document.createElement('ul');
  mountainsList.classList.add('mountains');
  this.populateList(mountainsList);
  return mountainsList;
};

MountainView.prototype.populateList = function (list) {
  this.mountain.forEach((mountain) => {
    const mountainListItem = document.createElement('li');
    mountainListItem.textContent = mountain.region;
    list.appendChild(mountainListItem);
  });
};


module.exports = MountainView;
