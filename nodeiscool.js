function sayHello(){
    console.log("Good Morning PD1 Softdev")
}

//sayHello();

//will return error that window is not defined, why??
//console.log(window);








//console.log(); // global object
//setTimeout(); //also a global object, call a function after a delay

//console.log() will be ran by the browser as window.console.log(message)

//global.console.log()
var message = "hello world";
console.log(global.message);
//we get undefined 