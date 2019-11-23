
// 1) number
var num1 = 5;
var num2 = 10;
var res = num1 + num2;

// 2) string
var valStr = '5';

// 3) boolean
var result = 5 > 6;

// 4) undefined
var resValue;

// 5) null
var resValue2 = null;

// 6) Object array
var names = ['vasa','an', 'alex'];

// 6) Object object
var user = {name:'Vasa', age: 25, email: '@'};

// 6) Function function() {}

console.log(user .name);

'use strict'

var num1 = + prompt('input number1');
var num2 = + prompt('input number2');

var result = + num1 + +num2;

if(result && result !==10) {
var result = num1 + num2;

alert(result);
}
else if (result === 10) {
    alert('result 10');
}
else {
    alert('value should be number');
}

// a = 5, ++a = 6, a++ =f;
var a = 5;
var b =4;
             //6   //6   //5
var result = ++a + a++ - ++b;


var cities = ['Dnipro', 'Odessa', 'Kiev', 'Lviv'];

 for(var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
 }

 //to je 
 for(var i in cities) {console.log(cities[i]);}
 //eshe proshe 
 for(var i of cities) {console.log(cities[i]);}





 function show () {
    render(cities,'#list');
}


var btn = document.querySelector('#list-btn');


btn.onclick = show;














render(names,'#list2');


function render (data, id) {
    var container = document.querySelector(id);

var html = '';

console.log(container);

 for(var item of data) {
     html+= '<li>' + item + '</li>';
}

container.innerHTML = html;
}


/*function Parent() {
    var a = 10;
    var b = 28;

    var Child = function() {
        var r = 'hello child'

    var child2 = function() {
        console.log (b);
        console.log (r);
    }

        console.dir(child2);
    }
    

    Child();
}


Parent(true) */
        
function Parent() {
    var res = 0;
         
    var Child = function() {
        console.log(res);
    }
    return Child;
}

var res = Parent();

res();