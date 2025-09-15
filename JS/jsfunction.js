// function hello(user='Guest'){
//     console.log(`Hello ${user}`);
// }
// hello(25);
// hello();
// Sum of two no.
// function sum(a=5,b=1){
//     return (a+b);
// }
// console.log(sum(23,34));
// console.log(sum(1));
// console.log(sum());

// const add=(a,b) => a+b;
// console.log(add(3,4));
// const hello=()=>console.log('Hello');
// hello();

// IIFE Example
// (function(){
//     console.log('Hello Ashish');
// })();

//Callback
function hello(user,callback){
    console.log(`Hello ${user}`);
    callback();
}
hello('Admin',()=>
    {console.log(add(7,8))});
hello('Admin',function(){
    console.log(add(5,5))
});