// let's start to craete conter
let input = document.querySelector('.in');
let btn = document.querySelector('.btn');
let result = document.querySelector('.resONE');
let result1 = document.querySelector('.resTWO');
  

// function one and two here
function conter1(value) {
  return  value.length
}
function conter2(value) {
  return  value.split(' ').length
}

// event function 
btn.onclick = function () {
        result.innerHTML = `The litters is: ${(conter1(input.value))}`;
        // conter word 
        result1.innerHTML = `The words is: ${(conter2(input.value))}`;
}


// finshed made my fakry 