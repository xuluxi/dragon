import _ from './index.js';
window.onload = function() {
  let contentNode = document.querySelector('#content');
  contentNode.innerHTML = _.join(["I'm", "lucy"], ' ');
  var obj = {name: 'xlx', age: 23};
  const {name, age} = obj;
  console.log(name, age)
}
