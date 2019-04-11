const MountainViewResult = require('./views/mountain_view_result.js');
const Mountains = require('./models/mountains.js')
// const ErrorView = require('./views/error_view.js');

document.addEventListener('DOMContentLoaded', () => {
  const mountainsContainer = document.querySelector('div#mountains');
  const mountainsListView = new MountainViewResult(mountainsContainer);
  mountainsListView.bindEvents();

  const mountains = new Mountains();
  mountains.get();
});
