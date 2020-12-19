// functions
//function declaration
function test(params) {
    console.log("this is test");
}
//test();

// outer variables
var message="sheam"
function  test() {
    var message = "Hasan"
    console.log(message)
}
//test();

//console.log("outside of the variable "+message);

//Naming a function
/*
Function starting with…

"get…" – return a value,
"calc…" – calculate something,
"create…" – create something,
"check…" – check something and return a boolean, etc.
*/

// function expression and argumments
var afnc = function (params) {
    return `Here is the params: ${params}`
}
//console.log(afnc(2+3))

// arrow function
var arrowFn = (params) => {
    console.log("I am from arrow FN "+params)
    var params = "hasan"
    return params

}
//console.log(arrowFn('sheam'))
 

// arrow function example
let newArrowFn = (products) => {
    // iteration way 1
    for(let i = 0; i< products.length; i++){
        console.log(products[i]+" "+typeof products[i]); 
        //type show number
    }
    // iteration way 2
    for(product in products){
        console.log(typeof products[product]);
       // type show string
    }
    return 0;
}

let products = [10,20, 25,35,10]
//newArrowFn(products);

products.forEach(value => {
    //console.log(value);
})
