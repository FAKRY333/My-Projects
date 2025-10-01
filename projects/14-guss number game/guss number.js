// let's create guss game
let input = document.getElementById('in');
let btn = document.getElementById('btn');
let res =document.querySelector('.res');
let resDiv =document.querySelector('.result1');
let rondom =  Math.floor(Math.random() * 5) + 1  ;
console.log(rondom) ; 


// test value 

btn.addEventListener('click',function (e) {

    // firs condtion
    if (input.value === "") {
            e.preventDefault
        }



// two condtion
        if (+input.value === rondom) {
            res.innerHTML =  'yes you win' ;
            resDiv.innerHTML =  '<button id="new1">NEW GAME</button>';
            let bn = document.getElementById('new1');
            bn.onclick = function () {
                location.reload()
            }
        } else {
            let msg = document.createTextNode('Not Right');
            let h2 = document.createElement('h2');
            h2.className = 'msg';
            h2.appendChild(msg);
            res.appendChild(h2);
            // three nested condtion
            if (document.querySelectorAll('.msg').length === 3) {
                btn.disabled = true; 
                res.innerHTML = 'your lost' ;
                resDiv.innerHTML =  '<button id="new2">NEW GAME</button>';
                let bn = document.getElementById('new2');
                      bn.onclick = function () {
                    location.reload()
                }
            }
    }
 

        // reload one new game 
    })
 input.onblur = function ()  {
    if (input.value === '') {
        btn.disabled = true ;
    } 

 }
//   input.onblur = function ()  {
//     if (!input.value === '') {
//         btn.disabled = false ;
//     } 
    
//  }