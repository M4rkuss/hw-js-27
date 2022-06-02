//1)
// let arr = []
// let str
// do {
//  str = prompt('Add smth to list');
//  arr.push(str);
// } while (!!str == true);
//
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i]) {
//     let li = document.createElement('li')
//     document.getElementById('list').append(li)
//   }
//   document.getElementsByTagName('li')[i].innerText = arr[i];
// }

//2)
document.oncontextmenu = function (){
  return false
};

function noSelect() {return false;}
document.ondragstart = noSelect;
document.onselectstart = noSelect;
document.oncontextmenu = noSelect;
