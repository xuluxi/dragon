import _ from './index.js';
window.onload = function() {
  let contentNode = document.querySelector('#content');
  contentNode.innerHTML = _.join(["I'm", "lucy"], ' ');
  var obj = {name: 'xlx', age: 23};
  var arr = [1,2,3,4];
  console.log(Object.keys(obj))
  for (let i of arr) {
    console.log(i)
  }
}
