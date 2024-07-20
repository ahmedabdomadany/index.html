
(function (window) {
    var yaakovGreeter = {}; 
    yaakovGreeter.name = "Yaakov";
    var greeting="thanks";
    yaakovGreeter.sayHello=function () {
    console.log(greeting + yaakovGreeter.name);
    }
    window.yaakovGreeter = yaakovGreeter;
    })(window);