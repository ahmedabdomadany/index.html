
(function (window) {
     var johnGreeter = {}; 
     johnGreeter.name="ahmed";
var greeting = "welcom";
johnGreeter.sayHi = function () 
{
     console.log(greeting + johnGreeter.name);
}
window.johnGreeter= johnGreeter;
})(window);