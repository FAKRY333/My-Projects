// let's make a greate calc 
let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let op = document.getElementById("op");
let btn = document.getElementById("sub");
let result = document.querySelector('.result')
function calc(num1 , op , num2) {
if (op === '+') {
return    num1 + num2 ; 
} else if (op === '-') {
return    num1 - num2 ; 
} else if (op === '/') {
return    num1 / num2 ; 
}  else if (op === '*') {
return    num1 * num2 ; 
} else if (op === '**') {
return    num1 ** num2 ; 
}else {
    return '<span style="color:red;">Enter valid oprator</span>' ;
}
}

btn.addEventListener('click', function (e) {
   let resl = calc(+num1.value , op.value , +num2.value);
     result.innerHTML = `<h2> ${resl}</h2>`;
})

let items = document.querySelector('.items');
for (i= 0 ;i < 12 ; i++){
    let item = document.createElement('div');
    item.className = `one ${i}`;
    item.textContent = `${i + 1}`;
 items.appendChild(item)


}



let item = document.querySelectorAll('.one');
function oprator() {
  num1.value += i ;
}
   item[0].onclick = function () {
        num1.value += 2 ;
    }
    item[1].onclick = function () {
        num1.value += 2 ;
    }
    item[2].onclick = function () {
        num1.value += 3 ;
    }
    item[3].onclick = function () {
        num1.value += 4 ;
    }
    item[4].onclick = function () {
        num1.value += 5 ;
    }
item[5].onclick = function () {
    num1.value += 6 ;
}
item[6].onclick = function () {
    num1.value += 7 ;
}
item[7].onclick = function () {
    num1.value += 8 ;
}
item[8].onclick = function () {
    num1.value += 9 ;
}
item[9].onclick = function () {
    num1.value += 0 ;
}


item[9].textContent = '0' ;
item[10].textContent = '+' ;
item[10].onclick = function () {
    op.value = '+' ;
}
item[11].textContent = '-' ;

item[11].onclick = function () {
    op.value = '-' ;
}
// two.onclick = function () {
//     num1.value += 2 ;
// }
items.onclick  = function () {

          if (!op.value === '') {

              console.log('yes not')
              item[0].onclick = function () {
                  num2.value += 1 ;
                }
                item[1].onclick = function () {
            num2.value += 2 ;
        }
        item[2].onclick = function () {
            num2.value += 3 ;
        }
        item[3].onclick = function () {
            num2.value += 4 ;
        }
        item[4].onclick = function () {
            num2.value += 5 ;
        }
        item[5].onclick = function () {
            num2.value += 6 ;
        }
        item[6].onclick = function () {
            num2.value += 7 ;
        }
        item[7].onclick = function () {
            num2.value += 8 ;
        }
        item[8].onclick = function () {
            num2.value += 9 ;
        }
        item[9].onclick = function () {
            num2.value += 0 ;
}

}  

}



// finshed simble calc 