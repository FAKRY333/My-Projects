opject = {
    theName: 'fakry',
    age: 16,
    contry: 'egypt'
}
 let {theName:n , age:a , contry:c} = opject ;
 console.log(n);
window.localStorage.setItem('names', [ `the name is ${n}`, `the age is ` + a ,`the contry is `+ c , {sckills:['html', 'css']}]);
