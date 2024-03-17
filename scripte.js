/*
const btn= document.querySelectorAll("button");
btn.target.onclick= function(e){
    let count = e.textContent;
    e.innerHTML= count-1;
}
*/
function decrease(boxNumber) {
    var counterSpan = document.getElementById("counter" + boxNumber);
    var currentCount = parseInt(counterSpan.textContent);
    if(currentCount == 0)
    return;
    counterSpan.textContent = currentCount - 1;
  }
  