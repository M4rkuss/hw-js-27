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
// document.oncontextmenu = function (){
//   return false
// };
//
// function noSelect() {return false;}
// document.ondragstart = noSelect;
// document.onselectstart = noSelect;
// document.oncontextmenu = noSelect;

//3)
var timeId;
function showTime() {
  let time = new Date()
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  document.getElementById('hour').textContent = hour.toString();
  document.getElementById('minute').textContent = min.toString();
  document.getElementById('second').textContent = sec.toString();
}

document.getElementById('startBtn').addEventListener('click', function () {
  if (!timeId) {
    timeId = setInterval(showTime, 1000);
  }
  showTime();
});

document.getElementById('stopBtn').addEventListener('click', function () {
  clearInterval(timeId);
  timeId = null;
  document.getElementById('hour').textContent = 'hh';
  document.getElementById('minute').textContent = 'min';
  document.getElementById('second').textContent = 'sec';
});